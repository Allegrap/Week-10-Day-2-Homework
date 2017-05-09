var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  beforeEach(function(){
    this.dinosaur = new Dinosaur("Diplodocus", 2);
  })

  it("should have type", function(){
    assert.equal("Diplodocus", this.dinosaur.type);
  })

  it("should have number of offspring", function(){
    assert.equal(2, this.dinosaur.offspringPerYear);
  })

})