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
        const filteredData = this.suggestData.filter(
            item => item.startsWith(this.element.value)
        );

        if (filteredData.length) {
            this.renderSuggest(filteredData);
        } else {
            this.removeSuggest();
        }
    }

    removeSuggest() {
        if (!this.suggest) {
            return;
        }

        this.suggest.remove();
        this.suggest = undefined;
    }

    clearSuggest() {
        if (!this.suggest) {
            return;
        }
        
        this.suggest.innerHTML = '';
    }

    renderSuggest(data) {  
        this.clearSuggest();
        this.suggest = templateEngine(
            Suggest.suggestTemplate(data)
        );

        document.body.appendChild(this.suggest);

        const coords = this.element.getBoundingClientRect();

        const { bottom, left } = coords;

        this.suggest.style.top = bottom + 2 + 'px';
        this.suggest.style.left = left + 'px';
    }
}

Suggest.suggestTemplate = (suggests) => ({
    tag: 'div',
    cls: 'suggest__suggest-popup',
    content: suggests.map(suggest => ({
        tag: 'div',
        cls: 'suggest__suggest-popup-item',
        content: suggest,
    })),
});