import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game';
import Player from '../src/Player';
import Round from '../src/Round';
import data from '../src/dataset';

describe('Game', function() {

  let game;
  beforeEach(function() {
    game = new Game(['Jev', 'DeMarcus', 'Hindreen'], data);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should begin with 4 fewer categories than the dataset provides', function() {
    expect(game.categories.length).to.equal(Object.values(data.categories).length - 4);
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
    expect(game.generateRandomizedCategories()).to.have.lengthOf(4);
  });

  // it('should have a method that restarts the game', function() {
  //   expect???
  // });

});