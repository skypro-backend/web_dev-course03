class Tooltip {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
        
        this.element = element;

        this.renderTooltipPopup();

        this.onMouseOver = this.onMouseOver.bind(this);

        this.element.addEventListener('mouseenter', this.onMouseOver);
    }

    onMouseOver() {
        this.showTooltip();

        this.timer = setTimeout(() => {
            this.hideTooltip();
        }, 5000);
    }

    showTooltip() {
        if (this.timer) {
            clearTimeout(this.timer);

            this.timer  =  undefined;
        }

        const coords = this.element.getBoundingClientRect();

        const { top, right, height } = coords;

        this.tooltip.classList.remove('tooltip__popup_hidden');

        this.tooltip.style.top =
            top + height / 2 - this.tooltip.offsetHeight / 2 + window.scrollY  + 'px';
        this.tooltip.style.left = right + 3 + window.scrollX + 'px';

        
    }

    hideTooltip() {
        this.tooltip.classList.add('tooltip__popup_hidden');
    }

    renderTooltipPopup(){
        const message = this.element.dataset.tooltip;
        
        this.tooltip = templateEngine(
            Tooltip.tooltipPopupTemplate(message, true),
        );

        document.body.appendChild(this.tooltip);
    }

}

Tooltip.tooltipPopupTemplate = (message, hidden) => ({
    tag: 'div',
    cls: ['tooltip__popup', hidden ? 'tooltip__popup_hidden': undefined],
    content: message,
});
