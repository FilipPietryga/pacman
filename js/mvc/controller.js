import Coords from '../misc/coords.js';
import map_1 from '../maps/map1.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;  
    this.keys = {
      right: false,
      down: false,
      left: false,
      up: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  drawPlayer() {
    // console.log('Początek drawPlayer() [controller.js]');
    this.view.drawEntity(this.model.player);
    // console.log('Koniec drawPlayer() [controller.js]');
  }
  clearCanvas() {
    this.view.fillCanvas('#000');
  }
  handleKeyDown(event) {
    // console.log('Początek handleKeyInput() [controller.js]');
    const key = event.keyCode;
    switch(key) {
      case 68:
        this.keys.right = true;
      break;
      case 83:
        this.keys.down = true;       
      break;
      case 65:
        this.keys.left = true;
      break;
      case 87:
        this.keys.up = true;
      break;
    }
    // console.log('X = ' + x + ' Y = ' + y);
    // console.log('Koniec handleKeyInput() [controller.js]');
  }
  handleKeyUp(event) {
    const key = event.keyCode;
    switch(key) {
      case 68:
        this.keys.right = false;
      break;
      case 83:
        this.keys.down = false;       
      break;
      case 65:
        this.keys.left = false;
      break;
      case 87:
        this.keys.up = false;
      break;
    }
  }
  updatePlayer() {
    const coords = this.model.player.coords;
    let x = coords.x;
    let y = coords.y;
    const speed = this.model.player.speed;
    if(this.keys.right) {
      x = x + speed;
    }
    if(this.keys.down) {
      y = y + speed;
    }
    if(this.keys.left) {
      x = x - speed;
    }
    if(this.keys.up) {
      y = y - speed;
    }
    this.model.player.reposition(new Coords(x,y));
  }
  attachHandler(event, handler) {
    document.addEventListener(event, handler);
  }
  drawMap(map) {
    this.view.drawMap(map);
  }
  checkIfPlayerIsOutOfRange() {
    const coords = this.model.player.coords;
    let x = coords.x;
    let y = coords.y;
    if(x < -32) {
      x = 304;
    } else if (x > 304) {
      x = -32;
    }
    this.model.player.reposition(new Coords(x,y));
  }
}