import headerMaker from "./headerMaker.js";

function contactComponent () {

    let contactdiv = document.createElement("div");
    contactdiv.classList.add("contact");

    let contactdivhead = document.createElement("h1");

    contactdivhead.textContent = "Contact Us";

    let contactDeetsDiv = document.createElement("div");
    contactDeetsDiv.classList.add("contact-details");

    let contactdeetsaddresshead = document.createElement("h2");
    contactdeetsaddresshead.textContent = "Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit....";

    let contactdeetsphhead = document.createElement("h2");
    contactdeetsphhead.textContent = "Phone number: 98000000000";

    contactDeetsDiv.appendChild(contactdeetsaddresshead);
    contactDeetsDiv.appendChild(contactdeetsphhead);

    contactdiv.appendChild(contactdivhead);
    contactdiv.appendChild(contactDeetsDiv);

    return contactdiv;
}



export default function contactMaker() {
    let mainDiv = document.createElement("div");

    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(contactComponent());

    return mainDiv;
    
}
