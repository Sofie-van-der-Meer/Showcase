import DutchMode from "./Dutchmode";
import sources_ENG from "./sources_ENG";
import sources_NL from "./sources_NL";

export default class Resources {
    constructor(pageName, hashName) {
        this.pageName = pageName;
        this.hashName = hashName;
        this.isPublished = true;
        this.dutchMode = new DutchMode();
        this.dutchMode.setLangAttr();
        (sessionStorage.getItem('dutch-mode') == 'true' ) ? 
        this.sources = sources_NL  :
        this.sources = sources_ENG ;
        
        if (this.sources && this.sources[this.pageName]) {
            this.transcript = this.sources[this.pageName]
        }

        console.log(this.transcript || "failed");
    }
    
    setInnerHTML() {
        try {
            const headerElem = document.getElementById('headername');
            const headerText = this.transcript['headername'];
            if (headerElem && headerText) {
                headerElem.innerHTML = headerText;
            }

            let sections;
            if ( this.hashName && this.hashName !== 'nl' ) { 
                try {
                    const transcript = this.transcript.sections[1]['projects'];
                    transcript.forEach(element => {
                        if (element.id == this.hashName) {
                            sections = element.sections;
                        }
                    });              
                } catch {}
            } else sections = this.transcript.sections;
            // console.log(sections);
            
            for (let i = 0; i < sections.length; i++) { 
                // console.log(sections[i]);
                const headSection = sections[i];
                const sectionId = document.getElementById(headSection.id);

                if (sectionId.children[0].classList[0] == 'card-group' && !sectionId.children[0].children.length ) {
                    let count = sections[i].projects.length;
                    for (let i = 0; i < count; i++) {  
                        this.addCardHTML(sectionId.children[0]);  
                    }
                }
                if (i == 1 && !this.isPublished) {
                    console.log('maak hier een functie om een nieuw element te creëren');
                    console.log(sections[0]['notPublished']);

                    const setNotPublishedMessage = function(sections) {
                        const sect2 = document.getElementById(sections[1].id);
                        const text = sections[0]['notPublished'];
                        // nieuwe versie
                        sect2.getElementsByClassName('sect-group')[0].classList.add('hidden');
                        const message = document.createElement('h5');
                        message.classList.add('message_notPublished');
                        sect2.classList.add('flex');
                        message.innerHTML = text;
                        sect2.appendChild(message);
                        }
                    setNotPublishedMessage(sections);

                }
                // console.log(sectionId);
                if (sectionId.children.length) {
                    const arrResources = Object.entries(headSection);
                    
                    this.loopChilderen(sectionId, arrResources);
                }
            }
            
            this.dutchMode.setLangAttr();

        } catch (err) {
            console.error(err.stack);
        }
    }
    addCardHTML(parent) {

        const card              = document.createElement("section")
        const card_url          = document.createElement("a")
        const card_img          = document.createElement("img")
        const card_content      = document.createElement("section")
        const card_title        = document.createElement("h4")
        const card_description  = document.createElement("p")
        const card_languages    = document.createElement("p")
        const card_langratio    = document.createElement("p")
        const card_library      = document.createElement("p")
        const card_btn          = document.createElement("button")
        const card_urlBtn       = document.createElement("a")
        const card_span1        = document.createElement("span")
        const card_span2        = document.createElement("span")
        const card_div      = document.createElement("div")

        //classlist[0]
        card.classList.add('card');
        card_url.classList.add('card-url');
        card_img.classList.add('card-img');
        card_content.classList.add('card-content');
        card_title.classList.add('card-title');
        card_description.classList.add('card-description');
        card_languages.classList.add('card-languages');
        card_langratio.classList.add('card-langratio');
        card_library.classList.add('card-library');
        card_btn.classList.add('card-btn');
        card_urlBtn.classList.add('card-urlBtn');
        card_div.classList.add('card-content');

        //classlist[n+1] for css styles
        card_img.classList.add('padding-block__3');
        card_content.classList.add('flex');
        card_content.classList.add('flex-column');
        card_title.classList.add('font-weight__light');
        card_title.classList.add('color__accent-primary');
        card_span1.classList.add('color__grey');
        card_span2.classList.add('color__grey');

        
        card_btn.appendChild(card_urlBtn)
        card_languages.appendChild(card_span1)
        card_library.appendChild(card_span2)
        card_div.appendChild(card_languages)
        card_div.appendChild(card_library)
        card_content.appendChild(card_title)
        card_content.appendChild(card_description)
        // card_content.appendChild(card_languages)
        // card_content.appendChild(card_langratio)
        // card_content.appendChild(card_library)
        card_content.appendChild(card_div)
        card_content.appendChild(card_btn)
        card_url.appendChild(card_img)
        card_url.appendChild(card_content)
        card.appendChild(card_url)
        parent.appendChild(card);

    }
    loopChilderen(parent, arrResources) {
        
        for (const child of parent.children) {
            let childName;
            const childClassName = child.classList[0];

            if (!childClassName) {
                continue;
            }
            if (parent == document.getElementById('Project_Content') ) {
                // console.log(arrResources);
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
        // console.log(arrResources);

        const children = parent.getElementsByClassName('card');
        const subArrResources = [];

        arrResources.forEach(element => {

            if (element[0] == 'projects' || element[0] == 'projects2') {
                element[1].forEach(element => subArrResources.push(Object.entries(element)));
                // console.log(element[0]);
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
        // console.log(arrResources); zeer inefficient trouwens!!!

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
                case 'urlBtn':
                    if (childName == 'url') childHtml.href = resourceValue;
                    
                case 'imgAlt':
                    if (childName == 'img') childHtml.alt = resourceValue;
                default:
                    break;
            }

            if (resourceKey.startsWith('textBtn')) {
                arrResourcesHasTextBtn = true;
            };

            if (resourceKey == 'notPublished') {
                this.isPublished = false;
            }

            if (childName !== resourceKey) continue;

            switch (childName) {
                case 'colors':
                    resourceValue.forEach(element => {
                        
                        const div = document.createElement('div')
                        div.style.background = element
                        div.classList.add('bullet')
                        div.innerHTML = element
                        childHtml.appendChild(div)
                        console.log(this.getBrightness(element) < 128);
                        if (this.getBrightness(element) < 128) {
                            div.classList.add('bullet-dark')
                        }
                    });
                    break;
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
                case 'langratio':
                    childHtml.innerHTML =  resourceValue.join('% - ') + '%';
                    break;
            
                default:
                    if (childHtml.children[0] && childHtml.children[0].tagName == 'SPAN'){

                        switch (resourceKey) {
                            case 'library':
                                childHtml.children[0].innerHTML = '<span lang="en">And with:&numsp;&numsp;</span><span lang="nl">En met: &numsp;&numsp;&numsp;&numsp;&nbsp; </span>';
                                break;
                            case 'languages':
                                childHtml.children[0].innerHTML = '<span lang="en">Made in:&numsp;&numsp;&numsp;</span><span lang="nl">Gemaakt in:&numsp;</span>';
                                break;
                        
                            case 'availability':
                                childHtml.children[0].innerHTML = '<span lang="en">Availability: </span><span lang="nl">Beschikbaarheid: </span>';
                                break;
                        
                            case 'related_interests':
                                childHtml.children[0].innerHTML = '<span lang="en">Related interests: </span><span lang="nl">Gerelateerde interesse: </span>';
                                break;
                        
                            default:
                                childHtml.children[0].innerHTML = resourceKey.replaceAll('_', ' ') + ': <br> ';
                                break;
                        }

                        (Array.isArray(resourceValue)) ?
                            childHtml.innerHTML += resourceValue.join(' - ') :
                            childHtml.innerHTML += resourceValue;
                        break;
                    }
                    (Array.isArray(resourceValue)) ?
                            (childName == 'library') ?
                            childHtml.innerHTML = `- ${resourceValue.join(' - ')}` :
                            childHtml.innerHTML = resourceValue.join(' - ') :
                            childHtml.innerHTML = resourceValue;
                    break;
            }
        }

        if (!arrResourcesHasTextBtn && (parent.classList[0] == 'card-btn' && childName == 'urlBtn') ) {
            childHtml.innerHTML = '<span lang="en">Get more info</span><span lang="nl">Meer info</span>';
        }
    }
    getBrightness(element) {
        let hex = element.slice(1).match(/.{1,2}/g)
        console.log(hex);
        let rgb = {}
        rgb.r = parseInt(hex[0], 16),
        rgb.g = parseInt(hex[1], 16),
        rgb.b = parseInt(hex[2], 16)
        
        console.log(rgb);
        return ((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000)
    }
}