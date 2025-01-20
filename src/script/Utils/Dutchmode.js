export default class DutchMode {

    labelToggleBtn = document.getElementById('labelToggleLanguage');
    toggleBtn = document.getElementById('toggleLanguage');

    constructor() {
        if (!sessionStorage.getItem('dutch-mode')) {
            sessionStorage.setItem('dutch-mode', false)
        }
        this.toggleBtn.addEventListener('change', () => {
            
            document.getElementById('dialogNav').close();
            document.getElementById('exit').style.display = 'block';
            this.changeMode();
        });

    }
    changeMode() {

        (sessionStorage.getItem('dutch-mode') == 'true') ? 
        sessionStorage.setItem('dutch-mode', false) :
        sessionStorage.setItem('dutch-mode', true) ;

        this.setLangAttr();
        setTimeout(() => location.reload(), 1000);
    }

    setLangAttr() {
        if (sessionStorage.getItem('dutch-mode') == 'true') 
        { 
            // switch to dutch
            document.querySelectorAll('[lang="nl"]').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('[lang="en"]').forEach(el => { if (el.tagName !== 'HTML') el.style.display = 'none';});

        } else
        { 
            // switch to english
            document.querySelectorAll('[lang="nl"]').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('[lang="en"]').forEach(el => el.classList.remove('hidden'));
        } 
    }
}