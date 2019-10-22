(() => {
  
let response;
const getRandomPaletteHandler = (res) => {
  response = res;
}

const loadDynamicScript = async (url, id, callback) => {
  const existingScript = document.getElementById(id);
  
  colors = await new Promise((resolve, reject) => {

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = url; 
      script.id = id;
      document.body.appendChild(script);

      script.onload = () => {
        resolve(response);
      };
    }
  });
  console.log('response', response);
  return response;
};

class Http {  
  
  async get (url) {  
    console.log('loadDynamicScript');
    return loadDynamicScript(url);
  }
}
  
  window._Http = Http;
  window._getRandomPaletteHandler = getRandomPaletteHandler;

})();

