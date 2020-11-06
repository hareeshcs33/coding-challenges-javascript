console.log("Coding challenges");

// 1. Convert celsius to fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    if (typeof fahrenheit !== "undefined") return fahrenheit;

    return "fahrenheit not found";
}
console.log("convertToF", convertToF(30));

// 2. reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("reverse a hello string", reverseString("hello"));

// 3. factorialize a number
/*
function factorialize(num) {
    for (var product = 1; num > 0; num--){
        product *= num;
    }
    return product;
}
console.log("factorialize", factorialize(5));
*/
function factorialize(num) {
    if (num == 0) return 1;

    return num * factorialize(num - 1);
}
console.log("factorialize", factorialize(5));

// 4. find longest word in string
function longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
    // return str.split(" ").sort((a, b) => b.length - a.length)[0].length; //longest word length
}
console.log("longest word in string  : ", longestWord("the content goes here!"));


function findLongestWordLength(str) {
    let words = str.split(" ");

    if (words.length == 1) {
        return words[0].length;
    }

    if (words[0].length >= words[1].length) {
        words.splice(1, 1);
        return findLongestWordLength(words.join(" "));
    }

    if (words[0].length <= words[1].length) {
        return findLongestWordLength(words.slice(1, words.length).join(" "));
    }
}

console.log("find longest word length", findLongestWordLength("The simple text goes here"));

// 5. return lorgest number in array

function lorgestNumberInArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let largestNumber = arr[i][0];
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        result[i] = largestNumber;
    }
    return result;
}
let arrNumbars = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Lorgest Number in Array", lorgestNumberInArr(arrNumbars));

function longestOfFour(arr) {
    return arr.map(group => Math.max(...group));
}
let longestArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log("Longest of four ",longestOfFour(longestArr));

// 6. confirm the ending

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log("confirm Ending ", confirmEnding("the test the end point !", "!"));

// 7. truncate a string

function truncateString(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    }
    return str;

    //single line code
    // return str.length > n ? str.slice(0, n) + "..." : str;
}
console.log("truncate a string : ", truncateString("the simple content goes here!!!!!!", 28));

// 8. Finders Keepers

function findElement(arr, el) {
    return arr.find(item => item === el);
}
console.log("find element in a array ", findElement([1, 2, "Test", 5], "Test"));

// 9. Boo who

function boowho(bool) {
    return typeof bool === "boolean";
}
console.log("check boolean value : ", boowho(true));

// 10. title case a sentence

function titleCaseSentence(str) {
    return str.toLowerCase().split(" ").map(item => {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }).join(" ");
}
console.log("Title case sentense : ", titleCaseSentence("the sentence goes here"));











