import $ from 'jquery';

const domUpdates = {
  updatePlayerNames(game) {
    $(".player-1-name").text(game.player1.name)
    $(".player-2-name").text(game.player2.name)
    $(".player-3-name").text(game.player3.name)
    domUpdates.populateCatagories(game)
  },

  populateCatagories(game) {
    $('.main__game-category-1').text(game.round.categoryTitles[0]);
    $('.main__game-category-2').text(game.round.categoryTitles[1]);
    $('.main__game-category-3').text(game.round.categoryTitles[2]);
    $('.main__game-category-4').text(game.round.categoryTitles[3]);
    domUpdates.populateClues(game);
  },

  

    

  populateClues(game) {
    $('.main__game-data-1-1').text(game.round.categoryClues[0][0].pointValue);
    $('.main__game-data-2-1').text(game.round.categoryClues[1][0].pointValue);
    $('.main__game-data-3-1').text(game.round.categoryClues[2][0].pointValue);
    $('.main__game-data-4-1').text(game.round.categoryClues[3][0].pointValue);
    $('.main__game-data-1-2').text(game.round.categoryClues[0][1].pointValue);
    $('.main__game-data-2-2').text(game.round.categoryClues[1][1].pointValue);
    $('.main__game-data-3-2').text(game.round.categoryClues[2][1].pointValue);
    $('.main__game-data-4-2').text(game.round.categoryClues[3][1].pointValue);
    $('.main__game-data-1-3').text(game.round.categoryClues[0][2].pointValue);
    $('.main__game-data-2-3').text(game.round.categoryClues[1][2].pointValue);
    $('.main__game-data-3-3').text(game.round.categoryClues[2][2].pointValue);
    $('.main__game-data-4-3').text(game.round.categoryClues[3][2].pointValue);
    $('.main__game-data-1-4').text(game.round.categoryClues[0][3].pointValue);
    $('.main__game-data-2-4').text(game.round.categoryClues[1][3].pointValue);
    $('.main__game-data-3-4').text(game.round.categoryClues[2][3].pointValue);
    $('.main__game-data-4-4').text(game.round.categoryClues[3][3].pointValue);
    domUpdates.selectClue(game)
  },

  selectClue(game) {
    $('.main__game-board').click(function(e) {
      const el = e.target;
      const a = parseInt(el.dataset.if);
      const b = parseInt(el.dataset.is);
      if ( !isNaN(a) && !isNaN(b)) {
        $(el).text(game.round.categoryClues[a][b].question)
      }
    })
  }
};

export default domUpdates;
