//1.Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.

function groceries(arr){
    var sum = 0;
    for(var i = 0; i< arr.length; i++){
        sum = arr[i].quantity * arr[i].price;
    }
    return sum;
}
console.log(groceries[{product: "Milk", quantity: 3, price: 1.50}]);

//2. Create a function that gets thename of the piece of jewelry with the highest price and returns: "The most expensiveone is the {name of jewelry piece}".

function mostExpensive(arr){
    var highestPrice = 0;
    var highestName;
    for( var i = 0; i < arr.length; i++){
        if(arr[i].price > highestPrice){
            highestPrice = arr[i].price;
            highestName = arr[i].name;
        }
    }
    return 'Them most expensive one is the' + highestName;
}
console.log(mostExpensive([{name: 'Diamond Ring', price: 980}, {name: GoldWatch, price: 250}]));

//3.Given a word, create an object that stores the indexes of each letter in an array.

function mapLetters(word){
    var object = {};
    for(var i = 0; i < word.length; i++){
        if (object[word[i]]){
            continue;
        }
        var arr = [i];
        for (var j = 0; j < word.length; j++){
            if(word[i] == word[j] && i != j){
                arr.push(j);
            }
        }
        object[word[i]] = arr;
    }
    return object;
}
console.log(mapLetters('hello'));

//4. Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME! If your spouse, return "SPOUSE!" If a draw, return "DRAW!"

function whoSwearedTheMost(curse){
    var scoreme = 0;
    var scoreSpouse = 0;
    for (var i = 0; i < curse.length; i++){
        scoreme += curse[i].length;
        scoreSpouse += curse[i].length;
    }
    if(scoreme > scoreSpouse){
        return 'ME!';
    }else if ( scoreme < scoreSpouse){
        return 'SPOUSE!';
    }else {
        return 'DRAW!';
    }
}
console.log(whoSwearedTheMost([{Me: 5, Spouse: 5}]));

//5.Create a function that converts color in rgb format to hex format

function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));

//6.Create a function that takes an amount of monetary change and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies.

function makeChange(number) {
    var quarter = 0; //25
    var dime = 0; //10
    var nickel = 0; //5
    var penny = 0; //1
    var remainingChange = number;
    while (remainingChange >= 25) {
        remainingChange -= 25;
        quarter++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        dime++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        penny++;
    }
    var obj = {
        q: quarter,
        d: dime,
        n: nickel,
        p: penny
    }
    return obj;
}
console.log(makeChange(13));
console.log(makeChange(24));
console.log(makeChange(92));

//7.Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

function avg(array){
    var grade1 = 3;
    var grade2 = 4;
    var grade3 = 5;
    var sum = grade1 + grade2 + grade3;
    var avgNote = 0;
    var numberOfGrades = 3;
    var obj = {}
    for (var i = 0; i < array.length; i++){
        var grades = array[i].notes;
        var name = array[i].name
        obj = {
            name: array[i].name
        }
        for(var j = 0; j < grades.length; j++){
            sum += grades[j]
            avgNote = (sum) / numberOfGrades;
        }
    }
    obj = {
        name : name,
        avgNote: avgNote
    }
    return obj;
}
console.log(avg([{name : 'John', notes:[3, 4, 5]}]));

//8.Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

function bestTestAverage(array){
    var result = '';
    var sumJ = 0;
    var prosekJ = 0;
    var brojOcenaJ = array[0].notes.length;
    var sumB = 0;
    var prosekB = 0;
    var brojOcenaB = array[1].notes.length;
    for(var i = 0; i < array[0].notes.length; i++){
        var johnocene = array [0].notes[i];
        sumJ += johnocene;
        prosekJ = sumJ / brojOcenaJ;
        prosekJ = sumJ /brojOcenaJ
    }
    for( var i = 0; i < array[1].notes.length; i++){
        var BobOcene = array[1].notes[i];
        sumB += BobOcene;
        prosekB = sumB / brojOcenaB;
    }
    if (prosekB > prosekJ){
        result =  `Job // Bob's avg = ${prosekB}`
    }else if ( prosekB == prosekJ){
        result = `Test avg is the same`
    }else{
        result = `John // John's avg ${prosekJ}`
    }
    return result;
}
console.log(bestTestAverage([{Name: 'John', notes: [100, 90, 80]},{name: 'Bob', notes: [100, 70, 80]}]));

//1.1Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "Nes",
    strength: "medium",
    flavour: "vanilla",
    milk: "yes",
    sugar: "yes",
};
console.log(coffee);

//2.1Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var favMovie = {
    title: "Indiana Jones and the Last Crusade",
    actors: ["Harrison Ford", "Sean Connery", "Denholm Elliott"],
    director: "Steven Spielberg",
    genre: ["Adventure", "Action"],
    popularity: {
      imdb: 8.2,
      rotten: "90%",
    },
};
console.log(favMovie);

//3.1 Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project  repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function project(description, language, git, develop) {
    var a = new Object(); // Object() constructor function
    a.description = description;
    a['programming language'] = language;
    a['git repository'] = git;
    a['in development'] = develop;
    a.printRepository = function print() {console.log('Repository:', git);};
    a.printLanguage = function print() {console.log('Programming language:', language);};
    a.prindStatus = function print() {console.log('In development:', develop);};
    return a;
}

var project1 = project('New project', 'javascript', 'https://...', true);
console.log(project1);
project1.printRepository();
project1.printLanguage();
project1.prindStatus();

//4.1 Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. Add a method that prints out all the ingredients necessary for the meal preparation. Add a method that checks if a meal can be prepared in under 15 minutes. Add a method that changes the type of cuisine to the given value. Add a method that delete a given ingredient from the list of ingredients.

function createObj(name, typeCuisine, complex, list, time, instruction){
    var recipe = {
        name: name,
        typeCuisine: typeCuisine,
        complex: complex,
        list: list,
        time: time,
        instruction: instruction,
        methodList: function(){
            return list;
        },
        methodMinutes: function(){
            if (time < 15){
                return 'less than 15 minutes';
            }else{
                return 'more than 15 minutes';
            }
        },
        methodType: function(newName){
            recipe.typeCuisine = newName;
            return recipe.name + '\n' + recipe.typeCuisine + '\n' + recipe.complex + '\n' + recipe.time + '\n' + recipe.instruction;
        },
        methodDelete: function(listItemToDelete){
            for(var i = 0; i < recipe.list.length; i++){
                if(recipe.list[i] == listItemToDelete){
                    recipe.list.splice(i, 1);
                }
            }
            return recipe.list;
        }
    }
    return recipe.methodDelete('oil');
}
console.log(createObj('rice', 'chinese', 'not so hard to make', ['rice', 'ool', 'onion', 'tomato sauce'], 25, 'put it in the oven to bake')); 