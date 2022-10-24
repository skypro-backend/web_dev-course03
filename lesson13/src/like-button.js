class LikeButton {
    constructor(element, liked = false) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;

        this.liked = liked;

        this.onClick = this.onClick.bind(this);
        this.onLikeToggle = this.onLikeToggle.bind(this);
        this.onRequestFinish = this.onRequestFinish.bind(this);

        this.render();

        this.element.addEventListener('click', this.onClick);
    }

    render() {
        this.element.textContent = this.liked ? '❤️' : '💔';
    }

    onClick() {
        this.element.setAttribute('disabled', 'disabled');
        console.log('click ♥');
        request({
            url: this.liked ? 'dislike.json' : 'like.json',
            onSuccess: this.onLikeToggle,
            onError: this.onRequestFinish
        })
    }

    onLikeToggle() {
        this.liked = !this.liked;

        this.render();
        this.onRequestFinish();
    }

    onRequestFinish() {
        this.element.removeAttribute('disabled');
    }
}