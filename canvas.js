(() => {

class Canvas {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.bands = this.canvas.getElementsByClassName("band");
  }
   
  paint(palette, widths) {    
    this.canvas.backgroundColor = 
    for (let i = 0; i < 5; i++) {
      this.bands[i].style.width = `${widths[i]}%`;
      this.bands[i].style.marginLeft = `${20 - widths[i]}%`;
      this.bands[i].style.backgroundColor = `#${palette[i]}`;
    }
  }
  
  getRandomWidths() {
    const widths = [];
    for (let i = 0; i < 5; i++)
    {
        widths.push(
          Math.floor(Math.random() * 20) + 1  
        )
    }
    return(widths);
  }
  
}
  
window._Canvas = Canvas;
  
})();

