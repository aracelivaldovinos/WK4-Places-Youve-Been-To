Destinations ()

Test: "It will create an object for each destination that will have the following properties: state, city, landmarks, year"
Code: 
let destination1 = {
  state: "FL",
  city: "Miami",
  landmarks: ["Hollywood Beach", "Havana street"], 
  year: 2021
};
Expected Output: 
  state: "FL",
  city: "Miami",
  landmarks: ["Hollywood Beach", "Havana street"], 
  year: 2021

  Test: "It will have a constructor to group similar properties"
Code: 
function Destination(state, city, landmarks, year) {
  this.state = state;
  this.city = city;
  this.landmarks = landmarks;
  this.year = year;
}
Expected Output: 
  state: "FL",
  city: "Miami",
  landmarks: ["Hollywood Beach", "Havana street"], 
  year: 2021
