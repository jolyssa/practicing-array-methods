// ADD AND REMOVE ITEMS
//.splice
let arr = ['I', 'study', 'Javascript', 'FOR', 'fun']

console.log(arr)

let deleted = arr.splice(0,3)

console.log(deleted)

console.log(arr)



//.slice
let arr2 = ['t','e', 's', 't']

console.log(arr2.slice(1,3))

console.log(arr2.slice(-2))

console.log(arr2)



//.concat
const newArray = [1,2]

console.log( newArray.concat([3,4]))

console.log(newArray.concat([3,4], [5,6]))

//create an array from newArray, [3,4]
//and then add value 5 and 6

console.log(newArray.concat([3,4], 5, 6))


let array = [1,2]

let arrayLike = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true,
    length: 2
}

console.log(array.concat(arrayLike))



//.forEach
let array2 = ['me', 'and', 'you']

array.forEach((item, index, array) => {
    console.log(`${item} is at index '${index}' in '${array}'`)
})



//SEARCHING IN AN ARRAY
//.indexOf/.lastIndexOf & .includes
console.log(array.indexOf('and'))
console.log(array.indexOf(null))
console.log(array.includes('me'))

const ar3 = [NaN]
console.log(arr.indexOf(NaN))
console.log(arr.includes(NaN))

let newArray2 = ['i', 'love', 'you']

console.log(newArray2)

console.log(newArray2)



//.find
let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'John'}
]

let user = users.find(item => item.id == 2)

console.log(users.findIndex(user => user.name == 'John'))

console.log(users.findLastIndex(user => user.name == 'John'))



//.filter
let newUsers = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'}
]

//returns array of first two users
let someUsers = newUsers.filter(item => item.id < 3)

console.log(someUsers.length)



//********PRACTICING FUNCTION EXPRESSIONS AND ARROW FUNCTIONS*************//
//regular function
 function hello(){
    console.log('hi')
 }

 hello()

 //function expression, long form
let sum = function(a,b) {
    return a + b
}

//same function expression, shortened
let summ = (a,b) => a + b

console.log(summ(1,4))
//*********************************************//

//function expression w/ one argument, long
let doublee = function(n) {
    return n * 2
}
//function expression w/ one argument
let double = n => n * 2

console.log(double(5))

//*********************************************//

//function expression w/ NO arguments
let sayBye = () => console.log("Au revoir!")
sayBye()

//*********************************************//

//dynamically creating a function w/ arrow functions

let age = prompt(`C'est quoi ton age?`, 18)

let welcome = (age < 18) ? 
() => console.log('Hello!') :
() => console.log('Goodbye!')

welcome()

//replace fn expressions w/ arrow functions in the code below
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no ()
// }

// ask(
//     "Do you agree?",
//     function() {alert("You agreed.")},
//     function() {alert("You cancelled the execution.")}
// )

////
let asks = (question, yes, no) => confirm(question) ?
 yes() : 
 no()


asks(
    'Do you agree?',
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
)

//********END*************//

//********CONTINUE W ARRAY METHODS*************//
//SEARCHING IN ARRAY
//.map
let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length)
console.log(lengths)



//.sort
let nums = [1, 54, 3, 7, 4, 27, 62]

nums.sort()

console.log(nums)

//doesn't work as intended, compared as strings, not numbers.
//to sort it, we need an ordering function that knows how to 
//compare its elements. The default is a string order.


//so,

function compareNumeric(a,b){
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1 
}

let newNums = [15,4,3]

newNums.sort(compareNumeric)

console.log(newNums)

//our previous array now will sort properly here
nums.sort(compareNumeric)

console.log(nums)

//writing shorter functions w/ arrow functions
//comparison fn only eneds to return + # to say "greater"
//and - # to say "less"
nums.sort((a,b) => a-b)

console.log(nums)

newNums.sort((a,b) => a-b)

console.log(newNums)

//for strings, in different languages its better to use
//str.localeCompare method to correctly sort letters, like é 

//for eg.
let countries = ['Österreich', 'Andorra', 'Vietnam']

//regular sorting
console.log(countries.sort((a,b) => a > b ? 1 : -1)) 

//w localeCompare
console.log(countries.sort((a,b) => a.localeCompare(b)))



//.reverse
let reversedNums = [5,6,7,8,9,10]
console.log(reversedNums)

reversedNums.reverse()
console.log(reversedNums)