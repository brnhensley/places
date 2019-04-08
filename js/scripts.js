// Business Interface Logic
function Place (location, landmarks, year, food) {
  this.location = location,
  this.landmarks = landmarks,
  this.year = year,
  this.food = food
}

var sriLanka = new Place ("Sri Lanka", ["Sigiriya", "Temple of the Sacred Tooth", "Adam's Peak"], 2018, ["samosa", "hoppers", "dal"])

var vietnam = new Place ("Vietnam", ["Saigon", "Phang Rang", "Hoi An"], 2017, ["pho", "vermicelli", "sugar cane juice"])

var nebraska = new Place ("Nebraska", ["corn", "plains", "old people", "prairie dog shooting gallery"], 2016, ['corn', 'ham', 'fry bread', "hotcakes"])

var siberia = new Place ("Siberia", ["taiga", "sables", "trans-siberian railroad"], 1934, ["cabbage", "fish", "pickles", "dumplin's"])
