// creating arrays and accessing elements
const array1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(array1[1]);
console.log(array1[3]);

 // adding element on index
array1[0] = "Holiday";
console.log(array1[0]);

// return us length of the array
console.log(array1.length);

 // declaring empty array and putting values
const daysOfWeek = [];
daysOfWeek.push("Sunday");
daysOfWeek.push("Monday");
daysOfWeek.push("Tuesday");

console.log(daysOfWeek);

// removing item on index number from values
daysOfWeek.splice(3,0,"Wednesday");
console.log(daysOfWeek);


//concatinating two arrays
const daysOfWeek2 = ["Thursday", "Friday", 1000];
console.log(daysOfWeek2);
console.log(daysOfWeek.concat(daysOfWeek2));

 // we can also concatenate using variable
const allDays = daysOfWeek.concat(daysOfWeek2);
console.log(allDays);

// remove last
allDays.pop();
console.log(allDays);

// remove frst
allDays.shift();
console.log(allDays);

// remove in between values
allDays.splice(1,2);
console.log(allDays);

// sorting arrays
const numArray = [0,3,4,6,7,9,11,13,22,2];
console.log(numArray.sort());

// reverse
console.log(numArray.reverse());

// Multidimensional array

const arr1 = [1,2,3];
const arr2 = [arr1, arr1];
console.log(arr2);

// accessing elemts in multidimensional array
console.log(arr2[0][1]);