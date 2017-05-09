var assert = require("assert");
var Enclosure = require("../enclosure.js");
var Dinosaur = require("../dinosaur.js");

describe("Enclosure", function(){

  beforeEach(function(){
    this.enclosure = new Enclosure("Big one");
  })

  it("should have name", function(){
    assert.equal("Big one", this.enclosure.name);
  })

  it("should start empty", function(){
    assert.equal(0, this.enclosure.dinosaurs.length);
  })


})