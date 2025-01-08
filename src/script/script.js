import DarkMode from "./Utils/Darkmode"
import Fetch from "./Utils/Fetch"
import Modal from "./Utils/Modal";
import Resources from "./Utils/Resources"


class Script {
    constructor() {
        // new Fetch("nav"); 
        // new Fetch("footer"); 
        this.modal = new Modal();

        this.href = window.location.href;
        this.getPage();
        this.resources = new Resources(this.page);
        this.resources.setInnerHTML();

        document.addEventListener('DOMContentLoaded', () => {
            const darkMode = new DarkMode();
            // darkMode.setMode();
        })

    }
    getPage() {
        this.href.includes("about") ?
        this.page = "about" :
        this.href.includes("projects") ?
        this.page = "projects" :
        this.href.includes("contact") ?
        this.page = "contact" :
        this.page = "home";
    }
}

const script = new Script()
