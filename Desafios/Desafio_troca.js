let a = 7;

let b = 94;

a = 94;
b = 7;
console.log("O valor de a é " + a + " e o valor de b é " + b + ".");

//OU

let c = 7;

let d = 94;

let temp = c;
c = d;
d = temp;
console.log("O valor de c é " + c + " e o valor de d é " + d + ".");

//OU

let e = 7;

let f = 94;


[e, f] = [f, e];
console.log("O valor de c é " + e + " e o valor de d é " + f + ".");