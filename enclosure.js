var Enclosure = function(name){
  this.name = name;
  this.dinosaurs = [];
}

Enclosure.prototype = {
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  }


}

module.exports = Enclosure;