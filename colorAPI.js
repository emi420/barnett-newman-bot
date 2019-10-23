(() => {
  
const Http = window._Http;
const CONFIG = window._CONFIG;

class ColorAPI {
  async getRandomPalette() {
      const http = new Http();
      const result = await http.get([
        CONFIG.COLOR_API, 
        CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM
      ].join(''));
      const palette = result[0];
      return {
        colors: palette.colors,
        copy: {
          url: palette.url,
          title: palette.title, 
        }
      }
  }
}

window._ColorAPI = ColorAPI;
  
})();
