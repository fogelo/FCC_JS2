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

/*// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*!/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result)*/

/*?13. Find Characters with Lazy Matching*/

/*let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)*/

/*§14. Restrict Possible Usernames*/
/*
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end.
There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long.
A two-character username can only use alphabet letters as characters.
*/

/*let username = "BadUs3rnam3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d$/i; // Change this line
let result = userCheck.test(username);
console.log(result)*/

/*§15. Positive and Negative Lookahead*/
/*let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);*/

/*§16. Check For Mixed Grouping of Characters*/
/*
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
*/

/*§17. Reuse Patterns Using Capture Groups (группировка с обратной связью)*/

/*let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);*/

/*§18. Use Capture Groups to Search and Replace*/

/*
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // каждая группа пронумеровалась когда нашлась методом replace, и чтобы поменять их местами
// можно просто использовать знак $ и номер группы
let result = str.replace(fixRegex, replaceText);*/

/*§19. Remove Whitespace from Start and End */

/*let hello = "   Hello, World!  ";
let wsRegex = /(\s*$)|(^\s*)/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(hello)
console.log(result)*/
