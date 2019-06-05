const textSize = {
    elements: {
        body: document.body,
        up: document.querySelector('.js-text-up'),
        down: document.querySelector('.js-text-down'),
    },
    currentSize: 2,
    sizes: [
        'text-smaller',
        'text-small',
        'text-medium',
        'text-large',
        'text-huge'
    ],
    init: function () {
        this.elements.up.addEventListener('click', this.sizeUp.bind(this));
        this.elements.down.addEventListener('click', this.sizeDown.bind(this));
    },
    updateText: function () {
        this.sizes.forEach((el, index) => {
            this.elements.body.classList.toggle(this.sizes[index], this.currentSize == index);
        });
    },
    sizeUp: function () {
        this.currentSize = Math.min(this.sizes.length - 1, ++this.currentSize);
        this.updateText();
    },
    sizeDown: function () {
        this.currentSize = Math.max(0, --this.currentSize);
        this.updateText();
    }
};

textSize.init();