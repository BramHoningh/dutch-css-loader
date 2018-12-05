const parseRules = require('./ParseRules');

module.exports = function parseContent(content) {
  if (!content || !content.length || content === undefined) return [];

  const pattern = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
  const commentPattern = '(\\/\\*[\\s\\S]*?\\*\\/)';
  const keyframePattern = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})';
  const importPattern = '@import .*?;';
  const unified = new RegExp(pattern, 'gi');

  let arr;

  const dcss = [];
  const importStatements = [];

  while (true) {
    const importsRegex = new RegExp(importPattern, 'gi');
    const imports  = importsRegex.exec(content);
    if (imports !== null) {
      importStatements.push(imports[0]);
      dcss.push({
        selector: '@imports',
        type: 'imports',
        styles: imports[0]
      });
    } else {
      break;
    }
  }

  content = content.replace(importPattern, '');

  const keyframesRegex = new RegExp(keyframePattern, 'gi');
  while (true) {
    arr = keyframesRegex.exec(content);
    if (arr === null) break;
    dcss.push({
      selector: '@keyframes',
      type: 'keyframes',
      styles: arr[0]
    });
  }

  content = content.replace(keyframesRegex, '');

  while (true) {
    arr = unified.exec(content);
    if (arr === null) break;

    let selector = '';
    if (arr[2] === undefined) {
      selector = arr[5].split('\r\n').join('\n').trim();
    } else {
      selector = arr[2].split('\r\n').join('\n').trim();
    }

    const commentRegex = new RegExp(commentPattern, 'gi');
    const comments = commentRegex.exec(selector);
    if (comments !== null) {
      selector = selector.replace(commentRegex, '').trim();
    }

    selector = selector.replace(/\n+/, "\n");

    if (selector.indexOf('@media') !== -1) {
      // Type is a @media query
      const dcssObject = {
        selector: selector,
        type: 'media',
        subStyles: parseContent(arr[3] + '\n}')
      };
      if (comments !== null) {
        dcssObject.comments = comments[0];
      }
      dcss.push(dcssObject);
    } else {
      // Standard dcss
      const rules = parseRules(arr[6]);
      const style = {
        selector,
        rules
      };

      if (selector === '@font-face') {
        style.type = 'font-face';
      }
      if (comments !== null) {
        style.comments = comments[0];
      }
      dcss.push(style);
    }
  }

  return dcss;
};
