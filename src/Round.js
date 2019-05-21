import data from "./dataset";
import turnPrompt from "./index"

class Round {
  constructor(randomCategories) {
    this.data = data;
    this.roundNumber = 1;
    this.currentTurn = 1;
    this.categoryTitles = this.generateCurrentCategoryTitle(randomCategories);
    this.categoryClues = this.generateCurrentCategoryClues(randomCategories);
  }

  generateCurrentCategoryTitle(randomCategories) {
    return randomCategories.map(category => {
      return Object.keys(data.categories).find(key =>
        data.categories[key] === category);
    });
  }

  generateCurrentCategoryClues(randomCategories) {
    return randomCategories.map(category => {
      const usableClues = data.clues.reduce((allClues, clue) => {
        if (clue.categoryId === category) {
          allClues.push(clue);
        }
        return allClues.filter((clue, index, finalClues) => {
          return finalClues.map(mapClue => mapClue['pointValue']).indexOf(clue['pointValue']) === index;
        });
      }, []);
      return usableClues;
    });
  }

  nextTurn() {
    if (this.currentTurn >= 3) {
      this.currentTurn = 1;
    } else {
      this.currentTurn++;
    }
    turnPrompt(101, this.currentTurn);
  }

  checkAnswer(currentPlayer, playerInput, clue) {
    
    if (playerInput.toLowerCase() === clue.answer.toLowerCase()) {
      currentPlayer.score += clue.pointValue * this.roundNumber;
    } else {
      currentPlayer.score -= clue.pointValue * this.roundNumber;
    }
  }

}

export default Round;