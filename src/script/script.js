import DarkMode from "./Utils/Darkmode"
import Fetch from "./Utils/Fetch"
import Modal from "./Utils/Modal";
import Resources from "./Utils/Resources"


class Script {
    constructor() {
        // new Fetch("nav"); 
        // new Fetch("footer"); 
        this.modal = new Modal();

        this.location = window.location;
        this.loadPage();

        document.addEventListener('DOMContentLoaded', () => {
            new DarkMode();
        })
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
        // this.location.href.includes("project") ?
        // this.page = "project" :
        this.location.href.includes("contact") ?
        this.page = "contact" :
        this.page = "home";
    }
    getHash() {
        if (this.location.hash) this.hash = this.location.hash;
    }
}

const script = new Script();

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(document.body.classList.add('loaded'), 20000);
    // window.scrollTo(0, 0);
})