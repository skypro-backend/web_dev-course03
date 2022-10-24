class InlineEdit {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.onOriginElementClick = this.onOriginElementClick.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.element.addEventListener('click', this.onOriginElementClick);
    }

    onOriginElementClick() {
        const currentValue = this.element.textContent;

        this.element.innerHTML = '';

        this.element.appendChild(templateEngine(
            InlineEdit.formTemplate(currentValue)
        ));

        this.element.removeEventListener('click', this.onOriginElementClick);

        this.element.addEventListener('submit', this.onFormSubmit);
    }

    onFormSubmit(event) {
        event.preventDefault();

        console.log('submit');

        const value = this.element.querySelector('.inline-edit___new-value').value;
        this.element.innerHTML = '';
        this.element.textContent = value;

        this.element.addEventListener('click', this.onOriginElementClick);
        this.element.removeEventListener('submit', this.onFormSubmit);
    }
}

InlineEdit.formTemplate = (text) => {
    return {
        tag: 'form',
        content: [
            {
                tag: 'input',
                cls: 'inline-edit___new-value',
                attrs: {
                    value: text,
                },
            },
            {
                tag: 'button',
                content: 'Отправить',
            },
            {
                tag: 'button',
                attrs: {
                    type: 'button',
                },
                cls: 'inline-edit__cancel',
                content: 'Отменить',
            }
        ]
    }
}