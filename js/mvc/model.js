import Coords from '../misc/coords.js';
import Dimentions from '../misc/dimentions.js';
import Player from '../misc/player.js';

export default class Model {
  constructor() {
    this.player = new Player(new Coords(64,64), new Dimentions(16, 16), '#ff0', 1);
  }
}