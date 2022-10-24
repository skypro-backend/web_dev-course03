class InlineEdit {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.onOriginElementClick = this.onOriginElementClick.bind(this);

        this.element.addEventListener('click', this.onOriginElementClick);
    }

    onOriginElementClick() {
        const currentValue = this.element.textContent;

        this.element.innerHTML = '';

        this.element.appendChild(templateEngine(
            InlineEdit.formTemplate(currentValue)
        ));

        this.element.removeEventListener('click', this.onOriginElementClick);
    }
}

InlineEdit.formTemplate = (text) => {
    return {
        tag: 'form',
        content: [
            {
                tag: 'input',
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