export default class DarkMode {

    modeToggleBtn   = document.getElementById('toggleDarkMode');
    faviconTag      = document.getElementById("faviconTag")
    // pictLight       = document.getElementById('pict-light');
    // pictDark        = document.getElementById('pict-dark');
    // imgLogo         = document.getElementById('logo');
    bodyTag         = document.body;

    constructor() {
        this.current =  localStorage.getItem('color-scheme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 
                        'dark' : 
                        'light');

        this.setMode();
        this.modeToggleBtn.addEventListener('change', () => this.changeMode() );
    }

    setMode() {
        this.faviconTag.href = `favicon_${this.current}.svg`;
        // this.imgLogo.src = `../src/assets/icons/logo_${this.current}-mode.png`;
        this.bodyTag.className = this.current;
    }

    changeMode() {
        if (this.bodyTag.classList.contains('dark')) {
            this.faviconTag.href = "favicon_light.svg";
            this.bodyTag.classList.remove('dark');
            this.bodyTag.classList.add('light');
            // this.imgLogo.src = `../src/assets/icons/logo_light-mode.png`;
            // this.pictLight.classList.remove('hidden');
            // this.pictDark.classList.add('hidden');
            localStorage.setItem('color-scheme', 'light');
        } else {
            this.faviconTag.href = "favicon_dark.svg";
            this.bodyTag.classList.remove('light');
            this.bodyTag.classList.add('dark');
            // this.imgLogo.src = `../src/assets/icons/logo_dark-mode.png`;
            // this.pictDark.classList.remove('hidden');
            // this.pictLight.classList.add('hidden');
            localStorage.setItem('color-scheme', 'dark');
        }
    }
}