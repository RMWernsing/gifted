import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
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

  async addGift() {
    try {
      event.preventDefault()
      console.log('submitting')
      const giftForm = event.target
      const rawFormData = getFormData(giftForm)
      console.log('Form', rawFormData)
      await giftsService.addGift(rawFormData)
    } catch (error) {
      console.error('COULD NOT ADD GIFT', error);
      Pop.error(error, 'Could not add gift')
    }
  }

}