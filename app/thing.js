// var module = module || {};

function checkWordCount(text) {
	if (text.split(' ').length < 100) {
		return true;
	} else {
		return false;
	}
}

function duplicateCheck(text) {
	var x = text.split(' ').sort();
	for (var i = 0; i <  x.length; i++) {
		if (x[i] == x[i+1]) {
			return false
		}
	}
	return true;
}

function verifyAlphaNumeric(text) {
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    for (var i = 0; i < text.length; i++) {
       if (iChars.indexOf(text.charAt(i)) != -1) {
           console.log("File name has special characters ~`!#$%^&*+=-[]\\\';,/{}|\":<>? \nThese are not allowed\n");
           return false;
       }
    }
    return true;
}



// document.getElementById("button").addEventListener("click", function() {
// 	var contents = document.getElementById("text").value;
// 	console.log("check word ct", checkWordCount(contents));
// 	console.log("check for characters", verifyAlphaNumeric(contents));
// 	console.log("check for duplicates", duplicateCheck(contents));
// });

module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric };