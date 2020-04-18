//Number of times digit 3 occurs in each and every number from 0 to n

threeCount = (number) => {
    let count = 0;
    for (let i = 0; i <= number; i++) {
        let i_clone = JSON.parse(JSON.stringify(i))
        while (i_clone > 0) {
            let digit = i_clone % 10;
            if (digit === 3) {
                count++;
            }
            i_clone = Math.floor(i_clone / 10);
        }
    }
    return count;  
}

console.log(threeCount(30));