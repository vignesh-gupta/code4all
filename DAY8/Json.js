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
    }
  ],
};
