// let response = {};

// fetch("https://dummyjson.com/users?limit=2&select=firstName,age,email")
//   .then((res) => res.json())
//   .then((resJson) => {
//     response = resJson;
//     console.log("res", resJson);
//     console.log("response after wait", response);
//   });

// console.log(response);

// async function fetchData() {
//   let response = await fetch(
//     "https://dummyjson.com/users?limit=2&select=firstName,age,email"
//   ).then((res) => res.json());

//   console.log("response in fetchDate", response);
// }

// fetchData();

// (async function() {
//   let response = await fetch(
//     "https://dummyjson.com/users?limit=2&select=firstName,age,email"
//   ).then((res) => {
//     console.log("res", res);
//     return res.json()
//   });

//   console.log("response in IIFE", response);
// })()

// Create a new User
// let options = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     firstName: "Vignesh",
//     lastName: "Gupta",
//     age: 20,
//     /* other user data */
//   }),
// };

// fetch("https://dummyjson.com/users/add", options)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then(console.log);


// Update a User

// fetch("https://dummyjson.com/users/1", {
//   method: "PATCH",
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     firstName: 'Owais'
//   }),
// }).then((res) => res.json()).then(console.log);


// Localsotrage

// localStorage.setItem("name", "Vignesh");
// sessionStorage.setItem("name", "Vignesh");
// document.cookie = "name=Vignesh; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";

// localStorage.removeItem("name");

// let person ={
//   name: "Vignesh",
//   age: 20,
//   email: "vigneshgupta32@gmail.com"
// }

// localStorage.setItem("person", JSON.stringify(person));

// console.log(JSON.parse(localStorage.getItem("person")));