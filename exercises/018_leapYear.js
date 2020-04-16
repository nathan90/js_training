//Write a program that prints the next 20 leap years.
const readlineSync = require("readline-sync");
const year = parseInt(readlineSync.question("Enter a Starting Year: "));

const leapYear = (year) => {
    let rem = year % 4;
    if (rem === 0) {
        for (let i = 1; i <= 20; i++) {
            console.log(year)
            year += 4;
        }
    } else {
        if (rem === 1) {
            year += 3;
            for (let i = 1; i <= 20; i++) {
                console.log(year);
                year += 4;
            } 
        } else if (rem === 2) {
            year += 2;
            for (let i = 1; i <= 20; i++) {
                console.log(year);
                year += 4;
            }
        } else {
            year += 1;
            for (let i = 1; i <= 20; i++) {
                console.log(year);
                year += 4;
            }
        }
    }
}

leapYear(year);