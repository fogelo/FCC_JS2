/*?1. Using the Test Method*/

//метод test тестирует строку на наличие в ней совпадения с регулярным выражением (вернет true или false)
/*let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result)*/

/*?2. Match a Literal String with Different Possibilities*/

/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);*/

/*?3. Ignore Case While Matching*/

/*let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);*/

/*?4. Extract Matches*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result)
