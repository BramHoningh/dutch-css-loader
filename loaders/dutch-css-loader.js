module.exports = function(content, map, meta) {
  const returnType = '.title{background-color:red;}';

  const parsedContent = parseContent(content);

  this.callback(null, returnType, map, meta);
};

function parseContent(content) {
  console.log('hallo');
}