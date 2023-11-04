const DEFALT_PRECISION = 15

const getDecimalLength = (n) => {
	const decimal = n.toString().split('.')[1]
	return decimal ? decimal.length : 0
}
const toPrecision = (n) => parseFloat(Number(n).toPrecision(DEFALT_PRECISION))
const compute = function (a, type, b) {
	const power = Math.pow(10, Math.max(getDecimalLength(a), getDecimalLength(b)))
	let result = 0

	a = toPrecision(a * power)
	b = toPrecision(b * power)

	switch (type) {
	case '+':
		result = (a + b) / power
		break
	case '-':
		result = (a - b) / power
		break
	case '*':
		result = (a * b) / (power * power)
		break
	case '/':
		result = a / b
		break
	default:
		console.warn('Invalid operator')
	}
	result = toPrecision(result)

	return {
		result,
		compute (nextType, nextValue) {
			return compute(result, nextType, nextValue)
		}
	}
}

export default compute
