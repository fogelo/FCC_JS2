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

/*let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result)*/

/*?5. Find More Than the First Match*/

/*let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result)*/

/*?6. Match Anything with Wildcard Period*/
/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
*/

/*?7. Match Single Character with Multiple Possibilities*/

/*let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result)*/

/*?8. Match Letters of the Alphabet*/

/*let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result)*/

/*§9. Match Numbers and Letters of the Alphabet*/

/*let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)*/

/*?10. Match Single Characters Not Specified*/

/*let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line*/

/*?11. Match Characters that Occur One or More Times*/

/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);*/

/*?12. Match Characters that Occur Zero or More Times*/

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result)