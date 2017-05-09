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
    for (var dinosaur of this.dinosaurs) {
      if (dinosaur.type === type) {
        var index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
      }
    }
  }

}

module.exports = Enclosure;