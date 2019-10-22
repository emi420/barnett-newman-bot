let colors;
const getRandomPaletteHandler = (response) => {
  colors = response[0].colors;
}



const loadDynamicScript = (url, id, callback) => {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = url; 
    script.id = id;
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

class Http {  
  
  get (url) {    
    
    const promise = new Promise((resolve, reject) => {
      loadDynamicScript(url, 'color', () => {
          resolve(colors);        
      });
    });
    return promise;
  }
}

export default Http;
