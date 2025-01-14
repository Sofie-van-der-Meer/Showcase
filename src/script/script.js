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
        this.getPage();
        this.getHash();
        this.resources = new Resources(this.page, this.hash);
        this.resources.setInnerHTML();

        document.addEventListener('DOMContentLoaded', () => {
            const darkMode = new DarkMode();
            // darkMode.setMode();
        })

    }
    getPage() {
        this.location.href.includes("about") ?
        this.page = "about" :
        this.location.href.includes("projects") ?
        this.page = "projects" :
        this.location.href.includes("project") ?
        this.page = "project" :
        this.location.href.includes("contact") ?
        this.page = "contact" :
        this.page = "home";
    }
    getHash() {
        if (this.location.hash) this.hash = this.location.hash;
    }
}

const script = new Script()
