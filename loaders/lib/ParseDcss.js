const parseContent = require('./ParseContent');

module.exports = function parseDcss(rawDcss) {
  const parsedContent = parseContent(rawDcss);

  parsedContent.forEach(item => {
    console.log(item);
  })

  return parsedContent;
};
