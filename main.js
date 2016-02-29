// PART ONE
var alphabetSoup = function(str) {
var strarr = str.split("");
var alphabetized = strarr.sort().join('');
return alphabetized;
}

console.log(alphabetSoup("helloWord"));