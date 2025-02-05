export default class DarkMode {

    modeToggleBtn   = document.getElementById('toggleDarkMode');
    spanDarkMode  = document.getElementById('spanDarkMode');
    spanLightMode  = document.getElementById('spanLightMode');
    faviconTag      = document.getElementById("faviconTag");
    bodyTag         = document.body;

    constructor() {
        this.current =  sessionStorage.getItem('color-scheme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 
                        'dark' : 'light');
        this.notCurrent = (this.current == 'dark') ? 'light' : 'dark';
        this.setMode();
        this.modeToggleBtn.addEventListener('change', () => this.changeMode() );
    }

    setMode() {
        this.faviconTag.href = `favicon_${this.current}.svg`;
        this.bodyTag.className = this.current;
        this.setSpan();
    }

    changeMode() {
        if (this.bodyTag.classList.contains('dark')) {
            this.faviconTag.href = "favicon_light.svg";
            this.bodyTag.classList.remove('dark');
            this.bodyTag.classList.add('light');
            sessionStorage.setItem('color-scheme', 'light');
        } else {
            this.faviconTag.href = "favicon_dark.svg";
            this.bodyTag.classList.remove('light');
            this.bodyTag.classList.add('dark');
            sessionStorage.setItem('color-scheme', 'dark');
        }
        this.setSpan();
        document.getElementById('dialogNav').close();
    }
    setSpan() {
        if (this.bodyTag.classList.contains('dark')) {
            this.spanDarkMode.style.display = 'none';
            this.spanLightMode.style.display = 'block';
        } else {
            this.spanLightMode.style.display = 'none';
            this.spanDarkMode.style.display = 'block';
        }
    }
}