const {calculateWinner} = require('./calculate-winner')

function gameIsTie(board) {

    if (!calculateWinner(board) && !board.flat().includes(null)) {
        return 'It is a tie!'
    }

    else {
        const boardWithAddedX = board.map(row => row.map(element => {
            if (element == null) {
              return 'x'
            }
            return element
          }))
    
          const boardWithAddedO = board.map(row => row.map(element => {
            if (element == null) {
              return 'o'
            }
            return element
          }))

          return !calculateWinner(boardWithAddedX) && !calculateWinner(boardWithAddedO) ? 'It is a tie!' : 'Another step, please'
    }
}

module.exports = {gameIsTie}


  