function getVowels(str) {
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i];
        }
    }
    
    return result;
}

const string = "Привет! Как дела?";
console.log(getVowels(string)); 