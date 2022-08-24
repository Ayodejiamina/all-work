let result = document.getElementById('checker')

// push:it  is used to add values to array at the right
const number=[1,4,6,8]
number.push(2,3,4)
console.log(number)
result.innerHTML=(number)
// push for text with length
const food =['amala','iyan','fufu']
food.push('sobo','maize',['kunu','soya'])
console.log(food)
console.log(food.length)

// pop :it is used remove text from the right
const num =[1,2,4,5,97,899]
num.pop(0)
console.log(num)

//shift:it is used to remove values from the left
const numb =[1,2,4,5,97,899]
 numb.shift()
console.log(numb)
// unshift : it is used to add value from the left
const cloth =['ankara','jean','top']
cloth.unshift('aminat',[99,'shade'])
console.log(cloth)
console.log(cloth.length)

// findIndexOf:i is used to find the index of a particular value whereby the first index with the condition is the one that is going to be clarified. note:the value here represent the calling back function name.
const book =[1,2,89,34,67,2,4]
console.log(book)
console.log(book.findIndex(value => value < 30))

// last index of :it is use to find the index of value which looks alike in an array starting from the back.
const books =[1,2,89,34,67,2,4,34,56,2,2,89,2]
console.log(books)
let buk = books.lastIndexOf(2)
console.log(buk)

// splice:it is used to add,and to remove values from an array. it has a particular syntax:var name.splice(where to start from,what to remove,what to add)
const shoes =['prada','gucci','versace']
console.log(shoes)
 shoes.splice(1,2,90,'kito')
console.log(shoes)

// slice :it is used to remove values in an array.the syntax is var name.slice(where to startfrom,where to end).
const drinks =['fanta','coke','viju','sprite','dango','pepsi','youghourt']
console.log(drinks)
drinks.slice()
console.log(drinks)


    
    
    
