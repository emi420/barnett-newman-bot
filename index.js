(() => {
  
const ColorAPI = window._ColorAPI;
const Canvas = window._Canvas;

class App {
  
  constructor() {}
  
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
  }
  
  disableButtons(value) {
    this.paintButton.disabled = value;
    this.remixButton.disabled = value;
  }

  async paintButtonHandler() {
    this.disableButtons(true);
    this.canvas.loading();
    this.canvas.palette = await this.color.getRandomPalette();
    this.canvas.widths = this.canvas.getRandomWidths();
    this.doPaint();
  }

  remixButtonHandler() {
    this.canvas.widths = this.canvas.getRandomWidths();
    this.doPaint();
  }

  doPaint() {
    this.canvas.ready();
    this.canvas.paint();
    this.canvas.setCopy(this.palette.copy);
    this.disableButtons(false);
  }
  
}
  
const app = new App();
app.init();

})();
