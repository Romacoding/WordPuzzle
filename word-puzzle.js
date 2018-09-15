const WordPuzzle = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
}

WordPuzzle.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new WordPuzzle('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new WordPuzzle('New Jersey', 4)
console.log(game2.getPuzzle())