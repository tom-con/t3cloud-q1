// var result = "Tom is at his computer.".split("")
const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

function checkUsername(username) {
	var isUserNameOk = true

	for (var i = 0; i < restrictedWords.length; i += 1) {
		var includesRestrictedWord = username.includes(restrictedWords[i])
		if (includesRestrictedWord) {
			isUserNameOk = false
		}
	}

	return isUserNameOk
}

console.log(checkUsername("mike45")) // true
console.log(checkUsername("apple45")) // false
