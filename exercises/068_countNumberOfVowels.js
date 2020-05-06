// Count the number of vowels
countVowels = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let stringArray = string.split('');
    let sum = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (vowels.includes(stringArray[i].toLowerCase())) sum++;
    }
    return sum;
}

console.log(countVowels("Aeiou"));