const {isValidTransition} = require('./valid-transition.js')

test('Valid Turn', () => {

    const playerSymbol = 'x';

    const from = [
      ['x', null, 'o'],
      ['o', null, 'x'],
      ['x', null, 'o']
    ]


    const to = [
        ['x', null, 'o'],
        ['o', 'o', 'x'],
        ['x', null, 'o']
      ]
  
    expect(isValidTransition(playerSymbol, from, to)).toBe(false)
  })


test('How many changes and valid Turn', () => {

    const playerSymbol = 'x';

    const from = [
      ['x', null, 'o'],
      ['o', null, 'x'],
      ['x', null, 'o']
    ]


    const to = [
        ['x', null, 'o'],
        ['o', 'x', 'x'],
        ['x', null, 'o']
      ]
  
    expect(isValidTransition(playerSymbol, from, to)).toBe(true)
  })

  test('How many changes', () => {

    const playerSymbol = 'x';

    const from = [
      ['x', null, 'o'],
      ['o', null, 'x'],
      ['x', null, 'o']
    ]


    const to = [
        ['x', null, 'o'],
        ['o', 'x', 'x'],
        ['x', 'o', 'o']
      ]
  
    expect(isValidTransition(playerSymbol, from, to)).toBe(false)
  })

  test('Valid Symbol', () => {

    const playerSymbol = 'x';

    const from = [
      ['x', null, 'o'],
      ['o', null, 'x'],
      ['x', null, 'o']
    ]


    const to = [
        ['o', null, 'o'],
        ['o', null, 'x'],
        ['x', null, 'o']
      ]
  
    expect(isValidTransition(playerSymbol, from, to)).toBe(false)
  })