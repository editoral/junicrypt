unicrypt.helper.math.MathUtil = Op.Class('MathUtil', {

},{
	static: {
		areRelativelyPrime: function(value1, value2) {
			return value1.gcd(value2).equals(ONE)
		}.paramType(['BigInteger', 'BigInteger'])
	}
});