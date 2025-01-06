export default class DarkMode {

    modeToggleBtn   = document.getElementById('toggleDarkMode');
    faviconTag     = document.getElementById("faviconTag")
    pictLight       = document.getElementById('pict-light').classList;
    pictDark        = document.getElementById('pict-dark').classList;
    bodyClass       = document.body.classList;

    constructor() {
        this.current =  localStorage.getItem('color-scheme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 
                        'dark' : 
                        'light');
        this.setMode()
        this.modeToggleBtn.addEventListener('change', () => this.changeMode() );
    }

    setMode() {
        this.faviconTag.href = `favicon_${this.current}.svg`;
        this.bodyClass.add(this.current);
        (this.current == 'dark') ? 
        this.pictLight.add('hidden') : 
        this.pictDark.add('hidden');
    }

    changeMode() {
        if (this.bodyClass.contains('dark')) {
            this.faviconTag.href = "favicon_light.svg";
            this.bodyClass.remove('dark');
            this.bodyClass.add('light');
            this.pictLight.remove('hidden');
            this.pictDark.add('hidden');
            localStorage.setItem('color-scheme', 'light');
        } else {
            this.faviconTag.href = "favicon_dark.svg";
            this.bodyClass.remove('light');
            this.bodyClass.add('dark');
            this.pictDark.remove('hidden');
            this.pictLight.add('hidden');
            localStorage.setItem('color-scheme', 'dark');
        }
    }
}