//1.
var a = 3 ,b = 4 ,c = 5;
if (a == b && b == c && c == a) {
    conslole.log("jednakostranican trougao");
}
if ( a == b && c!= b && c!= a) {
    console.log("jednakokraki trougao");
}
if ( a!= b && c!= b) {
    console.log("jednakokraki trougao");
}
if ( a == c && a!= b && c!=b) {
    console.log("jednakokraki trougao");
}
if ( a!=b && a!=c && b!=c) {
    console.log("nejednakostranicni trougao");
}

//2.
var result = '' ,a = 5, b = 2;
result = a + b;
console.log(result);
result = a - b;
console.log(result);
result = a / b;
console.log(result);
result = a * b;
console.log(result);

//5,6.
if ( a > b) {
    console.log( "a je veći broj");
} else {
    console.log(" b je veci broj");
}
var result = '' ,a = 16 ,b = 40;
if ( a > 18) {
    console.log("you are old enough to drive");
} else {
    result = 18 - a;
    console.log("in" ,result ,"years you can drive");
}
if ( a > b) {
    result = a - b;
    console.log("He/she is" ,result ,"years older than me.");
} else {
    result = b - a;
    console.log("I am" ,result ,"years older than him/her.");
}
//4.
var a = 9, b="cat";
if (a >= 1) {
    console.log( a + b + "s");
} else {
    console.log( a + b);
}
var a = "Geman shepard", b = " Border collie", c = " Doberman", d = "Malinoa", e = "Pudle";
if (f== a || f == b || f == c || f == d || f== e ||) {
    console.log("This is a" + f + "called Neo");
} else {
    console.log("This is a mixed breed");
}