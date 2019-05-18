import Round from "./Round";
import Player from "./Player";

class Game {
  constructor(allNames) {
    this.player1 = new Player(allNames[0]);
    this.player2 = new Player(allNames[1]);
    this.player3 = new Player(allNames[2]);
    this.round = new Round(this.returnRandomCategory());
  }

  returnRandomCategory() {
    return Math.round((Math.random() * (9) + 1));
  }
}

export default Game;