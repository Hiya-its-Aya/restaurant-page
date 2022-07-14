
(()=>{
    "use strict";
    const content = document.querySelector("#content");
    const header  = document.createElement("header");
    header.textContent= "1001 Nights"

    const list = document.createElement("ul")
    const homeItem = document.createElement("li");
    homeItem.className="home";
    homeItem.textContent ="Home";

    const menuItem = document.createElement("li");
    menuItem.className="menu";
    menuItem.textContent ="Menu";

    const contactItem = document.createElement("li");
    contactItem.className="contact";
    contactItem.textContent ="Contact Us";

    const mainCon = document.createElement("div");
    mainCon.id = "container"

    const footer = document.createElement("footer");
    footer.textContent = "Made by Aya Moosa"

    content.append(header, mainCon, footer);
    header.appendChild(list);
    list.append(homeItem, menuItem, contactItem);

    //make homepage
    //make menu 
    //make contact 
    //add event listener to li

    homeItem.addEventListener("click", () => {
            alert("Home");
    })


})();