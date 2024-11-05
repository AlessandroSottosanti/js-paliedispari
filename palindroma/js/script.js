userWord = prompt("Inserisci una parola per verificare se è palindroma");
invertedWord = reverseWords(userWord);

isPalindrome = palindromeCheck(userWord, invertedWord);

console.log(userWord);
console.log(invertedWord);