function calculateWinner(board) {
    // implement the logic, either return null, 'x' or 'o'
    const onTheSide = [0, 1, 2].map(n => board.map(row => row[n]));
    onTheSide.forEach(element => {
        return board.push(element)
    });
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    board.push(diagonal1);
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    board.push(diagonal2);

    const tmp = board.map(element => {

        if (element.every(symbol => symbol == 'x')) { 
            return 'x';
        }

        else if (element.every(symbol => symbol == 'o')) {
            return 'o';
        }
        
        return null
    })

    const checkx = tmp.find(element => element === 'x') 
  

    const checko = tmp.find(element => element === 'o')
  
    if (checkx) {
        return 'x';
    }
    if (checko) {
        return 'o';
    }

    return null
}
module.exports = { calculateWinner }