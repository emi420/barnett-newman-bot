(() => {
  
const ColorAPI = window._ColorAPI;
const Canvas = window._Canvas;

class App {
  
  constructor() {
  }
  
  init() {
    this.paintButton = document.getElementById("paintButton");
    this.color = new ColorAPI();
    this.canvas = new Canvas(
      document.getElementById("canvas"),
      document.getElementById("copy")
    );
    this.paintButton.addEventListener("click", () => {
      this.paintButtonHandler();
    });
    this.paintButton.disabled = false;
  }
  

  async paintButtonHandler() {
    this.paintButton.disabled = true;
    this.canvas.loading();
    const palette = await this.color.getRandomPalette();
    const widths = this.canvas.getRandomWidths();
    this.canvas.ready();
    this.canvas.paint(palette.colors, widths);
    this.canvas.setCopy(palette.copy);
    this.paintButton.disabled = false;
  }
  
}
  
const app = new App();
app.init();

})();
