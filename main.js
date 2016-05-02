// PART ONE
var alphabetSoup = function(str) {
	var strarr = str.split("");
	var alphabetized = strarr.sort().join('');
	return alphabetized;
}

console.log(alphabetSoup("hello"));

// PART TWO
var vowelCount = function(str) {
	var strarr = str.toLowerCase().split("");
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var totalvowels = 0;
	for (var i = 0; i < strarr.length; i++) {
		if (vowels.indexOf(strarr[i]) > -1) {
			totalvowels++;
		}
	}
	return totalvowels;
}

console.log(vowelCount("All cows eat grass"));

function alphabetSoup(str) {
    return str.split('').sort().join('')
}
console.log(alphabetSoup('hello'))

function vowelCount(str) {
    var vowels = 'aeiou'
    var count = 0
    str.split('').forEach(function (letter) {
        if (vowels.indexOf(letter.toLowerCase()) > -1)
            count++
    })
    return count
}
console.log(vowelCount('all cows eat grass'))

function coinDeterminer(input) {
    var coins = [11, 9, 7, 5, 1]
    var possibilities = []
    var coinsUsed = 0
    for (i = 0; i < coins.length; i++) {
        countCoins(input)
        coins.shift()
    }

    function countCoins(input) {
        for (j = 0; j < coins.length; j++) {
            while (input >= coins[j]) {
                input -= coins[j]
                coinsUsed++
            }
        }
        possibilities.push(coinsUsed)
        coinsUsed = 0
    }
    possibilities.sort(function (a, b) {
        return a - b
    })
    return possibilities[0]
}
console.log(coinDeterminer(25))
