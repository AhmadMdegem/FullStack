// // Ex1
//Falsey Expressions
// 0
// "" , ''
// undefined
// Nan
// Null

// console.log(!("knife" === "sword")) //true
// console.log((1 < 2) || (-1 > -1) || !false) //true
// console.log((31 % 5) == "1") //true
// console.log(!!true) //true
// console.log("5th Avenue" != "5th Avenue")//false
// console.log(52 !== "52") //true
// console.log((undefined || null)) //null

// // Ex2
// let a = 3
// let c = 0
// let b = a
// b = a
// c = a
// b = c
// a = b
// console.log("a b c",a,b,c) //3

// // stam
// let username = prompt("What is your username?")
// console.log(username)

// // Ex3
// let boughtTesla = true
// const yearOfTeslaPurchase = 2015
// let isUSCitizen = true
// let currentYear = 2018


// if (boughtTesla) {

//     if (isUSCitizen) {
//         if (currentYear - yearOfTeslaPurchase >= 4)
//             console.log("would you like to upgrade")
//         else
//             console.log("are you satisfied with the car")
//     }
//     else {
//         console.log("would you like to move to the US")
//     }
// }
// else {
//     console.log(" interested in buying one")

// }

// //Ex4 Array
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.splice(1,2)
// numbers[3]=1
// numbers.splice(numbers.length-4,4)
// numbers.unshift(0)
// console.log(numbers)


// // Ex5  1 Opjects
// const p1 = {
//     Name: "Jill",
//     city: "rahat",
//     age: 24
// };
// const p2 = {
//     Name: "Robert",
//     city: "beer",
//     age: 24
// };

// if (p1.age == p2.age) {

//     if (p1.city == p2.city)
//         console.log("Jill wanted to date Robert")
//     else
//         console.log("Jill wanted to date Robert but couldn't")

// }

// // Ex5  2 Opjects

// let books = [
//     {
//       "author": "purple",
//       "titel": "minivan"

//     },
//     {

//             "author": "hi",
//             "titel": "minivan"

//           }]

// const library = {
//     bookst: books


// }

// //Ex6 Loops
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(let index in names){
// let pe = {
//     name:names[index],
//     age:ages[index]
// }
//     people.push(pe)
// }
//     console.log(people);

// //Exercise 3 Loop (Extra Practice)

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation');


//     if (reservations[name].claimed == false) {
//         console.log("Welcome, ", name);
//     }
//     else {
//         console.log("Hmm, someone already claimed this reservation");
//     }

// //Ex15 loob

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for(item in posts){

//     if(posts[item].id==2)
//         posts.splice(item,1)
//   }
// console.log(posts);
