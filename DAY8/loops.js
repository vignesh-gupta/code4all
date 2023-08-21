// let students = ["John", "Rohan", "Arjun", "Rahul", "Raj", "Ravi", "Rajesh", "Rakesh", "Rajat", "Rajeev"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (const student of students) {
//   console.log(student);
// }

// for (const student in students) {
//   console.log(student);
// }

// console.log(students);

let person = {
  name: "John",
  age: 30,
  city: "New York",
  profession: "Developer",
  goToOffice: function officeTravel() {
    console.log(this.children);
    return "Call a Cab!";
  },
  children: [
    {
      name: "Arjun",
      age: 5,
    },
    {
      name: "Rohan",
      age: 3,
    },
  ],
};

console.log(person);

for (const key in person) {
  console.log(key , person[key]);
}