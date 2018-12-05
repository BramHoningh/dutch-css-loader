module.exports = function(content, map, meta) {
  const returnType = '.title{background-color:red;}';

  const parsedContent = parseContent(content);
  console.log('========== PARSED CONTENT ==========');
  console.log(parsedContent);
  console.log('======== END PARSED CONTENT ===========');

  this.callback(null, returnType, map, meta);
};

function parseContent(content) {
  if (!content.length) return '';

  const pattern = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
  const unified = new RegExp(pattern, 'gi');
  let arr;

  console.log('arr', arr);

}

