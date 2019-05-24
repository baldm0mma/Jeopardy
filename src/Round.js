import domUpdates from "./domUpdates";

class Round {
  constructor(randomCategories, allPlayers, data, roundNumber) {
    this.data = data;
    this.allPlayers = allPlayers;
    this.currentTurn = 1;
    this.roundNumber = roundNumber || 1;
    this.questionCounter = 16;
    this.categoryTitles = this.generateCurrentCategoryTitle(randomCategories);
    this.categoryClues = this.generateCurrentCategoryClues(randomCategories);
    this.dailyDouble = this.generateDailyDoublePosition();
  }

  startingPrompt() {
    let welcome = () => domUpdates.turnPrompt(99);
    setTimeout(welcome, 500);
    let firstPlayerStart = () => domUpdates.turnPrompt(98, this.currentTurn);
    setTimeout(firstPlayerStart, 3000);
  }

  generateCurrentCategoryTitle(randomCategories) {
    this.startingPrompt();
    return randomCategories.map(category => {
      let final = Object.keys(this.data.categories).find(key =>
        this.data.categories[key] === category);
      return final.split(/(?=[A-Z])/).map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    });
  }

  generateCurrentCategoryClues(randomCategories) {
    return randomCategories.map(category => {
      return this.data.clues.reduce((allClues, clue) => {
        if (clue.categoryId === category && !allClues.map(clu => clu.pointValue).includes(clue.pointValue)) {
          allClues.push(clue);
        }
        return allClues;
      }, []);
    });
  }

  nextTurn() {
    if (this.currentTurn >= 3) {
      this.currentTurn = 1;
    } else {
      this.currentTurn++;
    }
  }

  confirmCurrentPlayer() {
    return this.allPlayers.find(player => player.id === this.currentTurn);
  }


  validateCurrentAnswer(playerInput, clue, indecies) {
    const points = clue.pointValue * this.roundNumber * (this.dailyDouble[0] === indecies[0] && this.dailyDouble[1] === indecies[1] ? 2 : 1);
    if (playerInput.toLowerCase() === clue.answer.toLowerCase()) {
      this.confirmCurrentPlayer().score += points;
      domUpdates.updateScore(this.confirmCurrentPlayer())
      domUpdates.turnPrompt(102, this.currentTurn, points);
      let go = () => domUpdates.turnPrompt(100, this.currentTurn, points);
      setTimeout(go, 3000);
    } else {
      this.confirmCurrentPlayer().score -= points;
      domUpdates.updateScore(this.confirmCurrentPlayer())
      domUpdates.turnPrompt(103, this.currentTurn, points);
      let go = () => domUpdates.turnPrompt(101, this.currentTurn, points);
      setTimeout(go, 3000);
      this.nextTurn();
    }
  }

  generateDailyDoublePosition() {
    let dailyDouble = [];
    for (let i = 0; i < this.roundNumber; i++) {
      dailyDouble.push(Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
    }
    return dailyDouble;
  }

}

export default Round;