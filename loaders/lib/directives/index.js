const properties = require('./properties.json');

module.exports = function translateDirective(directive) {
  let type = '';

  if (directive.includes('kleur')) {
    type = 'color';
  } else {
    type = 'other';
  }

  return {
    translatedDirective: 'background-color',
    type
  };
};
