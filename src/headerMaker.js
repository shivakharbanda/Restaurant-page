import makeHomePage from './homeMaker.js';
import makeMenu from "./menuMaker";
import contactMaker from "./contactMaker";


export default function headerMaker () {
    let header = document.createElement("header");
    let names = ["Home", "Menu", "Contact"];
    let content = document.querySelector(".content") ;



    for (let i = 0; i < 3; i ++) {
        var Atag = document.createElement("a");
        Atag.classList.add("header-links");
        
        Atag.textContent = names[i];
        Atag.id = (Atag.textContent);
        header.appendChild(Atag);

        Atag.addEventListener("click", (e) => {
            if (e.target.id == "Home") {
                content.textContent = "";
                content.appendChild(makeHomePage());
            } else if (e.target.id == "Menu") {
                content.textContent = "";
                content.appendChild(makeMenu());
            } else if (e.target.id == "Contact") {
                content.textContent = "";
                content.appendChild(contactMaker())
            }
        })

    }
    return header;

}

