var censor = require("pickle"); 
console.log(censor.getCensoredWords()); 
console.log(censor.censor("I want to sit in a darn barcalounger and raise hell all day.")); 
censor.addCensoredWord("sit");
console.log(censor.getCensoredWords()); 
console.log(censor.censor("I want to sit in a darn barcalounger and raise hell all day."));