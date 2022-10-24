class InlineEdit {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.onOriginElementClick = this.onOriginElementClick.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormClick = this.onFormClick.bind(this);

        this.element.addEventListener('click', this.onOriginElementClick);
    }

    onOriginElementClick() {
        this.currentValue = this.element.textContent;

        this.element.innerHTML = '';

        this.element.appendChild(templateEngine(
            InlineEdit.formTemplate(this.currentValue)
        ));

        this.element.removeEventListener('click', this.onOriginElementClick);
        this.element.addEventListener('submit', this.onFormSubmit);
        setTimeout(() => this.element.addEventListener('click', this.onFormClick), 0);
    }

    onFormSubmit(event) {
        event.preventDefault();

        console.log('submit');

        const value = this.element.querySelector('.inline-edit___new-value').value;
        this.finishEdit(value);
    }

    onFormClick(event) {
        const target = event.target;

        if(!target.classList.contains('inline-edit__cancel')) {
            return;
        }

        this.finishEdit(this.currentValue);
    }

    finishEdit(value) {
        this.element.innerHTML = '';
        this.element.textContent = value;

        this.element.removeEventListener('click', this.onFormClick);
        setTimeout(() => this.element.addEventListener('click', this.onOriginElementClick), 0);
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