let score = undefined;
// "dlkfj" changes to NaN in Number datatypes
// null changes to 0 in Number datatypes
// undefined  chnages to NaN in Number datatypes
// true changes to 1
console.log(typeof score)

let valueIntNumber = Number(score)
console.log(valueIntNumber)
console.log(typeof valueIntNumber)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let num = 434
let str = String(num)
console.log(str)
console.log(typeof str)


// operations
console.log("1" +2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")


console.log(true)
console.log(+true)
console.log(+"")
