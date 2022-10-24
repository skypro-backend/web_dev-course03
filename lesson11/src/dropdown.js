const OTHER_VALUE = '@@OTHER';

/**
 * options {
 *  menuItems: Array
 *  title: String
 *  otherInputTitle: String
 *  otherMenuItemTitle: String
 * }
 */
class GroupDropdown {
    constructor(element, options) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.onDropdownChange = this.onDropdownChange.bind(this);

        this.dropdown.addEventListener('change', this.onDropdownChange);
    }

    onDropdownChange() {
        if (this.dropdown.value === OTHER_VALUE) {
            this.other.classList.remove('group-dropdown__other_hidden');
        } else {
            this.other.classList.add('group-dropdown__other_hidden');
        }
    }

    getValue() {
        return this.dropdown.value === OTHER_VALUE ? this.input.value : this.dropdown.value;
    }
}