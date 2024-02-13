const numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422]

var largest = numbers[0]

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > largest) {
		largest = numbers[i]
	}
}

console.log(largest)