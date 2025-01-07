export default class Modal {
    constructor() {
        this.dialog     = document.getElementById("dialogNav");
        this.showButton = document.getElementById("showDialogNav");
        this.hideButton = document.getElementById("hideDialogNav");

        this.showButton.addEventListener("click", () => { this.dialog.showModal(); })
        this.hideButton.addEventListener("click", () => { this.dialog.close(); })
    }
}