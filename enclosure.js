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

    for(var index = this.dinosaurs.length - 1; index>=0; index--) {
      if (this.dinosaurs[index].type === type) {
        this.dinosaurs.splice(index, 1);
      }
    }
  }
}

module.exports = Enclosure;