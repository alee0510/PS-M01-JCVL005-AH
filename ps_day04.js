// BUILD-IN METHODS
// .map()
// let arr1 = [5, 6, 7, 8]
// console.log("before : ", arr1)

// let arr2 = arr1.map((item) => item - 1)

// console.log("after : ", arr2)

// // clone version
// function mapClone (arr, fn) {
//     let output = []
//     for (let i = 0; i < arr.length; i++) {
//         let result = fn(arr[i])
//         output.push(result)
//     }
//     return output
// }

// // test
// function minusOne (item) {
//     return item - 1
// }

// let arr3 = mapClone(arr1, minusOne)
// console.log("clone : ", arr3)


// .reduce()
// let arr = [1, 3, 5, 7 , 9]
// let result1 = arr.reduce((prev, current) => prev + current)
// let result2 = arr.reduce((prev, current) => prev * current)
// let result3 = arr.reduce((prev, current) => prev - current)

// console.log("arr : ", arr)
// console.log("result : ", result1)
// console.log("result : ", result2)
// console.log("result : ", result3)

// // [1, 3, 5, 7, 9]
// function reduceClone (arr, fn) {
//     // validasi input
//     if(!(typeof fn === "function")) {
//         return -1
//     }

//     let output = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         output = fn(output, arr[i])
//     }

//     return output
// }

// let result4 = reduceClone(arr, (prev, current) => prev + current)
// let result5 = reduceClone(arr, (prev, current) => prev * current)
// let result6 = reduceClone("1, 2, 3", () => {})

// console.log("result : ", result4)
// console.log("result : ", result5)
// console.log("result : ", result6)

// Object.keys() -> ["key", "key", "key", ...]
let student = {
    name : "alee",
    age : 18,
    school : "Purwadhika"
}

// 1. dot notation
console.log(student.name)
console.log(student.school)

// 2. array notation
console.log(student["name"])
console.log(student["school"])

// loop special
for (let key in student) {
    console.log("key : ", key)
}

let numb = [1, 2, 3]
for (let item of numb) {
    console.log(item)
}

function objectKeysClone (obj) {
    let output = []
    for (let key in obj) {
        output.push(key)
    }

    return output
}

let result7 = objectKeysClone(student)
console.log("result : ", result7)