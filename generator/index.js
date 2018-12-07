var css = require('./css.json');
var translations = require('./translations.json');
var fs = require('fs');

var newCSS = {};

css.forEach(key => {
  var prop = key.property;
  var splittedProp = key.property.split(/-/);
  
  
  var translatedProp = 
  (splittedProp[0] ? translations[splittedProp[0]] : '')+
  (splittedProp[1] ? '-'+translations[splittedProp[1]] : '')+
  (splittedProp[2] ? '-'+translations[splittedProp[2]] : '')+
  (splittedProp[3] ? '-'+translations[splittedProp[3]] : '')
  
  if(!newCSS.prop) {
    newCSS[translatedProp] = {
      property: key.property,
      type: ""
    }
  }

  // splittedProp.forEach(plit => {
  //   translations[plit] = "";
  // });



  // if(prop[0]) {
    
  //   if(!prop[1]) {
  //     newCSS[prop[0]] = {
  //       property: key.property
  //     };
  //   }
  //   // if(prop[1]) {
  //   //   newCSS[prop[0]][prop[1]] = {
        
  //   //   };
  //   // } else {
  //   //   newCSS[prop[0]] = {
  //   //     property: key.property
  //   //   };
  //   // }
  //   // if(prop[2]) {
  //   //   newCSS[prop[0]][prop[1]][prop[2]] = {
        
  //   //   };
  //   // } else {
  //   //   newCSS[prop[1]] = {
  //   //     property: key.property
  //   //   };
  //   // }
  // }

  
 
  
});

var fileData = JSON.stringify(newCSS);
fs.writeFile("./newCSS.json", fileData, function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
}); 