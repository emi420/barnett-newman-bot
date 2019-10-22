(() => {
  
const ColorAPI = window._ColorAPI;
const Canvas = window._Canvas;

class App {
  
  constructor() {
    this.paintButton = document.getElementById("paintButton");
    this.color = new ColorAPI();
    this.canvas = new Canvas(document.getElementById("canvas"));
  }
  
  init() {
    this.paintButton.addEventListener("click", () => {
      this.paintButtonHandler();
    });
  }
  

  async paintButtonHandler() {
    const palette = await this.color.getRandomPalette();
    const widths = this.canvas.getRandomWidths();
    this.canvas.paint(palette, widths);
  }
  
}
  
const app = new App();
app.init();

})();
