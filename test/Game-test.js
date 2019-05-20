import chai from 'chai';
const expect = chai.expect;
const Game = require('../src/Game');
const Player = require('../src/Player');
const Round = require('../src/Round');

describe('Game', function() {

  let game;
  beforeEach(function() {
    game = new Game(['Jev', 'DeMarcus', 'Hindreen']);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should begin with 10 categories', function() {
    expect(game.categories).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should instantiate all of the players', function() {
    expect(game.player1).to.be.an.instanceof(Player);
    expect(game.player2).to.be.an.instanceof(Player);
    expect(game.player3).to.be.an.instanceof(Player);
  });

  it('should instantiate a new Round', function() {
    expect(game.round).to.be.an.instanceof(Round);
  });

  it('should have a method that returns four random categories from game.categories', function() {
    expect(game.returnRandomizedCategories()).to.have.lengthOf(4);
    expect(game.categories).to.have.lengthOf(6);
  });

  it('should have a method that restarts the game', function() {
    expect???
  });

});