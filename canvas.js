(() => {

class Canvas {
  constructor() {
    this.init();
  }
  
  init () {
    this.canvas = document.getElementById("canvas");
  }
  
  paint(palette) {
    const linesNumber = Math.round(Math.random() * 100);
    console.log("paint!", linesNumber, palette);
  }
}
  
window._Canvas = Canvas;
  
})();

