const parseContent = require('./ParseContent');
const translateDirective = require('./directives');

module.exports = function parseDcss(rawDcss) {
  const parsedContent = parseContent(rawDcss);

  parsedContent.forEach(item => {
    const { selector, rules } = item;
    console.log(selector);
    parseRules(rules);
  });

  return parsedContent;
};

function parseRules(rules) {
  if (!rules.length) return;

  rules.forEach(rule => {
    const { directive, value } = rule;
    if (!directive.length || !value.length) return;

    translateDirective(directive);
  })
}
