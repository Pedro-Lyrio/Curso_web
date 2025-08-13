console.log(7/0); // Infinity
console.log("10" / 2); // 5
console.log("Show!" * 2); // NaN
console.log(0.1 + 0.7); // 0.799999999  Imprecisão de ponto flutuante
// console.log(10.toString()); // Erro
console.log((10.345).toFixed(2)); // 10.35
console.log("3" + 2); // "32" (concatenação)
console.log(parseInt("3") + 2); // 5 (conversão para inteiro)
console.log(parseFloat("3.14") + 2); // 5.14    // Conversão de string para número
console.log(Number("3.14") + 2); // 5.14    // Conversão de string para número
console.log(Number("3.14abc")); // NaN (Not a Number)
console.log(Number("")); // 0 (string vazia é convertida para zero)
console.log(Number(" ")); // 0 (espaço em branco é convertido para zero)
console.log(Number("abc")); // NaN (não é um número)
console.log(Number("123abc")); // NaN (não é um número completo)
console.log(Number("123")); // 123 (string numérica é convertida para número)
console.log(Number("0x1A")); // 26 (hexadecimal convertido para decimal)
console.log(Number("0b1010")); // 10 (binário convertido para decimal)
console.log(Number("0o12")); // 10 (octal convertido para decimal)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false