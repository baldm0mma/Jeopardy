
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Game from './Game';
import domUpdates from './domUpdates'
import dataset from './dataset'
import { domainToASCII } from 'url';


console.log('This is the JavaScript entry file - your code begins here.');

// const prompts = {
//   message1: `hey ${id} adaaddja`,
//   message2: 'djdhudshds'
// }

function turnPrompt(id, prompts) {
  return prompt.messageX
}


$(document).ready(function() {
  $(".start-btn").click(function() {
    if ($('#player-one-input').val() !== "" && $('#player-two-input').val() !== "" && $('#player-three-input').val() !== "") {
      $(".main__entering-names-background").hide();

      const game = new Game([$('#player-one-input').val(), $('#player-two-input').val(), $('#player-three-input').val()]);
      domUpdates.updatePlayerNames();
    }
  }); 
});




