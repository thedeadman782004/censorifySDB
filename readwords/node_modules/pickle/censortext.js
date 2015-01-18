// Stephen Burgos from textbook for CIS 363
// Last Changed: Jan.18.15

var censoredWords = ["damn", "hell", "darn", "heck","barcalounger"];
var customCensoredWords = [];
function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "*pickle*");
	}
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "*pickle*");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
	}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;