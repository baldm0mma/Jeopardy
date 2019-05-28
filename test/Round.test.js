import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Round from '../src/Round';
import data from "../src/dataset";
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'updateScore', () => true);
chai.spy.on(domUpdates, 'turnPrompt', () => true);

describe('Round', function() {

  let round;
  let allPlayers;
  let clue;

  beforeEach(function() {
    round = new Round([1, 2, 3, 4], allPlayers, data, 1);
    allPlayers = [{ name: 'jev', id: 1, score: 0 }, 
      { name: 'dem', id: 2, score: 0 }, 
      { name: 'hin', id: 3, score: 0 }];
    clue = {
      question: "The Eulogy\" is HBO's e-mail newsletter devoted to this series",
      pointValue: 300,
      answer: "Six Feet Under",
      categoryId: 10
    }

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a access to all three instances of the current players', function() {
    expect(round.allPlayers).to.have.lengthOf(3);
  });

  it('should have a current turn number that begins with 1', function() {
    expect(round.currentTurn).to.equal(1);
  });

  it('should have a round number that begins with 1', function() {
    expect(round.roundNumber).to.equal(1);
  });

  it('should have a question counter that begins at 16', function() {
    expect(round.questionCounter).to.equal(16);
  });

  it('should have a category titles list that are the 4 categories currently being played returned in plain English', function() {
    expect(round.categoryTitles).to.eql([ 'United States History', 'Life Sciences', 'Public Health', 'Education Jargon' ]);
  });

  it('should have a category clues list that are 4 clues from each of the 4 categories', function() {
    expect(round.categoryClues).to.have.lengthOf(4);
  });

  it('should have a method that confirms who the current player is', function() {
    expect(round.confirmCurrentPlayer()).to.eql({ name: 'jev', id: 1, score: 0 });
  });

  it('should have a method that increments the current turn counter', function() {
    expect(round.currentTurn).to.equal(1);
    round.incrementNextTurn();
    expect(round.currentTurn).to.equal(2);
  });

  it('should have a method that returns the point value to be incremented or decremented', function() {
    expect(round.calculateRegularPoints(clue)).to.eql(300);
  });

  it('should have a method that validates the current answer, and updates points accordingly', function() {

    expect(round.allPlayers[0].score).to.equal(0);
    round.validateCurrentAnswer("Six Feet Under", clue, [1, 1]);
    expect(round.allPlayers[0].score).to.equal(300);

    expect(domUpdates.updateScore).to.have.been.called(1);
    expect(domUpdates.turnPrompt).to.have.been.called(1);

    round.validateCurrentAnswer("I dunno", clue, [1, 1]);
    expect(round.allPlayers[0].score).to.equal(0);
  });

  it('should have a method that returns a random array of numbers, 0-3, with which to target/assign the current round\'s daily double(s)', function() {
    expect(round.generateDailyDoublePosition()).to.have.lengthOf(2);
    let round2 = new Round([1, 2, 3, 4], allPlayers, data, 2);
    expect(round2.generateDailyDoublePosition()).to.have.lengthOf(4);
  });

});