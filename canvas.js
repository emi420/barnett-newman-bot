(() => {

class Canvas {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.bands = this.canvas.getElementsByClassName("band");
  }
  
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomWidths() {
    const widths = [];
    for (let i = 0; i < 4; i++)
    {
        widths.push(
          Math.floor(Math.random() * 25) + 1  
        )
    }
    return(widths);
  }
  
  loading() {
    this.loadingInterval = setInterval(() => {
      let randomColors = [];
      for (let i = 0; i < 4; i++) {
        randomColors.push(
          this.getRandomColor()
        );
      }
      this.canvas.style.backgroundColor = `#${this.getRandomColor()}`;
      this.paint(randomColors, this.getRandomWidths());      
    }, 50);
  }
  
  ready() {
    clearInterval(this.loadingInterval);
  }
   
  paint(palette, widths) {    
    this.canvas.style.backgroundColor = `#${palette[4]}`;
    for (let i = 0; i < 4; i++) {
      this.bands[i].style.width = `${widths[i]}%`;
      this.bands[i].style.marginLeft = `${25 - widths[i]}%`;
      this.bands[i].style.backgroundColor = `#${palette[i]}`;
    }
  }
  
}
  
window._Canvas = Canvas;
  
})();

