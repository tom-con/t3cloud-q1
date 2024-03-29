/*
	Split Binary Chunks

	For a given string of binary, return an array of strings where each string length is equal to the passed chunk size.

	Input:
	- "11010111011101110001101010110100"
	- 4

	Output:
	["1101", "0111", "0111", "0111", "0001", "1010", "1011", "0100"]

	If the string is not divisible by the chunk integer, simply chunk the remainder together.

	Input:
	- "10101010"
	- 6
	
	Output:
	["101010", "10"]

*/

function splitBinaryChunks(binaryString, chunkSize) {

}

/*
	Get Middle Characters

	For a given string, return the middlemost character (or characters if the string has an even length).

	Input:
	- "hello"

	Output:
	"l"

	Input:
	- "Kuzuzangpo"

	Output:
	"za"

*/

function getMiddleCharacters(someString) {

}

/*
	Get Deepest Value.

	For any given object, return the deepest value in that object:

	Input:
		{
			a: 1,
			b: {
				c: 2
			},
			d: 3,
			e: {
				f: {
					g: 4
				}
			}
		}

	Output:
	4

	In the above example, the correct answer is 4, because it is nested 3 levels deep.
	e.f.g

	If there are more than one possible deepest value, return either.

*/

function doTheWork(potentialObject, depth = 0) {

	if (typeof potentialObject !== 'object') {
		return {
			val: potentialObject,
			depth: depth
		}
	} else {
		const children = Object.values(potentialObject)
		var deepValues = []
		for (var i = 0; i < children.length; i++) {
			deepValues = deepValues.concat(doTheWork(children[i], depth + 1))
		}

		var deepestDepth = deepValues[0].depth
		var deepestValue = deepValues[0].val
		for (var i = 0; i < deepValues.length; i++) {
			if (deepValues[i].depth > deepestDepth) {
				var deepestDepth = deepValues[i].depth
				var deepestValue = deepValues[i].val
			}
		}
		return { val: deepestValue, depth: deepestDepth }
	}
}

function getDeepestValue(potentialObject) {
	const result = doTheWork(potentialObject)
	return result.val
}


const testObj = {
	a: 1,
	b: {
		c: 2
	},
	d: 3,
	e: {
		f: {
			g: 4
		},
		h: {
			i: 5
		}
	}
}

// const testObj = {
// 	a: 2
// }

const result = getDeepestValue(testObj)

console.log(result)