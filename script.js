/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const CONFIG = {
  COLOR_API: "https://www.colourlovers.com/api/",
  COLOR_API_ENDPOINTS: {
      PALLETTE_RANDOM: 'palettes/random'
    }
};



class HTTP {  
  getXML (url) {
    var conn = new XMLHttpRequest();
    conn.open("GET", url, false);
    conn.setRequestHeader("Content-Type", "text/xml");
    conn.send(null);
    return conn.responseXML;    
  }
}

class ColorAPI {
  getRandomPalette() {
      const http = new HTTP();
      return http.getXML([CONFIG.COLOR_API, CONFIG.PALLETTE_RANDOM].join(''));
  }
}

class App {
  
  constructor() {
    this.init();
    this.color = new ColorAPI();
  }
  
  init() {
    this.getColorButton = document.getElementById("getSomeColorButton");
    this.getColorButton.addEventListener("click", () => {
      this.getColorButtonHandler();
    });
  }
  
  getColorButtonHandler() {
    const palette = this.color.getRandomPalette();
    console.log(palette);
  }
  
}

const app = new App();
app.init();


