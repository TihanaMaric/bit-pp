var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9]);

var b =[2];
console.log(b[0] * b[0] * b[0]);

var c =[1, 2, 3, 4, 5];
console.log(c[0] * c[1] * c[2] * c[3] * c[4]);

var d =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The even numbers are 2, 4, 6, 8, 10");

var e = [2, 3, 2];
console.log("Sum of digits 232 is" +(e[0] + e[1] + e[2]));

var f = ["E", "c", "l", "i", "p", 5, 4, 2, "s", "e",];
console.log("There is 7 letters in this word.");

var h = [5, -4.2, 3, 7], i = 3;
if (h[2] == i){
    console.log("Yes");
} else {
    console.log("No");
}


var j = [-3, 11, 5, 3.4, -8];
if (j[0] > 0) {
    console.log(j[0] * 2);
} else {
    console.log(j[0]);
}
if (j[1] > 0){
    console.log(j[1] * 2);
} else {
    console.log(j[1]);
}
if (j[2] > 0) {
    console.log(j[2] * 2);
} else {
    console.log(j[2]);
} 
if (j[3] > 0) {
    console.log(j[3] * 2);
} else {
    console.log(j[3]);
}
if (j[4] > 0) {
    console.log(j[4] * 2);
} else {
    console.log(j[4]); 
}

var k = [ 4, 2, 2, -1, 6];
console.log("-1, 3");

var l = [ 4, 2, 2, -1, 6];
console.log("2");

var lj = [ 3, 11, -5, -3, 2];
console.log(3 + 11 + 2);

var m = [2, 4, -2, 7, -2, 4, 2];
if (m[0] == m[6] && m[1] == m[5] && m[2] == m[4]){
    console.log("The array is symmetric");
} else {
    console.log("The array is not symmetric");
}

var n = [], nj = [4, 5, 6], o = [3, 8, 11, 9];
n = nj + "," + o;
console.log(n);

var p = 2, r = [4, 6, 2, 8, 2, 2];
delete r[2];
delete r[4];
delete r[5];
console.log(r);

var s = [2, -2, 33, 12, 5, 8], t = 78;
s[3] = t;
console.log(s);