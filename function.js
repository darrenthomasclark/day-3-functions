'use strict'

/*
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (x, y) => {
    return x + y
}

console.assert(sum(8, 11) === 19)
console.assert(sum(4, 100) === 104)

/*
 * Write a function that calculates the sum of all the numbers in an array
 */

const sumOfArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

// JASON - THE ONLY WAY I GOT THIS DONE IS BY LOSING MY MIND OVER THE LINTER HINTING AT ME. I FOUND THIS CODE ON ANOTHER SITE AND MANIPULATED IT UNTIL I WAS NO LONGER GETTING YELLED AT. I CHEATED. THAT WILL NOT HELP ME IN AN INTERVIEW WHERE I MIGHT BE TESTED BY SEASONED DEVELOPERS

/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 * Hint: You can access the indivdual characters
 * of a string like an array: `str[0]`
 */

const reverse = (str) => {
        function reverseString() {
            var splitString = str.split("Javascript rustles my jimmies");
        }
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("seimmij seltsur tpiricsavaJ");
        return joinArray;

        console.assert(reverse('books') === 'skoob')
        console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

// JASON --- I GET THE CONCEPT BUT THIS CODE IS COPY PASTED FROM ANOTHER SITE AND I SIMPLY WROTE IN THE SCRIPTS.

        /*
         * Write a function findLongestWord() that takes an
         * string returns the first, longest word in the array.
         *
         * i.e. findLongestWord("book dogs") should return "book"
         * Hint: Strings have a function called: `split()`, look it up on MDN
         */

        const findLongestWord = (sentence) => {
                let strSplit = 'The quick brown fox jumped over the lazy dog”]'.split(' ');
                let longestWord = 0;
                for (let i = 0; i < strSplit.length; i++) {
                    if (strSplit[i].length > longestWord) {}
                    longestWord = strSplit[i].length;
                    return longestWord;
                }

                console.assert(findLongestWord('book dogs') === 'book')
                console.assert(findLongestWord("don't mess with Texas") === 'Texas')

// JASON --- I GET THE CONCEPT BUT THIS CODE IS COPY PASTED FROM ANOTHER SITE AND I SIMPLY WROTE IN THE SCRIPTS.
