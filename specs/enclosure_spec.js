var assert = require("assert");
var Enclosure = require("../enclosure.js");
var Dinosaur = require("../dinosaur.js");

describe("Enclosure", function(){

  beforeEach(function(){
    this.enclosure = new Enclosure("Big one");
    this.dinosaur = new Dinosaur("Diplodocus", 2);
    this.dinosaur2 = new Dinosaur("Pig", 7);
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

  it("should clear all dinosaurs", function(){
    this.enclosure.clear;
    assert.equal(0, this.enclosure.dinosaurs.length);
  })

  it("should remove animal from enclosure", function(){
    this.enclosure.addDinosaur(this.dinosaur2);
    this.enclosure.addDinosaur(this.dinosaur2);
    this.enclosure.removeDinosaur("Pig");
    assert.equal(0, this.enclosure.dinosaurs.length);
  })

})