// // STRING REVERSE
// let inputstr = "Purwadhika Digital Technology School"
// let outputstr = ""

// for (let i = inputstr.length - 1; i >= 0; i-- ) {
//     // console.log(inputstr[i])
//     outputstr += inputstr[i]
// }
// console.log(outputstr)

// STRING SORT : bubble sort
// console.log("a" > "b") // false
// console.log("b" < "a") // false
// console.log("a" === "b") // true
// console.log(NaN === NaN)

// console.log(1 > 2)
// console.log(1 < 2)
// console.log( 1 === 2)

// console.log("A".charCodeAt(0)) // 65
// console.log("a".charCodeAt(0)) // 97

let inputstr = "JavaScript"
let n = inputstr.length

for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++ ) {
        let before = inputstr[j].charCodeAt(0)
        let after = inputstr[j + 1].charCodeAt(0)
        if (before > after) {
            // do swaping
            let temp = inputstr[j] // simpan huruf pertama yang ingin di swap
            let tempstr1 = inputstr.substring(0, j) + inputstr[j + 1] + inputstr.substring(j + 1)
            let tempstr2 = tempstr1.substring(0, j + 1) + temp + tempstr1.substring( j + 2)
            inputstr = tempstr2
        }
    }
}
console.log(inputstr)

// let str = "Hallo"
// str[1] = "e"
// console.log(str)
// console.log(str.substring(0, 1) + "e" + str.substring(2))

// let str = "Hallo"
// let tempstr1 = str.substring(0, 0) + "a" + str.substring(1) // aallo
// let tempstr2 = tempstr1.substring(0, 1) + "H" + tempstr1.substring(2) //aHllo
// str = tempstr2
// console.log(tempstr1)
// console.log(tempstr2)
// console.log(str)

// LEAP YEAR
let year = 1800
let result = ""

if ( year % 4 !== 0) {
    result = "Not a Leap Year"
} else if ( year % 100 !== 0) {
    result = "Leap Year"
} else if ( year % 400 === 0) {
    result = "Leap Year"
} else {
    result = "Not a Leap Year"
}

console.log(result)
