// var result = "Tom is at his computer.".split("")
// const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

// function checkUsername(username) {
// 	var isUserNameOk = true

// 	for (var i = 0; i < restrictedWords.length; i += 1) {
// 		var includesRestrictedWord = username.includes(restrictedWords[i])
// 		if (includesRestrictedWord) {
// 			isUserNameOk = false
// 		}
// 	}

// 	return isUserNameOk
// }

// console.log(checkUsername("mike45")) // true
// console.log(checkUsername("apple45")) // false

var result = "tom james jones"

// var capitalized = result.replace(/(^|\s)[a-z]/g, (x) => x.toLocaleUpperCase())
// console.log(capitalized)

var splitIntoWords = result.split(" ")

for (var i = 0; i < splitIntoWords.length; i += 1) {
	var currentWord = splitIntoWords[i]
	var lettersOfCurrentWord = currentWord.split("")
	lettersOfCurrentWord[0] = lettersOfCurrentWord[0].toLocaleUpperCase()
	splitIntoWords[i] = lettersOfCurrentWord.join("")
}
const capitalizedName = splitIntoWords.join(" ")
console.log(capitalizedName)

