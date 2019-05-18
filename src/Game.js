import Round from "./Round";
import Player from "./Player";

class Game {
  constructor(allNames) {
    this.categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.player1 = new Player(allNames[0], 1);
    this.player2 = new Player(allNames[1], 2);
    this.player3 = new Player(allNames[2], 3);
    this.round = new Round(this.randomizeCategories());
  }

  randomizeCategories() {
    for (var i = this.categories.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.categories[i];
      this.categories[i] = this.categories[j];
      this.categories[j] = temp;
    }
    return this.categories.slice(0, 4);
  }

  restartGame() {
    
  }
}

export default Game;