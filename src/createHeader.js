import component from "./createElement.js"


function createHeader(){
    let containerDiv = document.getElementById("content")

    containerDiv.innerHTML=""

    containerDiv.appendChild(component(`<button id="homepage">Homepage</button>`));
    containerDiv.appendChild(component(`<button id="menu">Menu</button>`));
    containerDiv.appendChild(component(`<button id="contact">Contact Us</button>`));


}
export default createHeader