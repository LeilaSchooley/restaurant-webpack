import createHomePage from "./homepage.js"
import createContactPage from "./contact.js"
import createMenuPage from "./createMenuPage.js"


function queryAllButtons(){
    let allButtons = document.querySelectorAll("button")
    allButtons.forEach((element, index) => element.addEventListener("click", () => {
        if (index === 0){
            createHomePage()
        }

        else if (index === 1){

            createMenuPage()
            
        }       
        
        else if (index === 2){

            createContactPage()
            
        }
            }
            
        )
    )
}
export default queryAllButtons
createHomePage()





