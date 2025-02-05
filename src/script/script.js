import DarkMode from "./Utils/Darkmode.js";
import Modal from "./Utils/Modal.js";
import Resources from "./Utils/Resources.js";


class Script {
    constructor() {
        this.modal = new Modal();

        this.location = window.location;
        this.loadPage();

        document.addEventListener('DOMContentLoaded', () => {
            new DarkMode();
        })
        console.log('Hey, I noticed you\'re checking out my code! Feel free to explore it further on my GitHub: https://github.com/Sofie-van-der-Meer/Showcase');
    }
    loadPage() {
        this.getPage();
        this.getHash();
        this.resources = new Resources(this.page, this.hash);
        this.resources.setInnerHTML();
    }
    getPage() {
        this.location.href.includes("about") ?
        this.page = "about" :
        this.location.href.includes("project") ?
        this.page = "projects" :
        this.location.href.includes("contact") ?
        this.page = "contact" :
        this.page = "home";
    }
    getHash() {
        if (this.location.hash) this.hash = this.location.hash;
    }
}

const script = new Script();

window.onload = function() {
    document.body.classList.add('loaded');
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}