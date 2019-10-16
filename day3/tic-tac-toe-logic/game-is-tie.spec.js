const {gameIsTie} = require('./game-is-tie.js')

test('The game is a tie', () => {

  const board = [
    ['x', 'x', 'o'],
    ['o', 'o', 'x'],
    ['x', 'x', 'o']
  ]

  expect(gameIsTie(board)).toBe('It is a tie!')
})

test('The game is a tie', () => {

    const board = [
      ['x', 'x', 'o'],
      ['o', 'o', 'x'],
      ['x', 'null', 'o']
    ]
  
    expect(gameIsTie(board)).toBe('It is a tie!')
  })