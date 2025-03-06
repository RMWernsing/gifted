import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {
  async addGift(formData) {
    const response = await api.post('api/gifts', formData)
    console.log('new gift', response.data)
    const newGift = new Gift(response.data)
    const gifts = AppState.gifts
    gifts.unshift(newGift)
  }
  async openGifts(giftsId) {
    const openGift = AppState.gifts.find(gift => gift.id == giftsId)
    openGift.opened = true
    const response = await api.put(`api/gifts/${giftsId}`, openGift)
    console.log('heres your stuff', response.data)
    const foundIndex = AppState.gifts.findIndex(gift => gift.id == giftsId)
    AppState.gifts.splice(foundIndex, 1, new Gift(response.data))
    AppState.emit('gifts')
  }

  async getGiftsList() {
    const response = await api.get('api/gifts')
    console.log('here is our response', response.data);
    const newGift = response.data.map(gift => new Gift(gift))
    AppState.gifts = newGift
  }

}

export const giftsService = new GiftsService()