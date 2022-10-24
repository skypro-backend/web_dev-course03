class Suggest {
    constructor(element, options) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }

        if (element.tagName !==  'INPUT') {
            throw new Error('Поддерживается только input');
        }
        
        this.element = element;
        this.suggestData = options.data;

        this.onInput = this.onInput.bind(this);

        this.element.addEventListener('input', this.onInput);
    }

    onInput() {
        console.log(this.suggestData.filter(item => item.startsWith(this.element.value)));
    }
}