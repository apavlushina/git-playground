const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

function bck_oldestSoFar(people) {
  let ages = people.map(person => person.age)
  return people.find(person => person.age == Math.max(...ages))
}

// function oldestSoFar(people) {
//   let ages = people.map(person => person.age)
//   return people.find(person => person.age == Math.max(...ages))
// }
const oldestSoFar = (accumulator, currentValue) => {
  console.log("acc", accumulator , 'currentValue' ,currentValue)
  
 if (accumulator.age >= currentValue.age ) {
    return accumulator
 }else {
   return currentValue
 }
  
}


console.log(oldestSoFar(people))

console.log(people.reduce(oldestSoFar))
console.log(people.reduce(oldestSoFar(people)))