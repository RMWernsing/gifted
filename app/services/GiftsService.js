import { api } from "../utils/Axios.js"

class GiftsService {
  async getGiftsList() {
    const response = await api.get('api/gifts')
    console.log('here is our response', response.data);

  }

}

export const giftsService = new GiftsService()