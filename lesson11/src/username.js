class Username {
    constructor(element) {
        if(!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;
        this.guestCheckbox = this.element.querySelector('.username__as-guest-control');
        this.loginInput = this.element.querySelector('.username__login-control');

        this.guestCheckbox.addEventListener('change', this.onCheckboxChange);
    }

    getValue() {
        return this.guestCheckbox.checked ? 'Гость' : this.loginInput.value;
    }

    onCheckboxChange() {
        if (this.guestCheckbox.checked) {
            this.loginInput.setAttribute('disabled', 'disabled');
        } else {
            this.loginInput.setAttribute('disabled');
        }
    }
}