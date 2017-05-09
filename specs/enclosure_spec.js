var assert = require("assert");
var Enclosure = require("../enclosure.js");
var Dinosaur = require("../dinosaur.js");

describe("Enclosure", function(){

  beforeEach(function(){
    this.enclosure = new Enclosure("Big one");
    this.dinosaur = new Dinosaur("Diplodocus", 2);
  })

  it("should have name", function(){
    assert.equal("Big one", this.enclosure.name);
  })

  it("should start empty", function(){
    assert.equal(0, this.enclosure.dinosaurs.length);
  })

  it("should add dinosaur", function(){
    this.enclosure.addDinosaur(this.dinosaur);
    assert.equal(1, this.enclosure.dinosaurs.length);
  })

})