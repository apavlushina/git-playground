function isValidTransition(playerSymbol, from, to) {
    const before = from.flat();
    const after = to.flat();

    const concat = before.map((row, index) => {
        return [row, after[index]]
    })

    const howManyVhanges = concat.filter(item => item[0] != item[1]);

    const theChange = concat.find(item => item[0] != item[1]);

    const validTurn = theChange[1] == playerSymbol;
    const validSymbol = theChange[0] === null;


    return howManyVhanges.length == 1 && validTurn && validSymbol;
  }
  module.exports = {isValidTransition}