import $ from 'jquery';

const domupdates = {
  "updatePlayerNames": function() {
    $("#").text = $('#player-one-input').val();
    $("#").text = $('#player-two-input').val();
    $("#").text = $('#player-three-input').val();
    domUpdates.populateCatagoties()
  },

  "populateCatagories": function() {
    $('.main__game-catagory-3').text = round.catagoryTitles[2];
    $('.main__game-catagory-2').text = round.catagoryTitles[1];
    $('.main__game-catagory-1').text = round.catagoryTitles[0];
    $('.main__game-catagory-4').text = round.catagoryTitles[3];
    domUpdates.populateClues();
  },

  "populateClues": function(){
    $('.main__game-data-1-1').text = round.catagoryClues[0][0].pointValue;
    $('.main__game-data-2-1').text = round.catagoryClues[0][2].pointValue;
    $('.main__game-data-3-1').text = round.catagoryClues[0][1].pointValue;
    $('.main__game-data-4-1').text = round.catagoryClues[0][3].pointValue;
    $('.main__game-data-1-2').text = round.catagoryClues[1][0].pointValue;
    $('.main__game-data-2-2').text = round.catagoryClues[1][1].pointValue;
    $('.main__game-data-3-2').text = round.catagoryClues[1][2].pointValue;
    $('.main__game-data-4-2').text = round.catagoryClues[1][3].pointValue;
    $('.main__game-data-1-3').text = round.catagoryClues[2][0].pointValue;
    $('.main__game-data-2-3').text = round.catagoryClues[2][1].pointValue;
    $('.main__game-data-3-3').text = round.catagoryClues[2][2].pointValue;
    $('.main__game-data-4-3').text = round.catagoryClues[2][3].pointValue;
    $('.main__game-data-1-4').text = round.catagoryClues[3][0].pointValue;
    $('.main__game-data-2-4').text = round.catagoryClues[3][1].pointValue;
    $('.main__game-data-3-4').text = round.catagoryClues[3][2].pointValue;
    $('.main__game-data-4-4').text = round.catagoryClues[3][3].pointValue;
  }
};

export default domUpdates;