import $ from 'jquery';

const domUpdates = {
  updatePlayerNames(game) {
    $(".player-1-name").text(game.player1.name);
    $(".player-2-name").text(game.player2.name);
    $(".player-3-name").text(game.player3.name);
    domUpdates.populateCatagories(game);
  },

  populateCatagories(game) {
    $('.main__game-category-1').text(game.round.categoryTitles[0]);
    $('.main__game-category-2').text(game.round.categoryTitles[1]);
    $('.main__game-category-3').text(game.round.categoryTitles[2]);
    $('.main__game-category-4').text(game.round.categoryTitles[3]);
    domUpdates.populateClues(game);
    // console.log(game.round.categoryClues);
  },

  populateClues(game) {
    // console.log(game.round.categoryClues);
    $('.main__game-data-1-1').text(game.round.categoryClues[0][0].pointValue * game.round.roundNumber);
    $('.main__game-data-2-1').text(game.round.categoryClues[1][0].pointValue * game.round.roundNumber);
    $('.main__game-data-3-1').text(game.round.categoryClues[2][0].pointValue * game.round.roundNumber);
    $('.main__game-data-4-1').text(game.round.categoryClues[3][0].pointValue * game.round.roundNumber);
    $('.main__game-data-1-2').text(game.round.categoryClues[0][1].pointValue * game.round.roundNumber);
    $('.main__game-data-2-2').text(game.round.categoryClues[1][1].pointValue * game.round.roundNumber);
    $('.main__game-data-3-2').text(game.round.categoryClues[2][1].pointValue * game.round.roundNumber);
    $('.main__game-data-4-2').text(game.round.categoryClues[3][1].pointValue * game.round.roundNumber);
    $('.main__game-data-1-3').text(game.round.categoryClues[0][2].pointValue * game.round.roundNumber);
    $('.main__game-data-2-3').text(game.round.categoryClues[1][2].pointValue * game.round.roundNumber);
    $('.main__game-data-3-3').text(game.round.categoryClues[2][2].pointValue * game.round.roundNumber);
    $('.main__game-data-4-3').text(game.round.categoryClues[3][2].pointValue * game.round.roundNumber);
    $('.main__game-data-1-4').text(game.round.categoryClues[0][3].pointValue * game.round.roundNumber);
    $('.main__game-data-2-4').text(game.round.categoryClues[1][3].pointValue * game.round.roundNumber);
    $('.main__game-data-3-4').text(game.round.categoryClues[2][3].pointValue * game.round.roundNumber);
    $('.main__game-data-4-4').text(game.round.categoryClues[3][3].pointValue * game.round.roundNumber);
    // console.log(game.round.categoryClues[3][3].pointValue * game.round.roundNumber);
    domUpdates.selectClue(game);
  },

  selectClue(game) {
    let a, b, el;
    let dailyDouble = game.round.generateDailyDoublePosition();
    //how will we show the daily double info on the DOM?
    $('.main__game-board').click(function(e) {
      el = e.target;
      a = parseInt(el.dataset.if);
      b = parseInt(el.dataset.is);
      // console.log(game.round.categoryClues[a][b].answer);
      if ( !isNaN(a) && !isNaN(b) && $(el).attr('data-done') !== 'done') {
        $(el).html(game.round.categoryClues[a][b].question)
        $(el).addClass('clue-class');
        $('.main__game-your-answer-container').addClass('slide-down');
      }
    });

    $('#go-btn').click(function() {
      $('.main__game-your-answer-container').removeClass('slide-down');
      game.round.validateCurrentAnswer($('.your-answer-input').val(), game.round.categoryClues[a][b], [a, b]);
      $('.your-answer-input').val("");
      $(el).html("");
      $(el).attr('data-done', 'done');
      game.round.questionCounter--;
      if (game.round.questionCounter === 0) {
        $('td').removeAttr('data-done', 'done');
        game.createNextRound(game);
      }
    });
  },

  updateScore(player) {
    $(`#player-${player.id}-value`).text(player.score);
  },

  turnPrompt(promptID, currentPlayerId, points) {
    const player = {
      1: $('#player-one-input').val(),
      2: $('#player-two-input').val(),
      3: $('#player-three-input').val(),
    };
    const prompt = {
      98: `${player[1]}, you are kicking off the game! choose your first question and good luck`,
      99: `Welcome to Jeopardy ${player[1]}, ${player[2]} and ${player[3]}, enjoy the game!`,
      100: `${player[currentPlayerId]}, it's your turn again, choose another question!`,
      101: `${player[currentPlayerId]} it's your turn, choose a question!`,
      102: `The answer is correct, you earned ${points} points, ${player[currentPlayerId]}!`,
      103: `The answer is wrong, you lost ${points} points, ${player[currentPlayerId]}!`,
    }

    const pro = prompt[promptID];

    $('.main__game-prompts').text("")
    typeWriter()
    var i = 1;
    function typeWriter() {
      if (0 < pro.length) {
        $(".main__game-prompts").append(pro.charAt(i))
        i++;
        setTimeout(typeWriter, 15);
      }
    }
    $('.main__players-player-name').removeClass('players-turn');
    $('.main__players-player-value').removeClass('players-turn-border');
    $(`.player-${currentPlayerId}-name`).addClass('players-turn');
    $(`.player-${currentPlayerId}-container`).addClass('players-turn-border');
  }

};

export default domUpdates;