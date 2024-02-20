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
let userz = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'John'}
]

let user = userz.find(item => item.id == 2)

console.log(userz.findIndex(user => user.name == 'John'))

console.log(userz.findLastIndex(user => user.name == 'John'))



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


//.split & .join 
let names = 'Melissa, Jolyssa, Alyssa'

let namesDelim = names.split(', ')

for(let name of namesDelim){
    console.log(`A message to ${name}.`)
}

//can also put a limit on array length with 
//a second argument
let names2 = 'Joji, Miso, Iso'.split(', ', 2)

console.log(names2)

//split into letters calling .split(s) with 
//nothing in (s)
let str = 'test'

console.log(str.split(''))

//.join(glue) does reverse of split, creates
//string of arr items joined by glue between them

let things = ['bowl', 'nest', 'speaker', 'cup']

let string = things.join('; ') //glue array into a string using ;

console.log(string)


//.reduce & .reduceRight
/*syntax: arr.reduce(function(accumulator, item, index, array){
    ...
}, [initial])


accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.
*/

let newArr = [1,2,3,4,5,6,7]

let result = newArr.reduce((sum, current) => sum + current, 0)

console.log(result)

//works if we didn't put initial value of 0
console.log(newArr.reduce((sum, current) => sum + current))

//if empty array, without inital value will give
//an error
//if there was an initia value, would return empty arr

let emptyArr = []

//let empty = emptyArr.reduce((sum, current) => sum + current)

//console.log(empty)  //error

console.log(emptyArr.reduce((sum, current) => sum + current, 0))

//arr.reduceRight does same, but goes from right to left



//Array.isArray
//returns true if value is array, false if not
console.log(Array.isArray({})) //false

console.log(Array.isArray([])) //true



//thisArg , rarely used parameter in array methods
//that call fns, eg. find, filter, map

let army = {
    minAge: 28,
    maxAge: 27,
    canJoin(user){
        return user.age >= this.minAge && user.age < this.maxAge
    }
}

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 27},
    {age: 30}
]

//find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army)

// console.log(soldiers.length)
// console.log(soldiers[0].age)
// console.log(soldiers[1].age)
//not working idk why lol


/**********CHALLENGES***********/

function camelize(str){
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

camelize("background-color")

//

let anotherArr = [5, 3, 8, 1];

filterRangeInPlace(anotherArr, 1, 4); 
alert( anotherArr ); 

//

let barr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(barr);

//

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let carr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(carr);
  
  alert( sorted );
  alert( carr );    