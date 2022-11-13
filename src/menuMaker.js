import Parantha from "./parantha.jpg";



function menuMaker() {

    let menuDiv = document.createElement("div");
    menuDiv.classList.add("Menu");

    let menuHeadDiv = document.createElement("div");
    menuHeadDiv.classList.add("menu-head");

    let menuHeadDivH1 = document.createElement("h1");
    let menuHeadDivH2 = document.createElement("h2");

    menuHeadDivH1.textContent = "Menu";
    menuHeadDivH2.textContent = " Breakfast Items";

    menuHeadDiv.appendChild(menuHeadDivH1);
    menuHeadDiv.appendChild(menuHeadDivH2);

    menuDiv.appendChild(menuHeadDiv);
    

    menuHeadDiv.classList.add("menu-head");

    let menuItemsDiv = document.createElement("div");
    menuItemsDiv.classList.add("menu-items");


    let menuitems = [
        {
            name : "Aloo Parantha",
            price : "₹80",
        },
        {
            name : "Gobhi Parantha",
            price : "₹70",
        },
        {
            name : "Mooli Parantha",
            price : "₹70",
        }
        
    ]

    for (let i = 0; i < 3; i ++){
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        let itemDetails = document.createElement("div");
        itemDetails.classList.add("details");

        let itemdetailh1 = document.createElement("h3");
        let itemdetailh2 = document.createElement("h4");

        itemdetailh1.textContent = menuitems[i].name;
        itemdetailh2.textContent =  menuitems[i].price

        itemDetails.appendChild(itemdetailh1);
        itemDetails.appendChild(itemdetailh2);

        let img = new Image;
        img.src = Parantha;

        
        menuItem.appendChild(img);
        menuItem.appendChild(itemDetails)
        
        menuItemsDiv.appendChild(menuItem);

    };

    menuDiv.appendChild(menuItemsDiv);

    return menuDiv;

}

import headerMaker from "./headerMaker.js";

export default function makeMenu() {
    let mainDiv = document.createElement("div");

    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(menuMaker());

    return mainDiv;
    
}

