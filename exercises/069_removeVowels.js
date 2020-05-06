// Remove vowels from a string

removeVowels = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let stringArray = string.split('');
    let noVowelArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (!vowels.includes(stringArray[i].toLowerCase())) noVowelArray.push(stringArray[i]);
    }
    return noVowelArray.join('');
}

console.log(removeVowels('aeiou123'));