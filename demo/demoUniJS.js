// //var uniD = {},
// //var uniD.alg.GStarMod = unicrypt.math.algebra.multiplicative.classes.GStarMod.getInstance();


// // var hashMap = unicrypt.helper.map.HashMap2D.getInstance(['int','int','string']);

// // console.log(hashMap._generic_);
// // hashMap.put(10,20,'hallo');
// // console.log('here: ' + hashMap.get(10,20));

// var bigInt = new u.BigInteger(60);
// var bigInt2 = new u.BigInteger(30);
// var bigInt = bigInt.subtract(bigInt2);
// //console.log('BigInteger: ' + bigInt.intValue());

 var gGstarMod = unicrypt.math.algebra.multiplicative.classes.GStarModSafePrime.getInstance(23);
// console.log('Modulus: ' + gGstarMod.getModulus().intValue());
// console.log('ModuloFactorization: ' +  gGstarMod.getModuloFactorization().intValue());
// console.log('orderFactorization: ' +  gGstarMod.getOrderFactorization().intValue());

// // console.log(gGstarMod.__proto__.constructor.name);
// // console.log(gGstarMod.__proto__.__proto__.constructor.name);
// // console.log(gGstarMod.__proto__.__proto__.__proto__.constructor.name);

// var e1 = new u.BigInteger(4);
// var gStarE1 = gGstarMod.getElement(e1);
// var e2 = new u.BigInteger(16);
// var gStarE2 = gGstarMod.getElement(e2);
// var gStarE3 = gStarE1.apply(gStarE2);
// //todo
// //var gStarE3 = gStarE1.apply(gStarE2);
// console.log('Result: ' + gStarE3.getValue().intValue());
 e1 = new u.BigInteger(2);
// e2 = new u.BigInteger(4);
// e3 = new u.BigInteger(5);
e4 = new u.BigInteger(3);
var g1 = gGstarMod.getElement(e1);
// var g2 = gGstarMod.getElement(e2);
// var m = e3; // ZMod
var r = e4; // ZMod

console.log('--------Start-----------');
gGstarMod.selfApply(g1, r);

// var p = g1.selfApply(r).apply(g2.selfApply(m));
// console.log('Result2: ' + p);