/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let colors;
const getRandomPaletteHandler = (response) => {
  console.log('HERE');
  colors = response[0].colors;
}

const CONFIG = {
  COLOR_API: "https://www.colourlovers.com/api/",
  COLOR_API_ENDPOINTS: {
      PALLETTE_RANDOM: 'palettes/random?format=json&jsonCallback=getRandomPaletteHandler'
    }
};


class HTTP {  
  
  get (url) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    const promise = new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        document.body.removeChild(script);
        resolve(colors);          
      });
    });        
    document.body.appendChild(script);
    return promise;
  }
}

class ColorAPI {
  async getRandomPalette() {
      const http = new HTTP();
      return await http.get([CONFIG.COLOR_API, CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM].join(''));
  }
}

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

class App {
  
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

const app = new App();
app.init();


