// Business Interface Logic
function Place (location, landmarks, year, food) {
  this.location = location,
  this.landmarks = landmarks,
  this.year = year,
  this.food = food
}

Place.prototype.displayInfo = function () {
  return this.location + ", " + this.landmarks[0] + ", " + this.landmarks[1] + ", " + this.landmarks[2] + ", " + this.landmarks[3] + ", " + this.year +  ", " + this.food[0] +  ", " + this.food[1] +  ", " + this.food[2] +  ", " + this.food[3];
}


var sriLanka = new Place ("Sri Lanka", ["Sigiriya", "Temple of the Sacred Tooth", "Adam's Peak"], 2018, ["samosa", "hoppers", "dal"])

var vietnam = new Place ("Vietnam", ["Saigon", "Phang Rang", "Hoi An"], 2017, ["pho", "vermicelli", "sugar cane juice"])

var nebraska = new Place ("Nebraska", ["corn", "old people", "prairie dog shooting gallery"], 2016, ['corn', 'ham', 'fry bread', "hotcakes"])

var siberia = new Place ("Siberia", ["taiga", "sables", "trans-siberian railroad"], 1934, ["cabbage", "fish", "pickles", "dumplin's"])

console.log(sriLanka, vietnam, nebraska, siberia);

// User Interface Logic
$(document).ready(function(){
  $("#sriLanka").click(function(event){
    event.preventDefault();
    $("li.sriLanka").append("<li>" + sriLanka.location + "</li>" + "<ul>Wonderous landmarks<li>" + sriLanka.landmarks[0] + "</li>" + "<li>" + sriLanka.landmarks[1] + "</li>" + "<li>" + sriLanka.landmarks[2] + "</li>" + "</ul><li>" + sriLanka.year + "</li>" + "<ul>Yummy Treats<li>" + sriLanka.food[0] + "</li>" + "<li>" + sriLanka.food[1] + "</li>"+ "<li>" + sriLanka.food[2] + "</li>"+ "<li>" + sriLanka.food[1] + "</li></ul>")
  });
  $("#vietnam").click(function(event){
    event.preventDefault();
    $("li.vietnam").append("<li>" + vietnam.location + "</li>" + "<ul>Wonderous landmarks<li>" + vietnam.landmarks[0] + "</li>" + "<li>" + vietnam.landmarks[1] + "</li>" + "<li>" + vietnam.landmarks[2] + "</li>" + "</ul><li>" + vietnam.year + "</li>" + "<ul>Yummy Treats<li>" + vietnam.food[0] + "</li>" + "<li>" + vietnam.food[1] + "</li>"+ "<li>" + vietnam.food[2] + "</li>"+ "<li>" + vietnam.food[1] + "</li></ul>")
  });
  $("#nebraska").click(function(event){
    event.preventDefault();
    $("li.nebraska").append("<li>" + nebraska.location + "</li>" + "<ul>Wonderous landmarks<li>" + nebraska.landmarks[0] + "</li>" + "<li>" + nebraska.landmarks[1] + "</li>" + "<li>" + nebraska.landmarks[2] + "</li>" + "</ul><li>" + nebraska.year + "</li>" + "<ul>Yummy Treats<li>" + nebraska.food[0] + "</li>" + "<li>" + nebraska.food[1] + "</li>"+ "<li>" + nebraska.food[2] + "</li>"+ "<li>" + nebraska.food[1] + "</li></ul>")
  });
  $("#siberia").click(function(event){
    event.preventDefault();
    $("li.siberia").append("<li>" + siberia.location + "</li>" + "<ul>Wonderous landmarks<li>" + siberia.landmarks[0] + "</li>" + "<li>" + siberia.landmarks[1] + "</li>" + "<li>" + siberia.landmarks[2] + "</li>" + "</ul><li>" + siberia.year + "</li>" + "<ul>Yummy Treats<li>" + siberia.food[0] + "</li>" + "<li>" + siberia.food[1] + "</li>"+ "<li>" + siberia.food[2] + "</li>"+ "<li>" + siberia.food[1] + "</li></ul>")
  });
});
