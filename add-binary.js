function addBinary(binA, binB) {
	var resultOfSum = []
	for (var i = binA.length - 1; i >= 0; i -= 1) {
		var sumOfColumn = binA[i] + binB[i]
		resultOfSum[i] = sumOfColumn
	}

	resultOfSum.unshift(0)

	for (var i = resultOfSum.length - 1; i >= 0; i -= 1) {
		if (resultOfSum[i] >= 2) {
			resultOfSum[i] -= 2
			resultOfSum[i - 1] += 1
		}
	}
	console.log(resultOfSum)
}

const a = [1, 0, 1, 1, 0, 1]
const b = [0, 1, 1, 0, 0, 0]

// const a = [1, 1, 1, 1, 1, 1]
// const b = [1, 1, 1, 1, 1, 1]

addBinary(a, b)
// addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]