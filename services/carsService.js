export default class CarsService {
    #database = []
    #dbUrl = ''
    constructor({ dbUrl }) {
      this.#dbUrl = dbUrl
    }
    
    async load() {
      const response = await fetch(this.#dbUrl)
      this.#database = await response.json()
    }
  
    getCars() {
      return this.#database
    }
  }