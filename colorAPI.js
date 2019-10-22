() => {
  
const Http = window._Http;
const CONFIG = window._CONFIG;

class ColorAPI {
  async getRandomPalette() {
      const http = new Http();
      return await http.get([CONFIG.COLOR_API, CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM].join(''));
  }
}

window._ColorAPI = ColorAPI;
  
) ();
