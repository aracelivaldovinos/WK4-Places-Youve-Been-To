//UI Logic
let destinationBook = new DestinationBook();
$("document").ready(function(){
  function displayDestinationsInfo(destinationToDisplay) {
    let destinationList = $("ul#destinations")
    let destinationName = ""

    // Object keys grabs all keys from destinations 
    //Looping through keys and converting each destination into string
    Object.keys(destinationToDisplay.destinations).forEach(function(key){
      const destination = destinationToDisplay.findDestination(key);
      destinationName += "<li id=" + destination.id + ">" + destination.state + "," + destination.city + "</li>";
      $("#destinations").html(destinationName) 
    });
  }
});



//Business Logic
//Create empty destination book

function DestinationBook (){
  // creates new empty destination book
  this.destinations = {};
  // initiating ID
  this.currentId = 0;
}
//Add each destinations with ID Key:Value  -> id: destination
DestinationBook.prototype.addDestination = function(destination) {
  // Creates assingn assignId method to variable destinationId
  destination.id = this.assignId();
  //Add each unique id as a key:value pair
  this.destinations[destination.id] = destination;
}

//Increasing ID+1 so each destinations can have different ID
DestinationBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
DestinationBook.prototype.findDestination = function (id) {
 return this.destinations[id];
}

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

destinationBook.addDestination(destination1)
destinationBook.addDestination(destination2)
destinationBook.addDestination(destination3)
destinationBook.addDestination(destination4)
destinationBook.addDestination(destination5)

