import chai from 'chai';
const expect = chai.expect;
const Round = require('../src/Round');

describe('Round', function() {

  let round;
  beforeEach(function() {
    round = new Round(['Jev', 'DeMarcus', 'Hindreen']);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a round number that begins with 1', function() {
    expect(round.roundNumber).to.equal(1);
  });

  it('should have a current turn number that begins with 1', function() {
    expect(round.currentTurn).to.equal(1);
  });

  it('should have a category titles list that are the 4 categories currently being played', function() {
    expect(round.categoryTitles).to.have.lengthOf(4);
  });

  // it.skip('should have a category clues list that are 4 clues from each of the 4 categories', function() {
  //   expect(round.categoryClues).to.have.lengthOf(??????????);
  // });

});