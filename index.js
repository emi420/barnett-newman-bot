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
  }
  
  init() {
    this.getRandomPaletteButton.addEventListener("click", () => {
      this.getRandomPaletteButtonHandler();
    });
  }
  
  async getRandomPaletteButtonHandler() {
    const palette = await this.color.getRandomPalette();
    const canvas = new Canvas();
    canvas.paint(palette);
  }
  
}



