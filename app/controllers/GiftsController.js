import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    AppState.on('identity', this.getGiftList)
    AppState.on('gifts', this.drawGiftCard)

    console.log("controller is working");
  }

  drawGiftCard() {
    const gifts = AppState.gifts
    let giftsContent = ''
    gifts.forEach(gift => giftsContent += gift.giftTemplate)
    const giftCardElem = document.getElementById('giftList')
    giftCardElem.innerHTML = giftsContent
  }

  async getGiftList() {
    try {
      await giftsService.getGiftsList()
    } catch (error) {
      console.error('COULD NOT GET GIFT LIST', error);
      Pop.error(error, 'Could not get Gift List')

    }
  }

  async openGift(giftsId) {
    try {
      await giftsService.openGifts(giftsId)
    } catch (error) {
      console.error('COULD NOT OPEN GIFT', error);
      Pop.error(error, 'Could not open gift')
    }
  }


}