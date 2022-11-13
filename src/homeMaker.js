import InnerBanner from "./inner-banner.png";
import headerMaker from "./headerMaker.js";


export function homeMaker() {
    
    let homeDiv = document.createElement("div");

    let img = new Image;
    img.src = InnerBanner;

    let textP = document.createElement("p");
    textP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad ut fugiat, saepe alias porro...";

    let orderBtn = document.createElement("button");

    orderBtn.textContent = "ORDER NOW";

    let textdiv = document.createElement("div");

    textdiv.appendChild(img);
    textdiv.appendChild(textP);
    textdiv.appendChild(orderBtn);

    homeDiv.appendChild(textdiv);

    homeDiv.classList.add("home");
    orderBtn.classList.add("order");
    textdiv.classList.add("text");


    return homeDiv

}


export default function makeHomePage() {
    let mainDiv = document.createElement("div");

    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(homeMaker());

    return mainDiv;
    
}
