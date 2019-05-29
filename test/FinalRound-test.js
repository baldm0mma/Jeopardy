import chai from 'chai';
const expect = chai.expect;
import FinalRound from '../src/FinalRound';
import data from "../src/dataset";

describe('FinalRound', function() {

  let finalRound;
  let allPlayers;

  beforeEach(function() {
    finalRound = new FinalRound([1, 2, 3, 4], allPlayers, data);
    allPlayers = [{ name: 'jev', id: 1, score: 0, finalWager: 100 }, 
      { name: 'dem', id: 2, score: 0, finalWager: 100 }, 
      { name: 'hin', id: 3, score: 0, finalWager: 100 }];
  });

  it('should be a function', function() {
    expect(FinalRound).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(finalRound).to.be.an.instanceof(FinalRound);
  });

  it('should have a method that returns a single, random clue', function() {
    expect(finalRound.chooseFinalQuestion()).to.be.an('object');
  });
  
});