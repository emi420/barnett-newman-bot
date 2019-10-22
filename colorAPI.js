import Http from './http';
import CONFIG from './config';

class ColorAPI {
  async getRandomPalette() {
      const http = new Http();
      return await http.get([CONFIG.COLOR_API, CONFIG.COLOR_API_ENDPOINTS.PALLETTE_RANDOM].join(''));
  }
}
