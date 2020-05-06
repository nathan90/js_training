//Number of days in a given month of a given year

//function to find leap year
leapYear = (year) =>
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

numberOfDays = (year, month) => {
    let days;
    let months31 = [1,3,5,7,8,10,12];
    let months30 = [4,6,9,11];
    if (month === 2) {
        if (leapYear(year)) return days = 29;
        else return days = 28;
    }
    if (months31.includes(month)) return days = 31;
    else if(months30.includes(month)) return days = 30;
    return "Please enter a valid month";
}

console.log(numberOfDays(2100,02));
