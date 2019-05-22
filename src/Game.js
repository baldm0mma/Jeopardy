import Round from "./Round";
import Player from "./Player";
// import jeopardyData from "./data";
import fetch from 'cross-fetch';

let jeopardyData;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
.then(response => response.json())
.then(myData => {
  jeopardyData = myData.data;
  console.log(jeopardyData);
})

class Game {
  constructor(allNames) {
    this.categories = Object.values(jeopardyData.categories);
    this.player1 = new Player(allNames[0], 1);
    this.player2 = new Player(allNames[1], 2);
    this.player3 = new Player(allNames[2], 3);
    this.round = new Round(this.generateRandomizedCategories(), jeopardyData);
  }

  generateRandomizedCategories() {
    for (var i = this.categories.length - 1; i > 0; i--) {
      var z = Math.floor(Math.random() * (i + 1));
      var temp = this.categories[i];
      this.categories[i] = this.categories[z];
      this.categories[z] = temp;
    }
    return this.categories.splice(0, 4);
  }

  restartGame() {
    
  }
}

export default Game;