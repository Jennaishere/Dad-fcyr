export class Hole {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('hole');
        this.element.addEventListener('click', this.whack.bind(this));
        this.mole = document.createElement('div');
        this.mole.classList.add('mole');
        this.element.appendChild(this.mole);
    }

    showMole() {
        this.mole.style.display = 'block';
        setTimeout(() => {
            this.mole.style.display = 'none';
        }, 1000);
    }

    whack() {
        this.mole.style.display = 'none';
    }
}
