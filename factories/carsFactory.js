import CarsController from "../controllers/carsController.js"
import CarsView from "../views/carsView.js"
import CarsService from "../services/carsService.js"
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initialize() {
    return CarsController.initialize({
      view: new CarsView(),
      service: new CarsService({ dbUrl: `${rootPath}/assets/database.json` })
    })
  }
}

export default factory