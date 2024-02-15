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

// var result = "tom james jones"

// var capitalized = result.replace(/(^|\s)[a-z]/g, (x) => x.toLocaleUpperCase())
// console.log(capitalized)

// var splitIntoWords = result.split(" ")

// for (var i = 0; i < splitIntoWords.length; i += 1) {
// 	var currentWord = splitIntoWords[i]
// 	var lettersOfCurrentWord = currentWord.split("")
// 	lettersOfCurrentWord[0] = lettersOfCurrentWord[0].toLocaleUpperCase()
// 	splitIntoWords[i] = lettersOfCurrentWord.join("")
// }
// const capitalizedName = splitIntoWords.join(" ")
// console.log(capitalizedName)

// function findLargestWord(sentence) {
// 	var words = sentence.split(" ")
// 	var largestWord = ""

// 	for (var i = 0; i < words.length; i += 1) {
// 		if (words[i].length > largestWord.length) {
// 			largestWord = words[i]
// 		}
// 	}

// 	return largestWord
// }

// console.log(findLargestWord("Hello how are you today"))
// console.log(findLargestWord("It's really cold here today totals"))




// 1616 - "17th century"
// 1900 - "19th century"
// 2007 - "21st century"

// 1 - "1st century"
// 100 - "2nd century"

// function getFromYear(year) {
// 	const century = Math.ceil(year / 100)
// 	var suffix = "th"
// 	if (century % 100 >= 10 && century % 100 <= 20) {
// 		suffix = "th"
// 	} else if (century % 10 === 1) {
// 		suffix = "st"
// 	} else if (century % 10 === 2) {
// 		suffix = "nd"
// 	} else if (century % 10 === 3) {
// 		suffix = "rd"
// 	}

// 	return century + suffix + " century"
// }

// console.log(getFromYear(1616)) // 17th


function getNumberOfVowels(someString) {

}
// aeiou

// hello -- 2
// goodbye -- 3
// computerize -- 5