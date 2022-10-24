class LikeButton {
    constructor(element, liked = false) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;

        this.liked = liked;

        this.render();
    }

    render() {
        this.element.textContent = this.liked ? '❤️' : '💔';
    }
}