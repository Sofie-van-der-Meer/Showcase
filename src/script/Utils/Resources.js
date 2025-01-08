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

    setInnerHTML() {
        try {
            const headerElem = document.getElementById('headername');
            const headerText = this.transcript['headername'];
            console.log(headerText);

            this.transcript.sections.forEach(section => {
                const sectionId = document.getElementById(section.id);
                console.log(sectionId);

                if (sectionId.children.length) {
                    this.getChilderen(section.id, sectionId);
                    console.log('---------------------------------------');
                }
            });

            if (headerElem && headerText) {
                headerElem.innerHTML = headerText;
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    getChilderen(sectionName, parent) { // (home_welkom, <section ...>)
        for (const child of parent.children) {
            const childName = child.classList[0];
            console.log(childName); // card-img
            if (childName.startsWith('card-')) {
                const parentElem = document.getElementById(sectionName)
                console.log(parentElem);
                const childElem = parentElem.getElementsByClassName(childName);
                console.log(childElem[0]);
                // console.log(document.getElementById(sectionName).getElementsByClassName(childName));
                // console.log(this.transcript[this.arg][sectionName][childName.slice(5)]);
                // console.log(childName.slice(5));
            }
            console.log(childName);
            
            if (child.children.length) {
                this.getChilderen(sectionName, child);
            }
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