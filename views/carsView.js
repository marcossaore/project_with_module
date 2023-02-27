
export default class CardView {
    #carContent = document.getElementById('car_content')
  
    renderCars(cars) {
        this.#carContent.innerHTML = '';
        cars.forEach(car => {
            const card = document.createElement('div')
            card.classList.add('card')
            this.#carContent.innerHTML += `
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">${car.id}</p>`
        })
    }
}