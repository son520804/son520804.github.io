let x;
x = 5;

let y = 10;

let name = "John";
let age = 23;
let isStudent = true;
let school = "University of Michigan";

let introduction = `My name is ${name} and I'm ${y} years old.`
// use backticks to quote a string, with a dollar sign 

let message = "My name is " + name + " and I study at " + school + ".";
// use concatenation to join variables to a message when double quote is used

//Round-down division
let dividend = 13;
let divisor = 3;

let result = Math.floor(dividend / divisor) // round-down division

let modulo = dividend % divisor; // modulo means calculate remainder

let number = 24;
let squareRoot = Math.sqrt(number); // find the square root of the number
let roundedSquareRoot = Math.round(squareRoot); // round up when more than 0.5

console.log(result)

x == y // false, because == is a comparison operation indicating equality
x != y // true, because != is a comparison operation indicating inequality
x > y // x is strictly greater than y
x < y // x is strictly smaller than y
x >= y // x is greater than or equal to y
x <= y // x is smaller than or equal to y

const averageTemp = []; // Define variable
averageTemp[0] = 5; // add values on the variable
averageTemp[1] = 7;
averageTemp[2] = 9;
averageTemp[3] = 11;
averageTemp[4] = 14;
averageTemp[5] = 16;
averageTemp[6] = 19;
averageTemp[7] = 19;
averageTemp[8] = 17;
averageTemp[9] = 13;
averageTemp[10] = 10;
averageTemp[11] = 7; // averageTemp.length = 12

// for loop to return the entire array of average temperature
// when i = 12, i no longer < averageTemp.length, the for loop will end. 
for (let i = 0; i < averageTemp.length; i++) {
    console.log(averageTemp[i]);
}

for (let i = 0; i < averageTemp.length; i++) {
    document.querySelector('#header').innerHTML = averageTemp[i];
}

// slicing - (inclusive, exclusive)
averageTemp.slice(6, 8);
console.log(averageTemp.slice(6, 8))
document.querySelector('#header').innerHTML = averageTemp.slice(6, 8)

averageTemp.slice(6,8); // The slice method will include the starting index and exclude the ending index
averageTemp.slice(2,); // If I'd like to see the average temperature from March to December, I can leave
// the ending index blank to capture the whole array
averageTemp.slice(0,6); // Will return January to June.

calendar.slice(i-3, i+4); 

// We can use the array.push method to add one or more elements to the end of an array
averageTemp.push(13, 22, 44, 12, 9) // a long array with 13, 22, 44, 12, 9 at the end
// We can use the array.pop method to remove the last element of an array
// We can remove multiple elements from the last by pasting several array.pop() lines
averageTemp.pop()

// We can use the array.unshift method to add one or more elements to the beginning of an array
averageTemp.unshift(13, 22, 44, 12, 9) // a long array with 13, 22, 44, 12, 9 at the beginning
// We can use the array.shift method to remove the first element of an array
// We can remove multiple elements from the beginning by pasting several array.shift() lines
averageTemp.shift()

// We can use the array.includes method to check if it has certain value
averageTemp.includes(20) // it gives you a false because there is no correspending 
// month with a monthly average temperature 20
averageTemp.includes(19) // it gives you a true because July (corresponds to averageTemp[6]) 
// and August (corresponds to averageTemp[7]) have monthly average temperature 19

// How to find the index of an array given a value?
averageTemp.indexOf(19) // It returns the index at which the value locates
averageTemp.indexOf(1) // It returns -1 to indicate that none of the data shows the monthly average temperature 1

// We can get a reversed array using the array.reverse method
averageTemp.reverse()
// We can sort a sequence of array from the smallest to the largest using the array.sort(), comparing a-b
averageTemp.sort((a,b) => a - b)
// We can sort a sequence of array from the largest to the smallest using the array.sort(), comparing b-a
averageTemp.sort((a,b) => b - a)

// We can figure out all odd numbers in an array -- using the array.filter() method
averageTemp.filter((element) => element % 2 === 1)
// We can figure out all even numbers in an array
averageTemp.filter((element) => element % 2 === 0)

newTemp = [5, 12];
// Now we want to combine/merge two arrays. Use the array.concat() method. 
averageTemp.concat(newTemp)
// We will see both arrays combined together.

// traverse character

function count(word, letter) {
    let cnt = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            cnt += 1; // Add counter
        }
    }
    return cnt;
}

// String

let sentence = 'After all, this is not to grow tomatoes in an industrial setting in Alaska.';



// Object  - Dictionary
// key:value pair
let myObject = {name: 'InSon', school: 'umich', city: 'Ann Arbor'};
myObject.name // then we will see InSon
myObject.school // then we will see umich
myObject.city // then we will see Ann Arbor

Object.keys(myObject) // We now find all the keys (variable names) in an object
Object.values(myObject) // We now find all the values in an object
Object.entries(myObject) // We can see keys and values together

let moreData = {name: 'Yoyo', school: 'UCL', city: 'London'};
let goodData = {color: 'yellow'};
Object.assign(myObject, goodData); // update the values with the same keys, while adding key-value pairs with new keys

myObject.hasOwnProperty('school') // check if myObject has a school key - true
myObject.hasOwnProperty('studentID') // check if myObject has student number - false

if (myObject.name == ""){
    // fail to register
}


