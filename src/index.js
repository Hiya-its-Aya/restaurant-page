import './style.css';
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
            menuBtn.addEventListener("click", () => {
                clearCon();
                menu.makeMenu();
        
            })
        }
        
        return{info, makeHome}
    };
    
    //make menu 
    const menuPage = () => {
        const Menu  = (category, item, price, discription) => {
            
            this.category = category;
            this.item = item;
            this.price = price;
            this.discription = discription; 

            return {category, item, price, discription}
        }
        const makeMenu = () => {
            const mansaf = Menu("Food", "Mansaf", 17, "A mouth watering, rich dish of lamb slow-cooked in a yougurt sauce on a bed of perfectly-cooked tumeric-yellow rice, served with extra suace and a salad")
            const kebab = Menu("Food","Kebab", 15, "Your choice of tender ground beef or juicy marinated chicken grilled to perfection, served with fluffy rice, salad, hummus and fresh-baked pita bread. Sub steak kabob for $2")
            const falafel = Menu("Food", "Falafel", 12, "Deep-fried to perfection, served with fluffy rice, hummus,and bread.")
            const manaeesh = Menu("Food", "Mana'eesh", 7, "Your choice of delicous cheese, zaataar, or beef arabic pizzas. Great with tea!")
            const foodArray = [mansaf, kebab, falafel, manaeesh];
            const food = document.createElement('div')
            food.className ="food-div";
            food.textContent = falafel.category; + ": "
            mainCon.appendChild(food);
            for (let i = 0; i < foodArray.length; i++){
                const items = document.createElement('div');
                const disc = document.createElement('div')
                items.className = "food-item";
                items.textContent = foodArray[i].item + ": $" + foodArray[i].price;
                disc.textContent = foodArray[i].discription;
                items.appendChild(disc);
                food.appendChild(items);
            };
            //make drinks 
            const soda = Menu("Drink", "Soda", 2, null);
            const arabCof = Menu('Drink', "Arabic Coffee, one serving", 2, null);
            const arabCofLg = Menu("Drink", "Arabic Coffee, 2-3 servings", 5, null);
            const teaSml = Menu('Drink', "Tea, one serving", 2, null);
            const teaLrg = Menu("Drink", "Pot of tea, 3-4 servings", 7, null);
            const drinkArray = [soda, arabCof, arabCofLg, teaSml, teaLrg];
            const drinks = document.createElement('div');
            // mainCon.style = "display: grid; grid-template-columns:repeat(auto-fill, minmax(350px, .5fr)); grid-template-rows:repeat(auto-fill, minmax(350px, .5fr)); align-items:unset "
            drinks.textContent = "Drinks:"
            drinks.className = 'drink-div';
            mainCon.appendChild(drinks);
            for (let i = 0; i < drinkArray.length; i++){
                    const items = document.createElement('div');
                    items.className = "drink-item";
                    items.textContent = drinkArray[i].item + ": $" + drinkArray[i].price;
                    drinks.appendChild(items);
                };
            
            //make desserts
            const baklava = Menu("Dessert", "Baklava", 2, null);
            const warbat = Menu("Dessert", "Warbat", 2, null);
            const cheesecake = Menu("Dessert", "Cheesecake", 5, null)
            const dessertArray = [baklava, warbat,cheesecake];
            const desserts = document.createElement('div');
            desserts.textContent = "Desserts:";
            desserts.className = 'dessert-div';
            mainCon.appendChild(desserts);
            for (let i = 0; i < dessertArray.length; i++){
                    const items = document.createElement('div');
                    items.className = "dessert-item";
                    items.textContent = dessertArray[i].item + ": $" + dessertArray[i].price;
                    desserts.appendChild(items);
                };
            const setMenu = document.createElement("div")
            setMenu.className = "set-menu-text";
            setMenu.textContent = "Music Nights: Set menu only, $30 per person. Pick one of each single-serving drink, one main course and one dessert.";
            mainCon.append(setMenu);
            mainCon.style = "display: grid; align-items: unset";      
        }   
        return{Menu, makeMenu}
    }
    
    //make contact 
    const contactPage = () =>{
        const info = {
            address: "123 Riptide Way, Los Angeles, CA 90054",
            phone: "(310) 222-2222",
            owner: "Abdul Haleem Hafiz",
            manager: "Nancy Ajram",
            email: "desertrose@notmail.com"
        };
        const makeContact = () => {
           const information = document.createElement('p');
           information.className = "contact-info";
           information.innerHTML = "Owner: " + info.owner + "<br> Manager: " +info.manager + "<br> Email: " + info.email + "<br> Phone: " + info.phone + "<br> Address: " + info.address;
           mainCon.appendChild(information);
        };
        return {info, makeContact}
    }

    //add event listener to li

    const home = homePage();
    const menu = menuPage();
    const contact = contactPage();
    
    home.makeHome();

    homeItem.addEventListener("click", () => {
        clearCon();
        home.makeHome();
    })

    menuItem.addEventListener('click', () =>{
        clearCon();
        menu.makeMenu();
    })

    contactItem.addEventListener('click', ()=>{
        clearCon();
        contact.makeContact();
    })

})();

