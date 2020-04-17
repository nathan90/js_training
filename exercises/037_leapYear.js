//37. Leap year or not

const leapYear = (year) => {
    if (year % 4 === 0) {
        return "a leap year";
    } else {
        return "not a leap year";
    }
}

//calling the function
let year =  1999;
console.log(`The year ${year} is`, leapYear(year));