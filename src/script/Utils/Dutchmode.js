export default class DutchMode {

    labelToggleBtn = document.getElementById('labelToggleLanguage');
    toggleBtn = document.getElementById('toggleLanguage');

    constructor() {
        if (!sessionStorage.getItem('dutch-mode')) {
            sessionStorage.setItem('dutch-mode', false)
        }
        this.toggleBtn.addEventListener('change', () => this.changeMode());
    }
    changeMode() {

        (sessionStorage.getItem('dutch-mode') == 'true') ? 
        sessionStorage.setItem('dutch-mode', false) :
        sessionStorage.setItem('dutch-mode', true) ;

        this.setLangAttr();
        document.getElementById('dialogNav').close();
        location.reload();
    }

    setLangAttr() {
        if (sessionStorage.getItem('dutch-mode') == 'true') 
        { 
            // switch to dutch
            document.querySelectorAll('[lang="nl"]').forEach(el => el.style.display = 'block');
            document.querySelectorAll('[lang="en"]').forEach(el => { if (el.tagName !== 'HTML') el.style.display = 'none';});

        } else
        { 
            // switch to english
            document.querySelectorAll('[lang="nl"]').forEach(el => el.style.display = 'none');
            document.querySelectorAll('[lang="en"]').forEach(el => el.style.display = 'block');
        } 
    }
}