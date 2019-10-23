(() => {
  
let response;
const _JSONPCallback = (res) => {
  response = res;
}

const loadDynamicScript = async (url, id, callback) => {
  const existingScript = document.getElementById(id);
    const res = await new Promise((resolve, reject) => {
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = url; 
      script.id = id;
      document.body.appendChild(script);
      script.onload = () => {
        document.body.removeChild(script);
        resolve();
      };
    }
  });
  return response;
};

class Http {  
  get (url) {  
    return loadDynamicScript(url);
  }
}
  
window._Http = Http;
window._JSONPCallback = _JSONPCallback;

})();

