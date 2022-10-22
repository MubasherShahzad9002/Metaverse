let inches_to_centimeters = 2.54 * 0.01;
let height = prompt("Enter height in inches");
height = height * inches_to_centimeters;
console.log("Height in meters = ", height);

let pounds_to_kgs = 2.2046;
let weight = prompt("Enter weight in pounds = ");
weight = weight / pounds_to_kgs;
console.log("Weight in kgs = ", weight);

let bmi = weight / (height ** 2);
console.log("BMI = ", bmi);