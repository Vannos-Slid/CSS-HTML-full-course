const conLogTypeOf = (message) => {
    console.log(typeof (message));
}

const conLog = (message) => {
    console.log(message);
}

// #1
// for (let i = 1; i <= 5; ++i) {
//     console.log("Count", i);
// }

// let score = 85;

// const conLog = (text) => {
//     console.log(text);
// }

// if (score >= 90) {
//     conLog("Grade: A");
// } else if (score >= 80) {
//     conLog("Grade: B");
// } else {
//     conLog("Grade: C or lower");
// }

// #2
// console.log(username); // error

// let username = "Tom";
// console.log(username);
// username = "Harry";
// console.log(username);
// username = "Ron";
// console.log(username);

// #4
// const username = "Tom";
// username = "Harry"; // error

// #5
// let a;
// let color;
// let _private;
// let $button;
// let getTop10;
// let a_large_name;
// let camelCase;

// #6
// let name = ""; // String
// let name1 = ``; // String
// let number = 5.5 // Number
// let isLoggedIn = false; // Boolean

// conLogTypeOf(name);
// conLogTypeOf(name1);
// conLogTypeOf(number);
// conLogTypeOf(isLoggedIn)

// conLog(7 + 4);
// conLog(7 + "4");
// conLog("7" + "4");

// conLog(number > 5)
// conLog(number < 5)

// #7 Operators
let a = 10;
let b = 5;

conLog(a + b);
conLog(a - b);
conLog(a * b);
conLog(a / b);

conLog(a % b);
conLog(a % 2);
conLog(a ** 2);
conLog(4 ** 3);
