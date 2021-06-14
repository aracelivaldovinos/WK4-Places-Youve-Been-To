//Constructor
function Destination(state, city, landmarks, year) {
  this.state = state;
  this.city = city;
  this.landmarks = landmarks;
  this.year = year;
}

//Instance 
let destination1 = new Destination ("FL", "Miami",["Hollywood Beach", "Havana street"], 2021)
let destination2 = new Destination ("FL", "Orlando",["Disney World", "Universal Studios"], 2021)
let destination3 = new Destination ("WY", "Jackson hole",["Grand Teton National Park", "Yellowstone National Park"], 2020)
let destination4 = new Destination ("MA", "Boston",["Harvard University", "Boston Marketplace"], 2019)

let destination5 = new Destination ("CA", "Vancouver",["Capilano Suspension Bridge Park", "Cypress Mountain ski resort"], 2019)