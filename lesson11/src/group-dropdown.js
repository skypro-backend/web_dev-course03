class GroupDropdown {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;
        this.dropdown = this.element.querySelector('.group-dropdown__dropdown');
        this.other = this.element.querySelector('.group-dropdown__other');
        this.input = this.element.querySelector('.group-dropdown__other-input');

        this.onDropdownChange = this.onDropdownChange.bind(this);

        this.dropdown.addEventListener('change', this.onDropdownChange);
    }

    onDropdownChange() {
        if (this.dropdown.value === '@@OTHER@@') {
            this.other.classList.remove('group-dropdown__other_hidden');
        } else {
            this.other.classList.add('group-dropdown__other_hidden');
        }
    }
}