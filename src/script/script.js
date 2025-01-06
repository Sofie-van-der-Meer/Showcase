import DarkMode from "./Utils/Darkmode"
import Fetch from "./Utils/Fetch"
import Resources from "./Utils/Resources"


class Script {
    constructor() {
        this.href = window.location.href;
        this.getPage();
        this.resources = new Resources(this.page);
        
        //new Fetch('common', 'header');
        new Fetch('pages', this.page);
        //new Fetch('common', 'footer');  
        //this.darkmode = new DarkMode()
        // console.log(this.resources.transcript);
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
