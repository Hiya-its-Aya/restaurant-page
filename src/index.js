
(()=>{
    
    "use strict";
    const content = document.querySelector("#content");
    const header  = document.createElement("header");
    header.textContent= "DESERT ROSE"

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
            para2.textContent = "Every first and third Friday and second and fourth Saturday of the month, there is live Middle Eastern music! Check out menu for pricing!"
            
            const menuBtn = document.createElement('button');
            menuBtn.className = "menu-button";
            menuBtn.textContent = "MENU";

            mainCon.style = "display: flex"

            mainCon.append(title, para1, hours, para2, menuBtn);
        }
        
        return{info, makeHome}
    };
    
    //make menu 
    const menuPage = () =>{
        const Menu  = (type, item, price, discription) =>{
            this.type = type;
            this.item = item;
            this.price = price;
            this.discription = discription; 

            return {type, item, price, discription}
        }

        const makeMenu = () => {
            const soda = Menu("Drink", "Soda", 2, null);
            const arabCof = Menu('Drink', "Arabic Coffee, one serving", 2, null);
            const arabCofLg = Menu("Drink", "Arabic Coffee, 2-3 servings", 5, null);
            const teaSml = Menu('Drink', "Tea, one serving", 2, null);
            const teaLrg = Menu("Drink", "Pot of tea, 3-4 servings", 7, null);
            const drinkArray = [soda, arabCof, arabCofLg, teaSml, teaLrg];
            const drinks = document.createElement('div');
            mainCon.style = "display: grid; grid-template-columns:repeat(auto-fill, minmax(350px, 1fr)); grid-template-rows:repeat(auto-fill, minmax(350px, 1fr)); align-items:unset "
            drinks.style = "display: grid; grid-template-columns:repeat(2, 1fr); gap: 5%; ";
            drinks.textContent = "Drinks:"
            drinks.className = 'drink-div';
            mainCon.appendChild(drinks);
                for (let i = 0; i < drinkArray.length; i++){
                    const items = document.createElement('div');
                    items.className = "drink-item";
                    items.textContent = drinkArray[i].item + ": $" + drinkArray[i].price;
                    drinks.appendChild(items);
                }
                drinks.style = "display: grid; grid-template-columns:repeat(2, 1fr); gap: 5%; align-items:unset ";
            const mansaf = Menu("Food", "Mansaf", 17, "A mouth watering, rich dish of lamb slow-cooked in a yougurt sauce on a bed of perfectly-cooked tumeric-yellow rice, served with extra suace and a salad")
            const kebab = Menu("Food","Kebab", 15, "Your choice of tender ground beef or juicy marinated chicken grilled to perfection, served with fluffy rice, salad, hummus and fresh-baked pita bread. Steak kabob add $2")
            const falafel = Menu("Food", "Falafel", 12, "Deep-fried to perfection, served with fluffy rice, hummus, ")
            const manaeesh = Menu("Food", "Mana'eesh", 7)
            // const foodArray 
        }   
        return{Menu, makeMenu}
    }
    
    //make contact 
    //add event listener to li

    const home = homePage();
    const menu = menuPage();
    home.makeHome();

    homeItem.addEventListener("click", () => {
        clearCon();
        home.makeHome();
    })

    menuItem.addEventListener('click', () =>{
        clearCon();
        menu.makeMenu();
    })

})();

