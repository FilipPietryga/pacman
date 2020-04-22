import Coords from '../misc/coords.js';
import Dimentions from '../misc/dimentions.js';

export default class Player {
  constructor(coords, dimentions, color, speed) {
    this.coords = new Coords(coords.x, coords.y);
    this.dimentions = new Dimentions(dimentions.width, dimentions.height);
    this.color = color;
    this.speed = speed;
  }
  reposition(coords) {
    // console.log('Rozpoczęto Reposition() [player.js]');
    const x = coords.x;
    const y = coords.y;
    this.coords = new Coords(x,y);
    // console.log('Zakończono Reposition() [player.js]');
  }
}