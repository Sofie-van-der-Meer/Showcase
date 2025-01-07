export default class Fetch {

    constructor(file) {
        this.requestURL = `../src/components/${file}.html`;
        this.getPagefile(file);
        // console.log(`end of fetch file: ${file}.html`)
    }

    async getPagefile(file) { // Add file and map as parameters
        try {
            // const requestURL = `/showcase/src/components/${file}.html`; // Use the parameters
            const response = await fetch(this.requestURL);
            if (!response.ok) {
                throw new Error(`Error loading ${file}.html`);
            }
            const text = await response.text();
            // return text
            // Ensure the element with the ID exists
            
            const element = document.getElementById(file);
            if (element) {
                element.innerHTML = text;
                // console.log(element)
            } else {
                console.error(`Element with ID "${file}" not found.`);
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    }
}

