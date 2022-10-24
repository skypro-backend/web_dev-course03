class Username {
    constructor(element) {
        if(!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент');
        }
    }
}