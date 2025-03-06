import { giphysService } from "../services/GiphysService.js";
import { Pop } from "../utils/Pop.js";

export class GiphysController {
  constructor() {
    console.log('Giphy controller is working');

  }

  async searchGifs(query) {
    try {
      await giphysService.searchGifs(query)
    } catch (error) {
      Pop.error(error, 'could not search')
    }
  }
}