/*function check () {
    e = 3;
    a = [5, -4.2, 3, 7];
    var result = "" ;
    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        if (element == e) {
         result = "Yes";
        }
    }
    return result;
}
console.log(check());

function positive(b) {
    for (var i = 0; i < b.lenght; i++) {
      var element = b[i];
      if (element > 0) {
        b[i] = element * 2;
      }
    }
    return b;
}
console.log(positive([-3, 11, 5, 3.4, -8]));
var a = [4, 2, 2, -1, 6 ];
function findMinimum(a) {
    var message = "";
    for (var i = 0; i < a.lenght; i++) {
        var min = a[0];
        var currentItem = a[i];
         of (currentItem < min) {
            var min2 = currentItem;
            var index = i;
            message = "minimum je broj" + min2 + " i njegov index je" + index + "";
         }
    }
    return message;
}
console.log(findMinimum());

var arr = [4, 2, 2, -1, 6];
		var smallest = arr[0]; 
		var secondSmallest = arr[1]; 

		for(var i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
			}  

			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
			} 
		} 
console.log(secondSmallest);

const arr = [3, 11, -5, -3, 2];
const sumPositives = (arr = []) => {
   const isPositive = num => typeof num === 'number' && num > 0;
   const res = arr.reduce((acc, val) => {
      if(isPositive(val)){
         acc += val;
      };
      return acc;
   }, 0);
   return res;
};
console.log(sumPositives(arr));

var a = [2, 4, -2, 7, -2, 4, 2];
if (a[0] == a[6] && a[1] == a[5] && a [2] == a[4]) {
    console.log("The given array is symetric.");
}else{
    console.log("The given array is not symetric.");
}*/

