// EXPONENT NUMBER
// 6 ^ 4 = 6 x 6 x 6 x 6

function exponent (numb, power) {
    if (power === 0) return 1

    let output = numb 

    for (let i = 1; i < power; i++) {
        output = output * numb
    }

    return output
}

// console.log(exponent(6, 4))
// console.log(exponent(2, 5))
// console.log(exponent(10, 0))

// RECURSIVE ? -> proses pengulangan
function fn (x) {
    console.log(x)
    return fn(x)
}

// fn(5)
// fn (5) -> console.log(5) -> fn (5)

// buatlah sebuah function untuk mencetak angka 1 hingga 10
// function print (numb) {
//     for (let i = 1; i <= numb; i++) {
//         console.log(i)
//     }
// }

// print(10)

function print (numb) {
    if (numb === 0) return
    console.log(numb)

    return print(numb - 1)
}

// print(5)

// print(5) -> console.log(5) -> print(4)
// print(4) -> console.log(4) -> print(3)
// ... 
// print(1) -> console.log(1) -> print(0)

function ReExponent (numb, power) {
    if (power === 0) return 1

    return numb * ReExponent(numb, power - 1)
}

// console.log(ReExponent(6, 3))
// ReExponent(6, 3) -> 6 * ReExponent(6, 2) -> 6 * 36 -> 216
// ReExponent(6, 2) -> 6 * ReExponent(6, 1) -> 6 * 6 -> 36
// ReExponent(6, 1) -> 6 * ReExponent(6, 0) -> 6 * 1 -> 6
// ReExponent(6, 0) -> 1

function rotasiArray(array, rotasi) {
    let len = array.length
    let n = rotasi

    if (rotasi <= 0) return "invalid rotation number"
    if (rotasi === len || rotasi % len === 0) return array
    if (rotasi > len) {
        n = rotasi % len
    }

    const last = array.splice(len - n, n)
    return [...last, ...array]
}
  
// console.log(rotasiArray([1, 2, 3, 4, 5], 1))

// [1, 2, 3, 4, 5] -> 4
// rotate 1x -> [5, 1, 2, 3, 4] -> 4
// rotate 2x -> [4, 5, 1, 2, 3] -> 3
// rotate 3x -> [3, 4, 5, 1, 2] -> 2
// rotate 4x -> [2, 3, 4, 5, 1] -> 1
// rotate 5x -> [1, 2, 3, 4, 5]

// DATA VALIDATION
function validation (data) {
    // 1. usernmae
    let len = data.username.length
    if (len < 6 || len > 16) {
        return "username must be minimum 6 chars or maximun 16 chars"
    }

    // 2. username not include symbol -> @!*&_%$#
    let reg = /[@!*&_%$#]/g
    if (reg.test(data.username)) {
        return "username must not include symbol"
    }

    // 3. check email
    // valid -> address@host.domain -> alee0510@gmail.com 
    let email = data.email.split("@") // ["alee0510", "gmail.com"]
    if (email.length > 2 || email.length === 1) {
        return "email doesn't valid"
    }

    let provider = email[1].split(".") // ["gmail", "com"]
    let host = ["gmail", "yahoo", "outlook"]
    let domain = ["com", "net"]

    if (!host.includes(provider[0])) {
        return "email host doesn't valid"
    }

    if (!domain.includes(provider[1])) {
        return "email domain doesn't valid"
    }

    return "data is valid"
}

console.log(validation({ username : "ale0510", email : "alee510@yahoo.net" }))
// REGEX -> Regular Expression
// let student = "reece"
// // console.log(student.includes("abc"))
// let reg = /[0-9]/g
// console.log(reg.test(student))
 