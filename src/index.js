
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import fetch from 'cross-fetch';
// import data from './data'

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Game from './Game';
import domUpdates from './domUpdates'
import dataset from './dataset'
import { domainToASCII } from 'url';



// function turnPrompt(pID, currentPlayerId, p1, p2, p3) {
//   var prompt;

//   if (pID === 100) {
//     prompt = `Welcome to the Jeopardy, ${p1}, ${p2} and ${p3}. Enjoy the game!`
//   }
//   $('.main__game-prompts').text(prompt)
//   console.log(prompt);
// }

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
    }
    
  });

});

