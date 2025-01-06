export default class Fetch {
    constructor(map, file) {
        this.requestURL = `../src/components/${map}/${file}.html`;
        this.getPagefile(map, file);
        // document.addEventListener('DOMContentLoaded', async () => {
        //     const element = document.getElementById(file);
        //     if (element) {
        //         element.innerHTML = this.text;
        //         console.log(element)
        //     } else console.log('error')
        // })
        console.log(`end of fetch file: ${map}/${file}.html`)
    }
    async getPagefile(map, file) { // Add file and map as parameters
        try {
            const requestURL = `/showcase/src/components/${map}/${file}.html`; // Use the parameters
            const response = await fetch(requestURL);
            if (!response.ok) {
                throw new Error(`Error loading ${map}/${file}.html`);
            }
            const text = await response.text();
            // return text
            // Ensure the element with the ID exists
            
            const element = document.getElementById(file);
            if (element) {
                element.innerHTML = text;
                console.log(element)
            } else {
                console.error(`Element with ID "${file}" not found.`);
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    }
    // async getPagefile() {
        // try {
            // const response = await fetch(this.requestURL);
            // if (!response.ok) {
            //     throw new Error(`Fout bij het inladen van ${map}/${file}.html`);
            // }
            // const text = await response.text();
            // document.getElementById(file).innerHTML = text;
        // } catch(err) {
        //     console.error('Fout: ', err)
        // }

        // const requestURL = `../src/components/${map}/${file}.html`;
        // const request = new Request(requestURL);
        // const response = await fetch(request);
        // const text = await response.text();
        // return text
    // }
}

//common/
