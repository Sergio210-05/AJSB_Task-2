import Game from './game/game';

document.addEventListener("DOMContentLoaded", () => {
  const Goblin = new Game();
  // Goblin.changeCell();
  // Goblin.changeCell();
  setInterval(() => {
    Goblin.changeCell();
  }, 1000);
});
