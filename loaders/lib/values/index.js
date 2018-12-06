const colors = require('./colors.json');

module.exports = function translateValue(value, type) {
  if (!type) throw new Error('Value type is not defined');
  if (!value) throw new Error('Value is not defined');

  if (type === 'color') {
    if (value.includes('#')) return value;

    const color = colors[value];
    if (!color) throw new Error(`Color ${value} does not exist`);

    return color;
  } else {
    return 'hallo';
  }
};
