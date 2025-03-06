import { giphyApi } from "../utils/Axios.js"

class GiphysService {
  async searchGifs(query) {
    const response = await giphyApi.get('search', {
      params: {
        q: query
      }
    })
  }

}

export const giphysService = new GiphysService()