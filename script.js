/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

class HTTP {
  
  get (url) {
    var Connect = new XMLHttpRequest();
    Connect.open("GET", url, false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);
    var TheDocument = Connect.responseXML;    
  }
}

class App {
  
  constructor() {
    this.getColorButton = document.getElementById("getSomeColorButton");
    this.init();
  }
  
  init() {
    this.getColorButton.addEventListener("click", () => {
      
    });
  }
  
}

const app = new App();
app.init();


