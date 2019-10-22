(() => {
  
const ColorAPI = window._ColorAPI;
const Canvas = window._Canvas;

class App {
  
  constructor() {
    this.paintButton = document.getElementById("paintButton");
    this.color = new ColorAPI();
    this.canvas = new Canvas();
  }
  
  init() {
    this.paintButton.addEventListener("click", () => {
      this.paintButtonHandler();
    });
  }
  
  getRandomWidths() {
    const widths = [];
    for (let i = 0; i < 5; i++)
    {
        widths.push(Math.floor(Math.random() * 300) + 1)
    }
    return(widths);
  }
  
  async paintButtonHandler() {
    const palette = await this.color.getRandomPalette();
    const widths = this.getRandomWidths();
    
    console.log(widths);
    for (let width of widths) {
      
    }
    // this.canvas.paint(palette);
  }
  
}
  
const app = new App();
app.init();

})();
