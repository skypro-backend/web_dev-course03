const OTHER_VALUE = '@@OTHER';

/**
 * options {
 *  menuItems: Array
 *  title: String
 *  otherInputTitle: String
 *  otherMenuItemTitle: String
 * }
 */
class Dropdown {
    constructor(element, options) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.render(options);

        this.onDropdownChange = this.onDropdownChange.bind(this);

        this.dropdown.addEventListener('change', this.onDropdownChange);
    }

    render(options) {
        const id = Math.round(Math.random(1000000));
        this.element.appendChild(templateEngine(Dropdown.template(options, id)));
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

Dropdown.template = (options, id) => ({
    tag: 'div',
    cls: 'dropdown',
    content: [
        {
            tag: 'div',
            cls: 'group-dropdown__select',
            content: [
                {
                    tag: 'label',
                    attrs: {
                        for: 'dropdown-select-' + id,
                    },
                    content: options.title,
                },
                {
                    tag: 'select',
                    attrs: {
                        id: 'dropdown-select-' + id,
                        cls: 'group-dropdown__dropdown',
                    },
                    content: options.menuItems.map(menuItem => ({
                        tag: 'option',
                        value: menuItem.value,
                        content: menuItem.title,
                    })).concat({
                        tag: 'option',
                        value: OTHER_VALUE,
                        content: options.otherMenuItemTitle,
                    }),
                }
            ]
        },
        {
            tag: 'div',
            cls: ['group-dropdown__other', 'group-dropdown__other_hidden'],
            content: [
                {
                    tag: 'label',
                    attrs: {
                        for: 'dropdown-input-' + id,
                    },
                    content: options.otherInputTitle,
                },
                {
                    tag: 'input',
                    attrs: {
                        id: 'dropdown-input-' + id,
                    },
                    cls: 'group-dropdown__other-input',
                }
            ]
        }
    ]
});