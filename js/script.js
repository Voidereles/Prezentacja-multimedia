const textSize = {
    elements: {
        body: document.body,
        up: document.querySelector('.js-text-up'),
        down: document.querySelector('.js-text-down'),
    },
    currentSize: 3,
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

let checker = true;

function contrastChange() {

    if (checker == true) {
        $(".essenceContainer").addClass("essenceContainer-contrast")
        $(".bgText").addClass("bgText-contrast")
        $("#contrastButton").addClass("is-active")
        checker = false;
    } else {
        $(".essenceContainer").removeClass("essenceContainer-contrast")
        $(".bgText").removeClass("bgText-contrast")
        $("#contrastButton").removeClass("is-active")
        checker = true;
    }


}

const documentHeight = screen.height;
const windowHeight = documentHeight / ($('.section').length);
// let numberOfSections = documentHeight / windowHeight;
const documentWidth = screen.width;



function showSidebar() {
    if (documentWidth > 980) {
        $("#menu").css({
            'transform': ' translateX(120px)'
        });
    }

}

function hideSidebar() {
    if (documentWidth > 980) {
        $("#menu").css({
            'transform': ' translateX(0px)'
        });
        $(".noVideoSection").css({
            'transform': ' translateX(0px)',
            'width': '100vw'
        });
    }
}

function showMore(id_To_Show) {
    $(id_To_Show).removeClass("hidden");
}

const music = document.getElementById("music");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

playButton.onclick = function () {
    music.play();
    // playButton.removeClass("visible");
    // playButton.addClass("hidden");
    // pauseButton.removeClass("hidden");
    // pauseButton.addClass("visible");
    playButton.style.display = "none";
    pause.style.display = "initial";
}

pauseButton.onclick = function () {
    music.pause();
    playButton.style.display = "initial";
    pause.style.display = "none";
}