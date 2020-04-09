// To assign a value to variable there are three ways
var myName = "Nathan";

rollno = 8;
// Let is only valid at the scope of where it is defined
let place = "Kochi";

const pi = 3.14;
//console.log(place)

// variables and function names are case sensitive
// Use camelcase for variables and functions
// to increment a number by one use ++
rollno++
//console.log(rollno)
rollno--;

var ourDecimal = 5.55;
rollno += 9
//console.log(rollno)

// To use quotes inside the string need to use escape character
// We can concatenate strings with the += operator
 var ourStr = "I come first. ";
 ourStr += "I come second.";

 //console.log(ourStr);
 length_ourStr = ourStr.length;
 //console.log(length_ourStr);
 //-console.log(ourStr[0])

// strings are unmutuable once assigned.

// word blanks
 function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
     var result = "";
     result += "The " + myAdjective + " " + myNoun +" " + myVerb + " to the store " + myAdverb;
     return result;
 }

 //console.log(wordBlanks("dog", "big", "ran", "quickly"));

 // Arrays
 var ourArray = ["John", 23];
 var myArray =[];

 var ourArray = [["bulls", 33], [ "apple", 55]];
// console.log(ourArray[0][0]);

 //append to array
 ourArray.push(["happy", 22]);
 //console.log(ourArray);

 var testArray = [1,2,3];
 var removedFromOuterArray =  testArray.pop();
 // pop removes the last element from the array and can be assigned to a new variable
 //console.log(removedFromOuterArray);

 var nestArray = [["John", 23], ["cat",2]];
 var removeFromNestArray = nestArray.pop();
 //console.log(nestArray,'\n',removeFromNestArray);

 var ourArray = ["Stimpson", "J", ["Cat"]]
 var removedFromOurArray = ourArray.shift();
 //shift removes the first element from an array

 //unshift adds a new element to the beginning of the array

 ourArray.unshift("Happy");
 //console.log(ourArray)

// Nested Arrays

var myList = [["Cereal", 3], ["Milk", 2]];

// functions

function ourReusableFunction() {
    console.log("Blabla");
}

//ourReusableFunction();

function ourFunctionWithArgs(a,b) {
    console.log(a - b);
}

// ourFunctionWithArgs(4, 3)

//Global Scope and Functions
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
    // if we put var keyword before oopsGlobal then the scope will not be global
} 

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//fun1();
//fun2();

var sum = 0;
function addThree() {
    sum = sum + 3;
   
}
addThree()
//console.log(sum)

//booleans
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

//console.log(ourTrueOrFalse(false))

// strictly equal
// 3 == '3' is true because it converts to both to same type and compare
// for strictly equal
// 3 === '3' returns false

// strict inequality check

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
//console.log(testStrictNotEqual(17))
//console.log(testStrictNotEqual('17'))
//console.log(testStrictNotEqual(10))

var names = ["Hole-in-one", "Eagle", "Birdie","Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes ==par +1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6]
    }
}

//console.log(golfScore(5,1))

// switch statements

/* Write a switch statement which tests val and sets answer for the following
conditions:
 1 = "alpha"
 2 - "beta"
 3 - "gamma"
 4 - "delta"
*/

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer = "beta";
        break;
        case 3:
        answer = "gamma";
        break;
        case 4:
        answer = "delta";
        break;
        default:
        answer = "Not present"
        break;
    }
    return answer;
}

//console.log(caseInSwitch(1))

function sequentialSizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;
        case 7:
        case 8:
        case 9:
            answer =  "High";
            break;
        default:
            answer = "Not in input";
    } return answer;
}
//console.log(sequentialSizes(9));

// blackjack card count

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
        break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}

//console.log(cc('K'))

//Objects - they are similar to dictionaries in python

var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["Everything!"]
};

//console.log(ourDog['name'],ourDog.tails)
// bracket is used when there is a space for key eg "my drink"

ourDog.name = "Happy Camper"

// we can add properties using bracket or dot notation
// using delete keyword we can delete properties

// check object for properties
var myObj = {
    gift : "Pony",
    pet : "Kitten",
    bed : "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"))


//

var collection = {
    
}