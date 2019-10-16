function isValidBoard(board) {
    const symbols = [ 'x', 'o', null ];
    let validation = board.length == 3 && board.every(element => {
        return element.length == 3 && element.every(symbol => {
            return symbols.includes(symbol)
        });
    });
    return validation;
  }
  module.exports = {isValidBoard}