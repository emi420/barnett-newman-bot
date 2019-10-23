(() => {


class Canvas {
  constructor(canvasElement, copyElement) {
    this.canvas = canvasElement;
    this.copy = copyElement;
    this.copyLink = this.copy.getElementsByClassName("copyLink")[0];
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
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
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
    const backgroundNumber = this.getRandomNumber(4);
    
    this.canvas.style.backgroundColor = `#${palette[backgroundNumber]}`;
    palette.splice(backgroundNumber, 1);
    
    for (let i = 0; i < 4; i++) {
      const n = this.getRandomNumber(4);
      
      this.bands[i].style.width = `${widths[i]}%`;
      this.bands[i].style.marginLeft = `${25 - widths[i]}%`;
      this.bands[i].style.backgroundColor = `#${palette[n]}`;        
    }
  }
  
  setCopy(copy) {
    this.copy.style.display = 'block';
    this.copyLink.href = copy.url;
    this.copyLink.innerHTML = copy.title;
  }
  
}
  
window._Canvas = Canvas;
  
})();

