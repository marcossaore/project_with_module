export default class CardsController {
    #view
    #service
    constructor({ view, service }) {
      this.#view = view
      this.#service = service
    }
  
    async init() {
        await this.#service.load()
        this.#view.renderCars(this.#service.getCars())
    }
  
  
    static async initialize(deps) {
      const controller = new CardsController(deps)
      return controller.init()
    }
  }