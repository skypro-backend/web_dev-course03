class Username {
    constructor(element) {
        if(!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;
        this.guestCheckbox = this.element.querySelector('.username__as-guest-control');
        this.loginInput = this.element.querySelector('.username__login-control');
    }

    getValue() {
        return this.guestCheckbox.checked ? 'Гость' : this.loginInput.value;
    }
}