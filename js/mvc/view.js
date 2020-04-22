export default class View {
  constructor() {
    this.canvas = document.querySelector('.canvas');
    this.context = this.canvas.getContext('2d');
  }
  drawEntity(entity) {
    // console.log('Początek drawEntity() [view.js]');
    const coords = entity.coords;
    const dimentions = entity.dimentions;
    const color = entity.color;
    // console.log('coords = { ' + 
    // coords.x + ' ' + coords.y + ' }');
    // console.log('dimentions = { ' + 
    // dimentions.x + ' ' + dimentions.y + ' }');
    // console.log('color = ' + color);
    this.context.fillStyle = color;
    this.context.fillRect(coords.x, coords.y, 
    dimentions.width, dimentions.height);
    // console.log('Koniec drawEntity() [view.js]')
  }
  fillCanvas(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
  }
  drawMap(map) {
    let blockData = map.blockData;
    let colorData = map.colorData;
    for(let i = 0; i < 19; i++) {
      const row = blockData[i];
      for(let j = 0; j < 19; j++) {
        const blockType = row[j];
        if(blockType === 1) {
          this.context.fillStyle = colorData[blockType];
          this.context.fillRect(j*16,i*16,16,16); //dimentions hardcoded, as for now
        } 
      }
    }
  }
}