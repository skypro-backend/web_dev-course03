class LikeButton {
    constructor(element, liked = false) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;

        this.liked = liked;

        this.onClick = this.onClick.bind(this);

        this.render();

        this.element.addEventListener('click', this.onClick);
    }

    render() {
        this.element.textContent = this.liked ? '❤️' : '💔';
    }

    onClick() {
        console.log('click ♥');
    }
}