// TOGGLE DARK-MODE
let currentMode = localStorage.getItem('color-scheme') || 
(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const favicontTag = document.getElementById("faviconTag")
let bodyClass = document.body.classList;
let pictLight = document.getElementById('pict-light').classList;
let pictDark = document.getElementById('pict-dark').classList;
const modeToggleBtn = document.getElementById('toggleDarkMode');


favicontTag.href = `favicon_${currentMode}.svg`;
bodyClass.add(currentMode);
(currentMode == 'dark') ? pictLight.add('hidden') : pictDark.add('hidden');




const changeMode = function() {
    if (bodyClass.contains('dark')) {
        favicontTag.href = "favicon_light.svg";
        bodyClass.remove('dark');
        bodyClass.add('light');
        pictLight.remove('hidden');
        pictDark.add('hidden');
        localStorage.setItem('color-scheme', 'light');
    } else {
        favicontTag.href = "favicon_dark.svg";
        bodyClass.remove('light');
        bodyClass.add('dark');
        pictDark.remove('hidden');
        pictLight.add('hidden');
        localStorage.setItem('color-scheme', 'dark');
    }
}

modeToggleBtn.addEventListener('change', changeMode);


// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON

async function populate() {
    const requestURL = "/src/text.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const text = await response.json();
    
    const cardlist = document.getElementsByClassName('card-title');
    for (let i = 0; i < cardlist.length; i++) {
        const card = cardlist[i];
        card.textContent = text.projects[i].title
        
    }
}
populate()