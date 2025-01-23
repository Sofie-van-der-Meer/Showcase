import DutchMode from "./Dutchmode";
import sources_ENG from "./sources_ENG";
import sources_NL from "./sources_NL";

export default class Resources {
    constructor(pageName, hashName) {
        this.pageName = pageName;
        this.hashName = hashName;
        this.isPublished = true;
        this.dutchMode = new DutchMode();
        this.transcript;

        this.setTranscript();
    }

    // SETTERS    
    setTranscript() {
        try {
            this.dutchMode.setLangAttr();
            (sessionStorage.getItem('dutch-mode') == 'true' ) ? 
            this.sources = sources_NL  :
            this.sources = sources_ENG ;
            
            if (this.sources && this.sources[this.pageName]) {
                this.transcript = this.sources[this.pageName]
            }
        } catch (error) {
            console.error('failed to load transcript');
        }
    }
    setInnerHTML() {
        try {
            this.setPageNameInHeader();

            let sections = this.getSections();
            console.log(sections);
            this.loopOverSections(sections);

            this.dutchMode.setLangAttr();

        } catch (err) {
            console.error(err.stack);
        }
    }

    setPageNameInHeader() {
        const headerElem = document.getElementById('headername');
        const headerText = this.transcript['headername'];
        if (headerElem && headerText) {
            headerElem.textContent = headerText;
        }
    }
    setMessageNotPublished(sections) {
        const sect2 = document.getElementById(sections[1].id);
        const text = sections[0]['notPublished'];
        const message = document.createElement('h5');

        message.classList.add('message_notPublished');
        message.textContent = text;
        
        sect2.classList.add('flex');
        sect2.getElementsByClassName('sect-group')[0].classList.add('hidden');
        sect2.appendChild(message);
    }
    setProperty(element, property, value) {
        const propertyHandlers = {
            'alt':          (elem) => { if (elem instanceof HTMLImageElement) elem.alt = value; },
            'textContent':  (elem) => { if (elem instanceof HTMLElement) elem.textContent = value; },
            'href':         (elem) => { if (elem instanceof HTMLAnchorElement) elem.href = value; },
        }

        if (propertyHandlers[property]) {
           propertyHandlers[property](element);
        } else {
            console.error('Property ' + property + ' is not applicable for this element');
        }
    }
    setSpanInElement(english, dutch, element) {
        element.innerHTML = `<span lang="en">${english} </span><span lang="nl">${dutch} </span>`
    }
    // GETTERS
    getSections() {
        if ( !this.hashName ) return this.transcript.sections;

        const transcriptProjects = this.transcript.sections[1]['projects'];
        for (const project of transcriptProjects) {
            if (project.id == this.hashName) return project.sections;
        }        
    }
    getSubArrResources(arrResources) {
        const subArrResources = [];

        for (const element of arrResources) {
            const resourceKey = element[0]; 
            const resourceValue = element[1];

            if (resourceKey == 'projects') {
                resourceValue.forEach(arr => subArrResources.push(Object.entries(arr)));
            } else if (typeof resourceValue == 'object') {
                subArrResources.push(Object.entries(resourceValue).map(objElem => [objElem[0], objElem[1]]));
            }
        }
        return subArrResources;
    }
    getBrightnessOfColor(element) {
        let hex = element.slice(1).match(/.{1,2}/g)
        let rgb = {}
        rgb.r = parseInt(hex[0], 16)
        rgb.g = parseInt(hex[1], 16)
        rgb.b = parseInt(hex[2], 16)
        
        return ((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000)
    } 
    // LOOPS
    loopOverSections(listOfSections) {
        for (let i = 0; i < listOfSections.length; i++) { 
            const section = listOfSections[i];
            const elemSectionId = document.getElementById(section.id);
            const firstChildSection = elemSectionId.children[0];

            if (firstChildSection.classList[0] == 'card-group' && !firstChildSection.children.length ) {
                this.addCardsInCardGroup(listOfSections[i].projects.length, firstChildSection);
            }

            if (i == 1 && !this.isPublished) {
                this.setMessageNotPublished(listOfSections);
            }
            
            if (elemSectionId.children.length) {
                const arrResources = Object.entries(section);
                this.loopOverChilderen(elemSectionId, arrResources);
            }
        }
    }
    loopOverChilderen(parent, arrResources) {
        for (const child of parent.children) {
            const childFirstClassName = child.classList[0];

            if (!childFirstClassName) {
                continue;
            }
            if (childFirstClassName == 'card-group') {
                this.loopOverCards(child, this.getSubArrResources(arrResources)) 
            }

            if (   childFirstClassName == 'card-content' 
                || childFirstClassName == 'card' 
                || child.children.length ) {
                this.loopOverChilderen(child, arrResources) 
            }

            if (childFirstClassName.startsWith('card-')
            || childFirstClassName.startsWith('sect-')) {
                const childName = childFirstClassName.slice(5) 
                this.checkResourceOfChild(parent, childFirstClassName, arrResources, childName);
            } 
        }
    }
    loopOverCards(parent, subArrResources) {
        const children = parent.getElementsByClassName('card');
        for (let i = 0; i < children.length; i++) {
            this.loopOverChilderen(children[i], subArrResources[i]);
        }
    }
    // CREATE 
    createCard() {
        const card = document.createElement("section")
        card.classList.add('card');

        const card_url = document.createElement("a");
        card_url.classList.add('card-url');

        const card_img = document.createElement("img");
        card_img.classList.add('card-img', 'padding-block__3');

        const card_content = document.createElement("section");
        card_content.classList.add('card-content', 'flex', 'flex-column');

        const card_title = document.createElement("h4");
        card_title.classList.add('card-title', 'font-weight__light', 'color__accent-primary');

        const card_description = document.createElement("p");
        card_description.classList.add('card-description');

        const card_languages = document.createElement("p");
        card_languages.classList.add('card-languages');

        const card_langratio = document.createElement("p");
        card_langratio.classList.add('card-langratio');

        const card_library = document.createElement("p");
        card_library.classList.add('card-library');

        const card_btn = document.createElement("button");
        card_btn.classList.add('card-btn');

        const card_urlBtn = document.createElement("a");
        card_urlBtn.classList.add('card-urlBtn');

        const card_span1 = document.createElement("span");
        card_span1.classList.add('color__grey');

        const card_span2 = document.createElement("span");
        card_span2.classList.add('color__grey');

        const card_div = document.createElement("div");
        card_div.classList.add('card-content');

        card_btn.appendChild(card_urlBtn);
        card_languages.appendChild(card_span1);
        card_library.appendChild(card_span2);
        card_div.appendChild(card_languages);
        card_div.appendChild(card_library);
        card_content.appendChild(card_title);
        card_content.appendChild(card_description);
        card_content.appendChild(card_div);
        card_content.appendChild(card_btn);
        card_url.appendChild(card_img);
        card_url.appendChild(card_content);
        card.appendChild(card_url);

        return card;
    }
    // ADD TO
    addCardsInCardGroup(count, parent) {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < count; i++) {
            fragment.appendChild(this.createCard());
        }
        parent.appendChild(fragment);
    }
    addColors(value, elemChild) {
        for (const colorCode of value) {
            const div = document.createElement('div')
            div.style.background = colorCode
            div.classList.add('bullet')
            div.textContent = colorCode
            elemChild.appendChild(div)

            if (this.getBrightnessOfColor(colorCode) < 128) {
                div.classList.add('bullet-dark')
            }
        }
    }  
    addImages(value, elemChild) {
        for (const src of value) {
            const img = elemChild.appendChild(document.createElement("img"))
            img.classList.add('img-small')
            img.src = src;            
        }
    } 
    // CHECKERS

    checkResourceOfChild(parent, childClassName, arrResources, childName) { //name setResourceOfChild
        if (!arrResources) return;

        let arrResources_HasTextBtn = false;
        let elemChild = parent.getElementsByClassName(childClassName)[0];

        for (const resource of arrResources) {
            const key = resource[0];
            const value = resource[1];

            if (key.startsWith('textBtn')) arrResources_HasTextBtn = true;

            if (key == 'notPublished') this.isPublished = false;

            this.checkKeyAndChildName(key, value, childName, elemChild);

            if (childName !== key) continue;

            this.checkChildName(childName, key, value, elemChild);
        }

        if (!arrResources_HasTextBtn && (parent.classList[0] == 'card-btn' && childName == 'urlBtn') ) {
            elemChild.innerHTML = '<span lang="en">Get more info</span><span lang="nl">Meer info</span>';
        }
    }
    checkKeyAndChildName(key, value, childName, elemChild) {
        const variants = [
            { key: 'textBtn',   childName: 'urlBtn',    property: 'textContent'},
            { key: 'textBtn_1', childName: 'urlBtn_1',  property: 'textContent'},
            { key: 'textBtn_2', childName: 'urlBtn_2',  property: 'textContent'},
            { key: 'urlBtn',    childName: 'url',       property: 'href'},
            { key: 'imgAlt',    childName: 'img',       property: 'alt'},
        ]
        const variant = variants.find(v => v.key == key && v.childName == childName);
        if (variant) {
            this.setProperty(elemChild, variant.property, value);
            return;
        }
    }            
    checkChildName(childName, key, value, elemChild) {
        switch (childName) {
            case 'colors':
                this.addColors(value, elemChild);
                break;
            case 'img_01':
            case 'img_02':
            case 'img':
                elemChild.src = value;
                break;
            case 'imgList':
                this.addImages(value, elemChild);
                break;
            case 'previous':
            case 'next':
                elemChild.textContent = key;       
            case 'urlBtn':
            case 'urlBtn_1':
            case 'urlBtn_2':
                elemChild.href = value;
                break;
            case 'langratio':
                elemChild.textContent =  value.join('% - ') + '%';
                break;
        
            default:
                if (elemChild.children[0] && elemChild.children[0].tagName == 'SPAN'){

                    this.checkKey(key, elemChild);

                    (Array.isArray(value)) ?
                        elemChild.innerHTML += value.join(' - ') :
                        elemChild.innerHTML += value;
                    break;
                }
                (Array.isArray(value)) ?
                        (childName == 'library') ?
                        elemChild.textContent = `- ${value.join(' - ')}` :
                        elemChild.textContent = value.join(' - ') :
                        elemChild.textContent = value;
                break;
        }
    }
    checkKey(key, elemChild) {
        const spanVariants = [
            { key: 'library',           english: 'And with:&numsp;&numsp;',         dutch: 'En met: &numsp;&numsp;&numsp;&numsp;&nbsp; '},
            { key: 'languages',         english: 'Made in:&numsp;&numsp;&numsp;',   dutch: 'Gemaakt in:&numsp;'},
            { key: 'availability',      english: 'Availability: ',                  dutch: 'Beschikbaarheid: '},
            { key: 'related_interests', english: 'Related interests: ',             dutch: 'Gerelateerde interesse: '},
        ]
        const variant = spanVariants.find(v => v.key == key);
        if (variant) {
            this.setSpanInElement(variant.english, variant.dutch, elemChild.children[0])
            return;
        } else {
            const value = key.replaceAll('_', ' ') + ': \n ';
            this.setProperty(elemChild.children[0], 'textContent', value);
            elemChild.classList.add('showParent');
        }
    }
}

