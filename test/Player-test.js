import chai from 'chai';
const expect = chai.expect;
const Player = require('../src/Player');

describe('Player', function() {

  let player;
  beforeEach(function() {
    player = new Player('Jevbert', 1);
  });

  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', function() {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should have a name given to it', function() {
    expect(player.name).to.equal('Jevbert');
  });

  it('should be assigned an ID', function() {
    expect(player.id).to.equal(1);
  });

  it('should begin with a score of 0', function() {
    expect(player.score).to.equal(0);
  });

});