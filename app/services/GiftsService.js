import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {

  async getGiftsList() {
    const response = await api.get('api/gifts')
    console.log('here is our response', response.data);
    const newGift = response.data.map(gift => new Gift(gift))
    AppState.gifts = newGift

  }

}

export const giftsService = new GiftsService()