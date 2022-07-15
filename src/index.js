
(()=>{
    
    "use strict";
    const content = document.querySelector("#content");
    const header  = document.createElement("header");
    header.textContent= "Desert Rose"

    const list = document.createElement("ul")
    const homeItem = document.createElement("li");
    homeItem.className="home";
    homeItem.textContent ="HOME";

    const menuItem = document.createElement("li");
    menuItem.className="menu";
    menuItem.textContent ="MENU";

    const contactItem = document.createElement("li");
    contactItem.className="contact";
    contactItem.textContent ="CONTACT US";

    const mainCon = document.createElement("div");
    mainCon.id = "container"

    const footer = document.createElement("footer");
    footer.textContent = "Made by Aya Moosa"

    content.append(header, mainCon, footer);
    header.appendChild(list);
    list.append(homeItem, menuItem, contactItem);

    //make homepage

    function clearCon(){   
            mainCon.replaceChildren();
        }
    

    const homePage = () =>{
        const info = {
            name:"Desert Rose",
            statement: "Our food hails from the Mediterranean and Red Seas. Each bite, a mouthful of flavor and extravagance, combined with world-class service and entertainment the Middle-East has to offer.",
            hours:{
                weekday: "Sunday through Thurdsay: 11am to 9pm",
                friday:"Friday: 2pm to 2am",
                saturday: "Saturday: 11am to 3am"
            }
        }
        const makeHome = () => {
            const title = document.createElement('h1');
            title.textContent= info.name;
            title.className ="title";

            const para1 = document.createElement('p');
            para1.textContent = info.statement;
            para1.className = "statement";

            const hours = document.createElement('div');
            hours.className = "hours";
            const hoursTitle = document.createElement('h3');   
            hoursTitle.className = "title";
            hoursTitle.textContent = "Hours of Operation:"
            const times = document.createElement('p'); 
            times.className = "times";
            times.innerHTML = info.hours.weekday + "<br>" + info.hours.friday +  "<br>" + info.hours.saturday ;
            
            hours.append(hoursTitle, times);
    

            const para2 = document.createElement('p');
            para2.className = "party"
            para2.textContent = "Every first and third Friday and second and fourth Saturday of the month, there is live Middle Eastern music and Dancing! Check out menu for pricing!"
            
            const menuBtn = document.createElement('button');
            menuBtn.className = "menu-button";
            menuBtn.textContent = "MENU";


            mainCon.append(title, para1, hours, para2, menuBtn);
        }
        
        return{info, makeHome}
    };
    //make menu 
    //make contact 
    //add event listener to li

    const home = homePage();
    home.makeHome();

    homeItem.addEventListener("click", () => {
        clearCon();
        home.makeHome();
    })


})();

