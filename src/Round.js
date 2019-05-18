import data from "./dataset";

class Round {
  constructor(randomCategoryNum) {
    this.data = data;
    this.roundNumber = 0;
    this.currentCategoryTitle = this.returnCurrentCategoryTitle(randomCategoryNum);
    this.currentCategoryClues = this.retrunCurrentCategoryClues(randomCategoryNum);
  }

  returnCurrentCategoryTitle(randomCategoryNum) {
    return Object.keys(data.categories).find(key => data.categories[key] === randomCategoryNum);
  }

  retrunCurrentCategoryClues(randomCategoryNum) {
    const usableClues = data.clues.reduce((allClues, clue) => {
      if (clue.categoryId === randomCategoryNum) {
        allClues.push(clue);
      }
      return allClues;
    }, []);
    usableClues.splice(Math.round(Math.random() * 4), 1);
    return usableClues;
  }
}

export default Round;