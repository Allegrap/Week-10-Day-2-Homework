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
  }

}

module.exports = Enclosure;