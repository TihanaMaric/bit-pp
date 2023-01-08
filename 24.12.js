//1.  Write a JavaScript function that reverses a number. typeof result of the function should be “number”. 12345 - 54321

function reverseNumber(num){
    var el = num + " ";
    return Number(el.split("").reverse().join(""));
}
var le = reverseNumber(12345);
console.log(reverseNumber(12345));
console.log(typeof le);

//2. Write a JavaScript function that returns a passed string with letters in alphabetical order. Note: Assume punctuation, numbers and symbols are not included in the passed string.

function alphabet_order(str){
return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

//3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alphabetize_string(str){	
return str.split('').sort().join('').trim();
}
console.log(alphabetize_string('Republic Of Serbia'));

//4. Write a function to split a string and convert it into an array of words.

string_to_array = function (str) {
    return str.trim().split(" ");
}
console.log(string_to_array("John Snow"));

//5.Write a function to convert a string to its abbreviated form.

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
}
console.log(abbrev_name("John Snow"));

//6.Write a function that adds string to the left or right of string, by replacing it’s characters.

function replacChar(string, empty, side){
  var rez = '';
  if(side == 'l'){
      rez = empty.slice(0,empty-string.length) +  string;
      return rez;
  }

  if(side == 'r'){
      rez = string + empty.slice(0,empty-string.length);
      return rez;
  }

}

var empty = '00000000'
var a = '123';
var side = 'l';
var rez = replacChar(a, empty, side);
console.log(rez);

//7.Write a function to capitalize the first letter of a string and returns modified string.

function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = []; 
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//8.Write a function to hide email addresses to protect them from unauthorized users.

protect_email = function (user_email) {
  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, (part1.length - avg));
  part2 = splitted[1];
  return part1 + "...@" + part2;
}

console.log(protect_email("somerandomaddress@example.com"));

//9.Write a program that accepts a string as input and swaps the case of each character. For example, if you input: The Quick Brown Fox, the output should be :tHE qUICK bROWN fOX

var str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
for(var x=0; x<str.length; x++){
  if(UPPER.indexOf(str[x]) !== -1){
    result.push(str[x].toLowerCase());
  }else if(LOWER.indexOf(str[x]) !== -1){
    result.push(str[x].toUpperCase());
  }else {
    result.push(str[x]);
  }
}
console.log(result.join(''));