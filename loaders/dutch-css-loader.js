const parseDcss = require('./lib/ParseDcss');

module.exports = function(content, map, meta) {
  const returnType = '.title{background-color:red;}';

  const parsedDcss = parseDcss(content);
  console.log('========== PARSED DCSS ==========');
  console.log(parsedDcss);
  console.log('======== END PARSED DCSS ===========' );


  this.callback(null, returnType, map, meta);
};
