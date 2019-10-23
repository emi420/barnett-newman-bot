(() => {
  
const ColorAPI = window._ColorAPI;
const Canvas = window._Canvas;

class App {
  
  constructor() {
  }
  
  init() {
    this.paintButton = document.getElementById("paintButton");
    this.remixButton = document.getElementById("remixButton");
    this.color = new ColorAPI();
    this.canvas = new Canvas(
      document.getElementById("canvas"),
      document.getElementById("copy")
    );
    this.paintButton.addEventListener("click", () => {
      this.paintButtonHandler();
    });
    this.remixButton.addEventListener("click", () => {
      this.remixButtonHandler();
    });
    this.paintButton.disabled = false;
    this.remixButton.disabled = true;
  }
  

  async paintButtonHandler() {
    this.paintButton.disabled = true;
    this.remixButton.disabled = true;
    this.canvas.loading();
    this.palette = await this.color.getRandomPalette();
    this.widths = this.canvas.getRandomWidths();
    this.doPaint();
  }

  remixButtonHandler() {
    this.widths = this.canvas.getRandomWidths();
    this.doPaint();
  }

  doPaint() {
    this.canvas.ready();
    this.canvas.paint(this.palette.colors, this.widths);
    this.canvas.setCopy(this.palette.copy);
    this.paintButton.disabled = false;
    this.remixButton.disabled = false;
  }
  
}
  
const app = new App();
app.init();

})();
