import component from "./createElement.js"
import createHeader from "./createHeader.js"
import queryAllButtons from "./index.js"

function createHomePage(){

    createHeader()
    
    let containerDiv = document.getElementById("content")

    let homepageButton = document.getElementById("homepage")

    homepageButton.classList.toggle("active-section")

    containerDiv.appendChild(component("<h1>The Lexer Restaurant</h1>"));
    
    containerDiv.appendChild(component(`** Welcome to Cora Pearl. We are now open for Lunch & Dinner, Tuesday - Saturday, plus of course our legendary Sunday Lunch! Please click here to book or call the restaurant on +44 (0)20 7324 7722 **`))
    
    containerDiv.appendChild(component("<img src='./restaurant.jpg'>"));
    containerDiv.appendChild(component(`Cora Pearl is the second restaurant from the team behind award-winning Kitty Fisher’s in Mayfair. 

    Named after the infamous 19th Century courtesan who resided close by, Cora Pearl serves elevated British comfort food, cocktails and wines for all occasions in an historic Covent Garden townhouse.
    
    Messrs. Milburn, Mullion & Steel look forward to welcoming you soon.`));

    queryAllButtons()

}

export default createHomePage;