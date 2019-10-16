//Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.

//Hint: String.indexOf(letter) will return -1 if letter is not in the string
function wrongGuessCount(word, guesses) {
    let counter = 0;
    for (let letter of guesses) {
        if (word.indexOf(letter) != -1 ) {
          counter++
        }
    }
    return counter
  }
  

console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)



// Write a function that takes a word, and a array of guesses, and returns a string with dashes or letters with spaces in between.

// Hint: String.split('') will turn word into an array of letters.
// Hint: String.join(separator) will glue an array into a single string.
function showGuess(word, guesses) {
    let wordInArray = word.split('');
    let answer = [];
    
    let letterIncluded = 
        wordInArray.forEach(function(item, i, wordInArray) {
          if (guesses.indexOf(item) >= 0) {
              return answer.push(wordInArray[word.indexOf(item)]);
              
          } else {
            return answer.push("_")
          }
        });
    
      return answer.join('') ;
  }
  

console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')


//Write a function that takes a word, and an array of guesses, and returns if the player has won or not.

function isWinner(word, guesses) {
    return showGuess(word, guesses) == word
}

console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false)
console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true)


// Hint 1: String.trim() trims away any spaces
// Hint 2: String[0] gets the first letter as a string
// Hint 3: recurse with a larger array of letters


// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    if (guesses.length == word.length) {
        return isWinner(word, guesses) ? console.log('you won') : console.log('you lost')
    } else {
        rl.question('next letter? ', answer => {
            // console.log('player wrote:', answer, guesses);
            // let guessesAr = Array.from(guesses);
            // console.log(guessesAr);
            // guessesAr.push(answer);
            // console.log(guessesAr);
            // return next(word, guessesAr)
            return next(word, [...guesses, answer])
        })
    }
}
next('hello', ['h', 'e', 'l', 'o'])



