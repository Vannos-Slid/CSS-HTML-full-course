for (let i = 1; i <= 5; ++i) {
    console.log("Count", i);
}

let score = 85;

const conLog = (text) => {
    console.log(text);
}

if (score >= 90) {
    conLog("Grade: A");
} else if (score >= 80) {
    conLog("Grade: B");
} else {
    conLog("Grade: C or lower");
}