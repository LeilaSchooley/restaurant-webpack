import queryAllButtons from "./index.js"
import component from "./createElement.js"
import createHeader from "./createHeader.js"


function createMenuPage(){
    createHeader()
    let containerDiv = document.getElementById("content")

    let imagesDiv = document.createElement("div")
    imagesDiv.classList.add("menu-images")

    let menuButton = document.getElementById("menu")
    menuButton.classList.toggle("active-section")

    containerDiv.appendChild(component("<h1>Menu</h1>"));
    
    imagesDiv.appendChild(component("<img src='./1.jpg'>"));
    imagesDiv.appendChild(component("<img src='./2.jpg'>"));
    imagesDiv.appendChild(component("<img src='./3.jpg'>"));
    imagesDiv.appendChild(component("<img src='./4.jpg'>"));
    imagesDiv.appendChild(component("<img src='./5.jpg'>"));
    imagesDiv.appendChild(component("<img src='./6.jpg'>"));

    containerDiv.appendChild(imagesDiv)
    queryAllButtons()


}
export default createMenuPage;