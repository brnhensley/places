// Business Interface Logic
function Place (location, landmarks, year, food) {
  this.location = location,
  this.landmarks = landmarks,
  this.year = year,
  this.food = food
}

Place.prototype.displayInfo = function () {
  this.Place == 1;
  return "<li>" + this.location + "</li><ul><li>" + this.landmarks[0] + "</li><li>" + this.landmarks[1] + "</li><li>" + this.landmarks[2] + "</li></ul><li>" + this.year + "</li><ul><li>" + this.food[0] + "</li><li>" + this.food[1] + "</li><li>" + this.food[2] + "</li></ul>";
}

// This is a good idea, but how to make it work?

// Place.prototype.displayInfo = function (display) {
//   for (var i=0; i < this.landmarks.length; i++) {
//     if (this.landmarks[i]) {
//
//     }
//   }
// }

var sriLanka = new Place ("Sri Lanka", ["Sigiriya", "Temple of the Sacred Tooth", "Adam's Peak"], 2018, ["samosa", "hoppers", "dal"])

var vietnam = new Place ("Vietnam", ["Saigon", "Phang Rang", "Hoi An"], 2017, ["pho", "vermicelli", "sugar cane juice"])

var nebraska = new Place ("Nebraska", ["corn", "old people", "prairie dog shooting gallery"], 2016, ['corn', 'ham', 'fry bread'])

var siberia = new Place ("Siberia", ["taiga", "sables", "trans-siberian railroad"], 1934, ["cabbage", "fish", "pickles"])

console.log(sriLanka, vietnam, nebraska, siberia);


// User Interface Logic
$(document).ready(function(){
  $("#sriLanka").click(function(event){
    event.preventDefault();
    $("li.sriLanka").append(sriLanka.displayInfo());
  });

  $("#vietnam").click(function(event){
    event.preventDefault();
    $("li.vietnam").append(vietnam.displayInfo());
  });

  $("#nebraska").click(function(event){
    event.preventDefault();
    $("li.nebraska").append(nebraska.displayInfo());
  });

  $("#siberia").click(function(event){
    event.preventDefault();
    $("li.siberia").append(siberia.displayInfo());
  });
});
