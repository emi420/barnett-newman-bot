(() => {
  
const ColorAPI = window._ColorAPI;

class Canvas {
  constructor() {
    this.init();
  }
  
  init () {
    this.canvas = document.getElementById("canvas");
  }
  
  paint(palette) {
    const linesNumber = Math.round(Math.random() * 10);
    console.log("paint!", linesNumber, palette);
  }
}

class ColorApp {
  
  constructor() {
    this.getRandomPaletteButton = document.getElementById("getSomeColorButton");
    this.init();
    this.color = new ColorAPI();
    this.canvas = new Canvas();
  }
  
  init() {
    this.getRandomPaletteButton.addEventListener("click", () => {
      this.getRandomPaletteButtonHandler();
    });
  }
  
  getRandomPaletteButtonHandler() {
    const palette = this.color.getRandomPalette();
    this.canvas.paint(palette);
  }
  
}
  
const colorApp = new ColorApp();
colorApp.init();

})();
