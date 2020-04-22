import Model from './mvc/model.js';
import View from './mvc/view.js';
import Controller from './mvc/controller.js';

import map_1 from './maps/map1.js';

console.log('Początek [app.js]')

const model = new Model();
const view = new View();
const game = new Controller(model, view);

function drawEverything() {
  game.clearCanvas();
  game.drawMap(map_1);
  game.drawPlayer();
}

function updateEverything() {
  game.updatePlayer();
  game.checkIfPlayerIsOutOfRange();
}

function gameLoop() {
  updateEverything();
  drawEverything();
}

// console.log('Początek dodawania handlera dla keydown [app.js]');
game.attachHandler('keydown', game.handleKeyDown);
game.attachHandler('keyup', game.handleKeyUp);
// console.log('Koniec dodawania handlera dla keydown [app.js]');

const framesPerSecond = 60;
const gameInterval = setInterval(gameLoop, 1000/framesPerSecond);

console.log('Koniec [app.js]');