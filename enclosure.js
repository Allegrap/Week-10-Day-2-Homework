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
  },
  getMoreThanTwoOffspring: function(){
    moreThanTwo = [];
    for(var dinosaur of this.dinosaurs){
      if(dinosaur.offspringPerYear > 2){
        moreThanTwo.push(dinosaur);
      }
    }
    this.dinosaurs = moreThanTwo;
    return this.dinosaurs;
  }
}

module.exports = Enclosure;