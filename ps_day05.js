// ARRAY UNION
let numb1 = [1, 3, 5, 7, 8]
let numb2 = [5, 2, 9, 3, 7, 2, 4]

// -> object {}
function unionArray (arr1, arr2) {
    let objct = {} // { "1" : 1 }

    // for (let i = 0; i < arr1.length; i++) {
    //     objct[arr1[i]] = arr1[i] // objct[1] = 1
    // }
    // console.log("after loop-1 : ", objct)

    // for (let i = 0; i < arr2.length; i++) {
    //     if (objct[arr2[i]]) continue
    //     objct[arr2[i]] = arr2[i]
    // }

    let len = numb1.length
    if (len < numb2.length) {
        len = numb2.length
    }

    for (let i = 0; i < len; i++) {
        if(arr1[i] !== undefined ) {
            objct[arr1[i]] = arr1[i]
        }
        if (arr2[i] !== undefined) {
            objct[arr2[i]] = arr2[i]
        }
    }
    // console.log("after loop-1 : ", objct)

    return Object.values(objct)
}

let result = unionArray(numb1, numb2)
// console.log(result)
// 
// let students = {}
// students.name = "alee"
// students["school"] = "Purwadhika"
// students["name"] = "filbert"
// console.log(students)

// spread operator
let numb3 = [5, 2, 9, 3, 7, 2, 4]
let numb4 = numb3 // reference copy
let numb5 = [ ...numb3 ] // full copy
numb3[3] = 8
numb4[0] = 0

// console.log(numb3)
// console.log(numb4)
// console.log(numb5)

const arrayUnion = (arr1, arr2) => [ ... new Set([...arr1, ...arr2]) ].sort()
// console.log(arrayUnion(numb1, numb2))

function isPrimeNumber (numb) {
    if (numb <= 1) return false

    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) return false
    }

    return true
}

// console.log(isPrimeNumber(-1))
// console.log(isPrimeNumber(0))
// console.log(isPrimeNumber(1))
// console.log(isPrimeNumber(2))
// console.log(isPrimeNumber(3))
// console.log(isPrimeNumber(10))

// PALINDROM -> "MADIM" -> "REVIVER"
function isPalindrome (str) {
    let input = str.toLowerCase()
    for (let i = 0; i < Math.floor(str.length / 2); i++) { // i = 1; i < 2
        if (input[i] !== input[str.length - 1 - i]) return false // str[1] = A ? === I
    }

    return true
}

console.log(isPalindrome("MadAm"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("reVivEr"))
console.log(isPalindrome("AB"))


const isStringPalindrome = (str) => str.toLowerCase() === str.split("").reverse().join("").toLowerCase()
console.log(isStringPalindrome("MadAm")) // ["M", "a", "d", "A", "m"] -> ["m", "A", "d", "a", "M"] -> "mAdaM" -> madam
console.log(isStringPalindrome("hello"))
console.log(isStringPalindrome("reVivEr"))
console.log(isStringPalindrome("AB"))