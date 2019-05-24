import Round from "./Round";
import Player from "./Player";
import domUpdates from "./domUpdates";

class Game {
  constructor(allNames, data) {
    this.data = data;
    this.categories = Object.values(data.categories);
    this.player1 = new Player(allNames[0], 1);
    this.player2 = new Player(allNames[1], 2);
    this.player3 = new Player(allNames[2], 3);
    this.allPlayers = [this.player1, this.player2, this.player3];
    this.round = new Round(this.generateRandomizedCategories(), this.allPlayers, this.data, 1);
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

  createNextRound(game) {
    this.round = new Round(this.generateRandomizedCategories(), this.allPlayers, this.data, 2);
    domUpdates.populateCatagories(game);
  }

  restartGame() {
  
  }
}

export default Game;