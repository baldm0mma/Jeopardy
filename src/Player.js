class Player {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.score = 0;
  }
}

export default Player;