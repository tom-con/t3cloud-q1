
function factorial(n) {
	var result = 1;
	for (var i = n; i > 0; i -= 1) {
		result = result * i;
	}
	return result;
}

function recursiveFactorial(n) {
	if (n === 1) return n;
	return n * recursiveFactorial(n - 1)
}

