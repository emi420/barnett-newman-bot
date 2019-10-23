(() => {

class Canvas {
  constructor(canvasElement, copyElement) {
    this.canvas = canvasElement;
    this.copy = copyElement;
    this.copyLink = this.copy.getElementsByClassName("copyLink");
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
    const backgroundNumber = Math.floor(Math.random() * 4) + 1;
    this.canvas.style.backgroundColor = `#${palette[backgroundNumber]}`;
    palette.splice(backgroundNumber, 1);
    for (let i = 0; i < 4; i++) {
      this.bands[i].style.width = `${widths[i]}%`;
      this.bands[i].style.marginLeft = `${25 - widths[i]}%`;
      this.bands[i].style.backgroundColor = `#${palette[i]}`;        
    }
  }
  
  setCopy(copy) {
    this.copy.style.display = 'block';
    this.copyLink.href = copy;
    this.copyLink.innerHTML = copy;
  }
  
}
  
window._Canvas = Canvas;
  
})();

