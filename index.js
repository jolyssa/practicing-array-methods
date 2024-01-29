// let arr = ['I', 'study', 'Javascript', 'FOR', 'fun']

// alert(arr)

// let deleted = arr.splice(0,3)

// alert(deleted)

// alert(arr)

// let arr2 = ['t','e', 's', 't']

// alert(arr2.slice(1,3))

// alert(arr2.slice(-2))

// alert (arr2)

// newArray = [1,2]

// alert( newArray.concat([3,4]))

// alert(newArray.concat([3,4], [5,6]))

// //create an array from newArray, [3,4]
// //and then add value 5 and 6

// alert(newArray.concat([3,4], 5, 6))


// let array = [1,2]

// let arrayLike = {
//     0: 'something',
//     1: 'else',
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// }

// alert(array.concat(arrayLike))

// let array = ['me', 'and', 'you']

// array.forEach((item, index, array) => {
//     alert(`${item} is at index '${index}' in '${array}'`)
// })

// alert (array.indexOf('and'))
// alert (array.indexOf(null))
// alert(array.includes('me'))

const arr = [NaN]
alert(arr.indexOf(NaN))
alert(arr.includes(NaN))

let newArray = ['i', 'love', 'you']

alert(newArray)

console.log(newArray)

let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'John'}
]

let user = users.find(item => item.id == 2)

alert(users.findIndex(user => user.name == 'John'))

alert(users.findLastIndex(user => user.name == 'John'))

 