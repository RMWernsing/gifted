import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    AppState.on('identity', this.getGiftList)
    console.log("controller is working");
  }

  async getGiftList() {
    try {
      await giftsService.getGiftsList()
    } catch (error) {
      console.error('COULD NOT GET GIFT LIST', error);
      Pop.error(error, 'Could not get Gift List')

    }
  }

}