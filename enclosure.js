var Enclosure = function(name){
  this.name = name;
  this.dinosaurs = [];
}

Enclosure.prototype = {
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },
  clear: function(){
    this.dinosaurs = [];
  },
  removeDinosaur: function (type) {
    var newArray = [];
    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.type !== type) {
        newArray.push(dinosaur);      }
    }

    this.dinosaurs = newArray;
  }

}

module.exports = Enclosure;