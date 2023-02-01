// Exercise #1

let a = 7;
let b = 14;
let c = '21';
let d = '36';
let e = 42;

let sum1 = a + b + Number(c) + Number(d) + e

let f = '1';
let g = 15;
let h = 8;
let i = '1'

let mult = Number(f) * g * h * Number(i)


// Exercise #2

let people = ['Greg', 'Mary', 'Devo', 'James'];

people.shift()
people.unshift('Matt')
people.push('Nenad')

let newPeople = people.slice(2)

people.indexOf('Mary')
people.indexOf('Foo')

//redefining
people.shift()
people.pop()
people.unshift('Greg')

people.splice(2, 1, 'Elizabeth', 'Anna')

let withBob = people + ' ' + 'Bob'


// Exercise #3

let multiArr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
]

let eleven = multiArr[0][1]
let twentyFive = multiArr[4][3]
let seventheen = multiArr[5][3]
let twentySeven = multiArr[2][3]
let zero = multiArr[2][1]