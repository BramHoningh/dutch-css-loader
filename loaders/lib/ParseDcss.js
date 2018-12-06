const parseContent = require('./ParseContent');
const translateDirective = require('./directives');
const translateValue = require('./values');

module.exports = function parseDcss(rawDcss) {
  const parsedContent = parseContent(rawDcss);
  let parsedDcss = '';

  parsedContent.forEach(item => {
    const { selector, rules } = item;
    const translatedRules = parseRules(rules);

    parsedDcss += `${selector}${translatedRules}\n`;
  });

  return parsedDcss;
};

function parseRules(rules) {
  if (!rules.length) return;

  let translatedRules = '';

  rules.forEach(rule => {
    const { directive, value } = rule;
    if (!directive.length || !value.length) return;

    const { translatedDirective, type } = translateDirective(directive);
    const translatedValue = translateValue(value, type);

    translatedRules += `  ${translatedDirective}: ${translatedValue};\n`;
  });

  return `{\n${translatedRules}}`;
}
