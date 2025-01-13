import sources_ENG from "./sources_ENG";
import sources_NL from "./sources_NL";

export default class Resources {
    constructor(pageName, hashName) {
        this.pageName = pageName;
        this.hashName = hashName;
        (this.hashName == 'nl' ) ? 
        this.sources = sources_NL  :
        this.sources = sources_ENG ;
        
        if (this.sources && this.sources[this.pageName]) {
            this.transcript = this.sources[this.pageName]
        }
        if (this.transcript['hashProjects']) {
            const transcript = this.transcript['hashProjects'];
            const project = this.hashName.slice(1);
            this.transcript = transcript[project];
        }

        console.log(this.transcript || "failed");
    }
    
    setInnerHTML() {
        // try {
            const headerElem = document.getElementById('headername');
            const headerText = this.transcript['headername'];
            if (headerElem && headerText) {
                headerElem.innerHTML = headerText;
            }

            const sections = this.transcript.sections;
            
            for (let i = 0; i < sections.length; i++) { 
                const headSection = sections[i];
                const sectionId = document.getElementById(headSection.id);
                // console.log(sectionId);
                if (sectionId.children.length) {
                    const arrResources = Object.entries(headSection);
                    
                    this.loopChilderen(sectionId, arrResources);
                }
            }

        // } catch (err) {
        //     console.error(err.stack);
        // }
    }
    loopChilderen(parent, arrResources) {
        
        for (const child of parent.children) {
            let childName;
            const childClassName = child.classList[0];

            if (!childClassName) {
                continue;
            }
            if (parent == document.getElementById('Project_Content') ) {
                console.log(arrResources);
                this.loopCardGroup(child, arrResources);
            }

            if (childClassName == 'card-group') {
                this.loopCardGroup(child, arrResources)  
            }

            if (   childClassName == 'card-content' 
                || childClassName == 'card' 
                || child.children.length ) {
                this.loopChilderen(child, arrResources) 
            }

            if (childClassName.startsWith('card-')
            || childClassName.startsWith('sect-')) {
                childName = childClassName.slice(5) 
            }

            if (childName) {
                this.setInnerHTMLOfChild(parent, childClassName, arrResources, childName);
            } 
        }
    }
    loopCardGroup(parent, arrResources) {
        console.log(arrResources);

        const children = parent.getElementsByClassName('card');
        const subArrResources = [];

        arrResources.forEach(element => {

            if (element[0] == 'projects') {
                element[1].forEach(element => subArrResources.push(Object.entries(element)));
                // console.log(subArrResources);
            } else if (typeof element[1] == 'object') {
                subArrResources.push(Object.entries(element[1]).map(entry => [entry[0], entry[1]]));
            }
        })
        // console.log(subArrResources);

        for (let i = 0; i < children.length; i++) {
            this.loopChilderen(children[i], subArrResources[i]);
        }
    }
    setInnerHTMLOfChild(parent, childClassName, arrResources, childName) {
        let childHtml = parent.getElementsByClassName(childClassName)[0];
        let arrResourcesHasTextBtn = false;
        if (!arrResources) {
            return;
        }

        for (let i = 0; i < arrResources.length; i++) {
            const resourceKey = arrResources[i][0];
            const resourceValue = arrResources[i][1];

            switch (resourceKey) {
                case 'textBtn':
                    if (childName == 'urlBtn') childHtml.innerHTML = resourceValue;    
                    break;

                case 'textBtn_1':
                    if (childName == 'urlBtn_1') childHtml.innerHTML = resourceValue;    
                    break;

                case 'textBtn_2':
                    if (childName == 'urlBtn_2') childHtml.innerHTML = resourceValue;
                    break;
            
                default:
                    break;
            }

            if (resourceKey.startsWith('textBtn')) {
                arrResourcesHasTextBtn = true;
            };

            if (childName !== resourceKey) continue;

            switch (childName) {
                case 'img_01':
                case 'img_02':
                case 'img':
                    childHtml.src = resourceValue;
                    break;
                case 'imgList':
                    for (let i = 0; i < resourceValue.length; i++) {
                        const href = resourceValue[i];
                        console.log(href);
                        const img = childHtml.appendChild(document.createElement("img"))
                        img.classList.add('img-small')
                        img.src = href;
                    }
                    break;

                case 'previous':
                case 'next':
                    childHtml.innerHTML = resourceKey;            
                case 'urlBtn':
                case 'urlBtn_1':
                case 'urlBtn_2':
                    childHtml.href = resourceValue;
                    break;
            
                case 'languages':
                case 'library':
                case 'introduction':
                case 'challenges':
                case 'result':
                    if (childHtml.children[0]){
                        childHtml.children[0].innerHTML = resourceKey + ': ';
                    }
                    //    :
                    //    childHtml.innerHTML = `${resourceKey}: <br> ${resourceValue.join(', ')}`; 
                    
                    (typeof resourceValue == 'object') ?
                        childHtml.innerHTML += resourceValue.join(', ') :
                        childHtml.innerHTML += resourceValue;
                    break;

                case 'langratio':
                    childHtml.innerHTML =  resourceValue.join('% - ') + '%';
                    break;
            
                default:
                    childHtml.innerHTML = resourceValue;
                    break;
            }
        }

        if (!arrResourcesHasTextBtn && (parent.classList[0] == 'card-btn' && childName == 'urlBtn') ) {
            childHtml.innerHTML = 'Get more info'; 
        }
    }
}