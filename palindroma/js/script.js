// DATI
const userWord = prompt("Inserisci una parola per verificare se è palindroma").toLowerCase();
let invertedWord = reverseWords(userWord);

console.log("user Word:", userWord);
console.log("inverted Word:", invertedWord);


let isPalindrome = palindromeCheck(userWord, invertedWord);

console.log("isPalindrome", isPalindrome);

// OUTPUT
let message = '';

if(isPalindrome) {
    message = `La parola "${userWord}" è Palindroma.`;
}
else {
    message = `La parola "${userWord}" non è Palindroma.`;
}

document.writeln(message);
