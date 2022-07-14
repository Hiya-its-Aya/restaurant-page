
(()=>{
    "use strict";
    const content = document.querySelector("#content");
    const head  = document.createElement("header");
    head.textContent= "1001 Nights"

    const list = document.createElement("ul")
    const listItem1 = document.createElement("li");
    listItem1.className="home";
    listItem1.textContent ="Home";

    const listItem2 = document.createElement("li");
    listItem1.className="menu";
    listItem2.textContent ="Menu";

    const listItem3 = document.createElement("li");
    listItem3.className="contact";
    listItem3.textContent ="Contact Us";

    const mainCon = document.createElement("div");
    mainCon.id = "container"

    const footer = document.createElement("footer");
    footer.textContent = "Made by Aya Moosa"

    content.append(head, mainCon, footer);
    head.appendChild(list);
    list.append(listItem1, listItem2, listItem3);




    
})();