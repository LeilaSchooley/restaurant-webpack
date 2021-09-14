import component from "./createElement.js"
import createHeader from "./createHeader.js"
import queryAllButtons from "./index.js"

function createContactPage(){
    createHeader()

    let containerDiv = document.getElementById("content")

    let contactButton = document.getElementById("contact")

    contactButton.classList.add("active-section")

    containerDiv.appendChild(component("<h1>Contact Us</h1>"))
    containerDiv.appendChild(component(`
    Use the form below to drop us an e-mail. Old-fashioned phone calls work too >> 484.324.2400
    `))
    containerDiv.appendChild(component("<img src='./restaurant.jpg'>"));

    queryAllButtons()

}

export default createContactPage