//1.
function tellFortune(jobTitle, location, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);
//2.
function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
//3.
function supplyCalculator(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
     console.log(message);
  }
  
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);
//4.
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);
//5.
function password_check(Aaaaaa_11) {
    pass = document.getElementById("password").value;
    console.log(pass);
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
    if (regex.exec(pass) == null) {
      alert('invalid password!');
    }
    else {
      console.log("valid");
    }
  }
console.log(password_check());
//6.
var numoffactor = 0
var count=0
function primenumber(str) {
    for (var i = 0; i < str; i++){
        for (var g = 0; g < i; g++) {
            if (i % g == 0) //if a factor is found
            { numoffactor++ }

        }
    if (numoffactor == 0) { count++ }
    return count
    }
}
console.log(primenumber(4));

console.log(numoffactor);
//7.
var duplicateArrayMembers = function (array) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result.push(array[i]);
      result.push(array[i]);
    }
    return result;
  }
  
  var myArray = [1, 2, 3];
console.log(duplicateArrayMembers(myArray));