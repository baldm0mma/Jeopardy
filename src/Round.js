import data from "./dataset";

class Round {
  constructor(randomCategories) {
    this.data = data;
    this.roundNumber = 1;
    this.currentTurn = 1;
    this.categoryTitles = this.returnCurrentCategoryTitle(randomCategories);
    this.categoryClues = this.retrunCurrentCategoryClues(randomCategories);
  }

  returnCurrentCategoryTitle(randomCategories) {
    return randomCategories.map(category => {
      return Object.keys(data.categories).find(key =>
        data.categories[key] === category);
    });
  }

  retrunCurrentCategoryClues(randomCategories) {
    return randomCategories.map(category => {
      const usableClues = data.clues.reduce((allClues, clue) => {
        if (clue.categoryId === category) {
          allClues.push(clue);
        }
        return allClues.filter((clue, index, array) => {
          return array.map(mapClue => mapClue['pointValue']).indexOf(clue['pointValue']) === index;
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