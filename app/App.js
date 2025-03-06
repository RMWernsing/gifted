import { AuthController } from "./Auth/AuthController.js"
import { GiftsController } from "./controllers/GiftsController.js"
import { GiphysController } from "./controllers/GiphysController.js"


class App {

  authController = new AuthController()

  giftsController = new GiftsController()

  giphysController = new GiphysController()

}

window['app'] = new App()


