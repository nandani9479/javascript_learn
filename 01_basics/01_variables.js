const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = 'Jaipur'

// accountId = 2 //not allowed changes to const

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bengaluru"
let accountState;
console.log(accountId);

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/ 
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



