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
        // console.log(this.transcript || "failed");
    }
    
    setInnerHTML() {
        try {
            const headerElem = document.getElementById('headername');
            const headerText = this.transcript['headername'];

            if (headerElem && headerText) {
                headerElem.innerHTML = headerText;
            }

            const sections = this.transcript.sections;
            
            for (let i = 0; i < sections.length; i++) { 
                const headSection = sections[i];
                const sectionId = document.getElementById(headSection.id);
                
                if (sectionId.children.length) {
                    const arrResources = Object.entries(headSection);
                    
                    this.loopChilderen(sectionId, arrResources);
                }
            }

        } catch (err) {
            console.error(err.stack);
        }
    }
    loopChilderen(parent, arrResources) {
        
        for (const child of parent.children) {
            let childName;
            const childClassName = child.classList[0];

            if (childClassName == 'card-group') {
                this.loopCardGroup(child, arrResources)  
            }

            if (   childClassName == 'card-content' 
                || childClassName == 'card' 
                || child.children.length ) {
                this.loopChilderen(child, arrResources) 
            }

            if (childClassName.startsWith('card-')) {
                childName = childClassName.slice(5) 
            }

            if (childName) {
                this.setInnerHTMLOfChild(parent, childClassName, arrResources, childName);
            } 
        }
    }
    loopCardGroup(parent, arrResources) {

        const children = parent.getElementsByClassName('card');
        const subArrResources = [];

        arrResources.forEach(element => {

            if (element[0] == 'projects') {
                element[1].forEach(element => subArrResources.push(Object.entries(element)));
            }
        })

        for (let i = 0; i < children.length; i++) {
            this.loopChilderen(children[i], subArrResources[i]);
        }
    }
    setInnerHTMLOfChild(parent, childClassName, arrResources, childName) {
        let childHtml = parent.getElementsByClassName(childClassName)[0];
        let arrResourcesHasTextBtn = false;

        arrResources.forEach(element => {

            if (element[0] == 'textBtn') arrResourcesHasTextBtn = true;

            if ((childName == element[0]) && (childName == 'img')) 
                { childHtml.src = element[1] };

            if ((childName == element[0]) && (childName == 'urlBtn')) 
                { childHtml.href = element[1] };

            if ((childName == element[0] && element[0] !== 'urlBtn') 
                || (childName == 'urlBtn' && element[0] == 'textBtn')) 
                { childHtml.innerHTML = element[1] };

        })
        if (!arrResourcesHasTextBtn && (parent.classList[0] == 'card-btn' && childName == 'urlBtn') ) {
            childHtml.innerHTML = 'Get more info'; 
        }
    }
}