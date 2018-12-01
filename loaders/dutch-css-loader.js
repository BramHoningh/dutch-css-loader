module.exports = function(content, map, meta) {
  const returnType = '.title{background-color:blue;}';

  this.callback(null, returnType, map, meta);
};