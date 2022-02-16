// 01 : odd and even number

// initialize
// console.time()
// let loopke = 0
// while (loopke <= 50) {
//     if (loopke % 2 === 0) {
//         console.log(`${loopke} is odd`)
//     } else {
//         console.log(`${loopke} is even`)
//     }
//     loopke = loopke + 1
// }
// console.timeEnd()

// console.time()
// for (let numb = 0; numb <= 50; numb++) {
//     if (numb % 2 === 0) {
//         console.log(`${numb} is odd`)
//         continue
//     }

//     console.log(`${numb} is even`)
// }
// console.timeEnd()

// 02 : multiplication table
// console.time()
// let range = 1000
// let initial = 5
// for (let numb = 1; numb <= range; numb++) {
//     if ( numb % 2 !== 0) {
//         console.log(`${initial} x ${numb} = ${numb * initial}`)
//     }
//     // if (numb % 2 === 0) continue
//     // console.log(`${initial} x ${numb} = ${numb * initial}`)
// }


// 04 : vowels
// let input = "Purwadhika Digital Technology School"
// let count = 0
// let vocal = "aiueo"
// vocal -> a i u e o
// for (let i = 0; i < input.length; i++) {
    // console.log(input[i])
//     const conditional = input[i] === "a" || input[i] === "i" || input[i] === "u" || input[i] === "e" || input[i] === "o"
//     if (conditional) {
//         count += 1
//     }
// }

// for (let i = 0; i < input.length; i++) {
//     const isVowel = vocal.includes(input[i])
//     if (isVowel) {
//         count ++
//     }
// }

// console.log(`There are total ${count} vowels found at give string.`)

// let input = "HellO JAvaScrIpt"
// let count = 0
// let vocal = "aiueo"
// let foundVocal = ""

// for (let i = 0; i < input.length; i++) {
//     const isVowel = vocal.includes(input[i].toLowerCase())
//     const isFoundedVowel = foundVocal.includes(input[i].toLowerCase())
//     if (isVowel && !isFoundedVowel) {
//         count ++
//         foundVocal += input[i]
//     }
// }

// console.log(`There are total ${count} vowels (${foundVocal}) found at give string.`)

// 4 : sort string 
// input : "Purwadhika"
// output : "aadhikPru"

/*
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
*/

let input = 3
let output

// for (let numb = 0; numb < 2 * input; numb += 2) {
//     output = numb
// }
// console.log(output)

// even number -> 0 2 4 6 8 10 12 ...
// index ke    -> 1 2 3 4 5  6  7 ...

console.log(2 * input - 2)