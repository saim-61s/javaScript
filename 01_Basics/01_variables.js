const accountId = 14466
let accountEmail = "samailahmad@gmail.com"
var accountPassword = "24345"
accountCity = "Jaipur"
let accountState;

/*
prefer not to use var keyword in code because of block scope and functional scope
*/

// accountId = 2  not allowed

accountEmail = "sc@gmail.com"
accountPassword = 453453
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])