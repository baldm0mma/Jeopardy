import $ from 'jquery';
import fetch from 'cross-fetch';
import './css/base.scss';
import './images/turing-logo.png'
import Game from './Game';
import domUpdates from './domUpdates'

let jeopardyData;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
  .then(response => response.json())
  .then(myData => {
    jeopardyData = myData.data;
  });

$(document).ready(function() {
  $(".start-btn").click(function() {
    if ($('#player-one-input').val() !== "" && $('#player-two-input').val() !== "" && $('#player-three-input').val() !== "") {
      $(".main__entering-names-background").hide();
      const game = new Game([$('#player-one-input').val(), $('#player-two-input').val(), $('#player-three-input').val()], jeopardyData);
      domUpdates.updatePlayerNames(game);
      selectClue(game);
    }  
  });
});

function selectClue(game) {
  let a, b, el;
  let dailyDouble = game.round.dailyDouble;
  ///////////////////////////////////////////////
  console.log(dailyDouble);
  $('.main__game-board').click(function(e) {
    el = e.target;
    a = parseInt(el.dataset.if);
    b = parseInt(el.dataset.is);
    if (!isNaN(a) && !isNaN(b) && $(el).attr('data-done') !== 'done') {
      if (dailyDouble[0] === a && dailyDouble[1] === b || dailyDouble[2] === a && dailyDouble[3] === b) {
        $(el).html('Daily Double!');
        $(el).addClass('daily-double');
        $('.daily-double-wager').addClass('reveal-visibility');
        domUpdates.turnPrompt(95, game.round.currentTurn);
        setTimeout(verifyNormalClue, 3000);
      } else {
        verifyNormalClue();
      }
    }

    function verifyNormalClue() {
      $(el).html(game.round.categoryClues[a][b].question);
      $(el).removeClass('daily-double');
      $(el).addClass('clue-class');
      $('.main__game-your-answer-container').addClass('slide-down');
    }
  });

  $('#go-btn').click(function() {
    $('.main__game-your-answer-container').removeClass('slide-down');
    game.round.validateCurrentAnswer($('.your-answer-input').val(), game.round.categoryClues[a][b], [a, b], $('.daily-double-wager').val());
    $('.your-answer-input').val("");
    $(el).html("");
    $(el).attr('data-done', 'done');
    $('.daily-double-wager').removeClass('reveal');
    game.round.questionCounter--;
    if (game.round.questionCounter === 0) {
      $('td').removeAttr('data-done', 'done');
      $('td').removeAttr('class', 'clue-class');
      if (game.round.roundNumber === 1) {
        game.createNextRound(game);
      } else {
        game.createFinalRound(game)
      }
      dailyDouble = game.round.dailyDouble;
    }
  });

  $('.restart-btn').click(function() {
    location.reload();
  })
}

