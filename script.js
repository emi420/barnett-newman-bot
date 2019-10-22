/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const getRandomPaletteHandler = (response) => {
  console.log(responsep[0].colors);
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
    script.addEventListener("load", () => {
      console.log("src loaded");
    });
    document.body.appendChild(script);
  }
}

class ColorAPI {
  getRandomPalette() {
      const http = new HTTP();
      return http.get([CONFIG.COLOR_API, CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM].join(''));
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
  
  getRandomPaletteButtonHandler() {
    const palette = this.color.getRandomPalette();
    // console.log(palette);
  }
  
}

const app = new App();
app.init();


