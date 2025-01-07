import sources_ENG from "./sources_ENG";
import sources_NL from "./sources_NL";

export default class Resources {
    constructor(arg) {
        this.arg = arg;
        (window.location.href.includes("#nl") ) ? 
        this.sources = sources_NL  :
        this.sources = sources_ENG ;

        if (this.sources && this.sources[this.arg]) {
            this.transcript = this.sources[this.arg]
        }
        console.log(this.transcript || "failed");
    }

    setInnerHTML(idName) {
        try {
            const htmlElement = document.getElementById(idName);
            const text = this.transcript[idName];

            if (htmlElement && text) {
                htmlElement.innerHTML = text;
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

// object key == idNaam => innertext = value

// // https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON

// async function populate() {
//     const requestURL = "../src/script/Utils/text_ENG.json";
//     const request = new Request(requestURL);
//     const response = await fetch(request);
//     const text = await response.json();
    
//     const cardlist = document.getElementsByClassName('card-title');
//     for (let i = 0; i < cardlist.length; i++) {
//         const card = cardlist[i];
//         card.textContent = text.projects[i].title
        
//     }
// }
// populate()