import data from "./dataset";

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
    this.currentTurn++;
  }
}

export default Round;