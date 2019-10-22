(() => {
  
const Http = window._Http;
const CONFIG = window._CONFIG;

class ColorAPI {
  getRandomPalette() {
      const http = new Http();
      const result = http.get([CONFIG.COLOR_API, CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM].join(''));
      return result;
  }
}

window._ColorAPI = ColorAPI;
  
})();
