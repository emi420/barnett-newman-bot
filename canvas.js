(() => {

class Canvas {
  
  constructor(canvasElement, copyElement) {
    this.canvas = canvasElement;
    this.copy = copyElement;
    this.copyLink = this.copy.getElementsByClassName("copyLink")[0];
    this.bands = this.canvas.getElementsByClassName("band");
    this.palette = [];
    this.widths = [];
  }
  
  getRandomColor() {
    const letters = "0123456789ABCDEE";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[this.getRandomNumber(16)];
    }
    return color;
  }

  getRandomWidths() {
    const widths = [];
    for (let i = 0; i < 4; i++)
    {
        widths.push(
          this.getRandomNumber(25)
        )
    }
    return(widths);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  setCopy(copy) {
    this.copyLink.href = copy.url;
    this.copyLink.innerHTML = copy.title;
  }
  
  loading() {
    this.copy.style.display = "hidden";
    this.loadingInterval = setInterval(() => {
      let randomColors = [];
      for (let i = 0; i < 4; i++) {
        randomColors.push(
          this.getRandomColor()
        );
      }
      this.palette = {
        colors: randomColors
      };
      this.widths = this.getRandomWidths();
      this.canvas.style.backgroundColor = `#${this.getRandomColor()}`;
      this.paint();      
    }, 50);
  }
  
  ready() {
    clearInterval(this.loadingInterval);
    this.copy.style.display = "block";
  }
   
  paint() {
    const paletteCopy = [...this.palette.colors];
    const widths = this.widths;
    const backgroundNumber = this.getRandomNumber(4);
    this.canvas.style.backgroundColor = `#${paletteCopy[backgroundNumber]}`;
    paletteCopy.splice(backgroundNumber, 1);
    for (let i = 0; i < 4; i++) {
      this.bands[i].style.width = `${widths[i]}%`;
      this.bands[i].style.marginLeft = `${25 - widths[i]}%`;
      this.bands[i].style.backgroundColor = `#${paletteCopy[this.getRandomNumber(3)]}`;        
    }
  }
  
}
  
window._Canvas = Canvas;
  
})();

