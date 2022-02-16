// // EUCLIDIAN'S ALGORITHM
// let numb1 = 360 // NOTES : numb1 must be greater than numb2
// let numb2 = 336
// let mod // sisa bagi
// // let result = 0

// if (numb2 > numb1) {
//     let temp = numb1
//     numb1 = numb2
//     numb2 = temp
// } 

// while (true) {
//     mod = numb1 % numb2
//     if (!mod) {
//         console.log("GCD : ", numb2)
//         break
//     }
//     if (mod) {
//         numb1 = numb2
//         numb2 = mod
//     }
// }
// // console.log(result)

// START PATTERN
let output = ""
let n = 7

// *
// * *
// * * *
// * * * *
// * * * * *

for (let row = 0; row < n; row ++) {
    // console.log("row - ", row)
    for (let col = 0; col < row + 1; col ++) {
        // console.log("col - ", col)
        output += `${n - row + col} `
    }

    output += "\n"
}
console.log(output)
