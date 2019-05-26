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
    $('#00').text(game.round.categoryClues[0][0].pointValue * game.round.roundNumber);
    $('#10').text(game.round.categoryClues[1][0].pointValue * game.round.roundNumber);
    $('#20').text(game.round.categoryClues[2][0].pointValue * game.round.roundNumber);
    $('#30').text(game.round.categoryClues[3][0].pointValue * game.round.roundNumber);
    $('#01').text(game.round.categoryClues[0][1].pointValue * game.round.roundNumber);
    $('#11').text(game.round.categoryClues[1][1].pointValue * game.round.roundNumber);
    $('#21').text(game.round.categoryClues[2][1].pointValue * game.round.roundNumber);
    $('#31').text(game.round.categoryClues[3][1].pointValue * game.round.roundNumber);
    $('#02').text(game.round.categoryClues[0][2].pointValue * game.round.roundNumber);
    $('#12').text(game.round.categoryClues[1][2].pointValue * game.round.roundNumber);
    $('#22').text(game.round.categoryClues[2][2].pointValue * game.round.roundNumber);
    $('#32').text(game.round.categoryClues[3][2].pointValue * game.round.roundNumber);
    $('#03').text(game.round.categoryClues[0][3].pointValue * game.round.roundNumber);
    $('#13').text(game.round.categoryClues[1][3].pointValue * game.round.roundNumber);
    $('#23').text(game.round.categoryClues[2][3].pointValue * game.round.roundNumber);
    $('#33').text(game.round.categoryClues[3][3].pointValue * game.round.roundNumber);
    // console.log(game.round.categoryClues[3][3].pointValue * game.round.roundNumber);
    domUpdates.selectClue(game);
  },

  selectClue(game) {
    let a, b, el;
    let dailyDouble = game.round.generateDailyDoublePosition();
    $('.main__game-board').click(function(e) {
      el = e.target;
      a = parseInt(el.dataset.if);
      b = parseInt(el.dataset.is);
      if ( !isNaN(a) && !isNaN(b) && $(el).attr('data-done') !== 'done') {
        $(el).html(game.round.categoryClues[a][b].question)
        $(el).addClass('clue-class');
        $('.main__game-your-answer-container').addClass('slide-down');
      }
    });

    $('#go-btn').click(function() {
      $('.main__game-your-answer-container').removeClass('slide-down');
      dailyDouble;
      game.round.validateCurrentAnswer($('.your-answer-input').val(), game.round.categoryClues[a][b], [a, b], $('.daily-double-wager').val());
      $('.your-answer-input').val("");
      $(el).html("");
      $(el).attr('data-done', 'done');
      game.round.questionCounter--;
      if (game.round.questionCounter === 0) {
        $('td').removeAttr('data-done', 'done');
        $('td').removeAttr('class', 'clue-class');
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
      96: `${player[currentPlayerId]}, choose the first question of round 2!`,
      97: `Round 1 is done, this is round 2.`,
      98: `${player[1]}, you are kicking off the game! choose your first question and good luck`,
      99: `Welcome to Jeopardy ${player[1]}, ${player[2]} and ${player[3]}. you are about to start round 1.`,
      100: `${player[currentPlayerId]}, it's your turn again, choose another question!`,
      101: `${player[currentPlayerId]} it's your turn, choose a question!`,
      102: `The answer is correct, you earned ${points} points, ${player[currentPlayerId]}!`,
      103: `The answer is wrong, you lost ${points} points, ${player[currentPlayerId]}!`,
    }

    $('#promptId').text("");
    $('#promptId').addClass('prompt-translate-out');
    const p1 = () => $('#promptId').removeClass('prompt-translate-out');
    setTimeout(p1, 300);
    const p2 = () => $('#promptId').text(prompt[promptID]);
    setTimeout(p2, 300);
    $('.main__players-player-name').removeClass('players-turn');
    $('.main__players-player-value').removeClass('players-turn-border');
    $(`.player-${currentPlayerId}-name`).addClass('players-turn');
    $(`.player-${currentPlayerId}-container`).addClass('players-turn-border');
  }

};

export default domUpdates;