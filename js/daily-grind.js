//alert("can you see this");

/*

Here are main things we'll likely need to store for each coffee:
 
name-the mane of the coffee
pic-the pic of the coffee
color-the color associated with the coffee
alt-the alt tag indentifying th coffee
day-the day of the week
desc-a description of the coffee
parg: taste of coffee
*/

let myDate=new Date();

let today = myDate.getDay();

let coffee="";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){

    return `
     <p>
             <img src="${coffee.pic}" alt="${coffee.alt }" id="coffee" />
                 <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    
    `;

    
}

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch(today){

    // here we created case with Sundays Frappuccino special
    case 0:
           today = "Sunday"; 
           coffee = {
            name: "Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"A picture of the frappacino",
            color:"BurlyWood",
            day:"Sunday",
            desc:`Frappaccino Dolce far niente!<br>
             <br> Frappuccino! Is a line of blended iced coffee drinks. It consist coffee or crème base, blended with ice and ingredients such as flavored syrups and usually topped with whipped cream and or spices.`
        };

    break;

     // here we created case with Sundays Frappuccino special
    case 1:
        today = "Monday";

         coffee = {
            name: "Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of the bubble tea",
            color:"pink",
            day:"Monday",
            desc:`I love me some bubble tea! <br>
            <br> Bubble tea - you've heard the name.Popular beverage that originated in Taiwan that's often called boba tea, pearl milk tea, or simply boba.`
        };
 break;

  // here we created case with Tuesday Mocha special
    case 2:
           today = "Tuesday";  
             coffee = {
            name: "Mocha",
            pic:"images/mocha.jpg",
            alt:"A picture of the mocha",
            color:"Chocolate",
            day:"Tuesday",
            desc:`I heard Mocha! <br>
            <br> Caffè mocha is based on espresso and hot milk but with added chocolate flavouring and sweetener, typically in the form of cocoa powder and sugar.`
        };
    break;

     // here we created case with Wednesday Cramel Latte special
    case 3:
           today = "Wednesday"; 
           coffee = {
            name: "Cramel Latte",
            pic:"images/caramel-latte.jpg",
            alt:"A picture of the caramel latte",
            color:"white",
            day:"Wednesday",
            desc:`I's Caramel day!<br> 
            <br> A caramel latte is a coffee drink that contains espresso coffee, steamed and frothed milk, and caramel sauce. The espresso and milk are combined, and then the caramel syrup is mixed in.

            `
        };

    break;

     // here we created case with Thursday Cold Brew special
    case 4:
           today = "Thursday"; 
           coffee = {
            name: "Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"A picture of the cold brew",
            color:"black",
            day:"Thursday",
            desc:`Keep it simple! <br>
            <br>Cold brew coffee is one of the hottest things in coffee. It fills a nice niche in your coffee drinking schedule, is refreshing and sweet, and can be just as — or even more — convenient as popping a pod in a machine.`
        };

    break;

     // here we created case with Friday Pumpkin Spice Latte special
    case 5:
           today = "Friday"; 
           coffee = {
            name: "Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"A picture of the pumpkin spice latte",
            color:"orange",
            day:"Friday",
            desc:`Delicious Spice!<br>
            <br> Is a coffee drink made with a mix of traditional fall spice flavors`
        };

    break;

     // here we created case with Saturday Drip special
    case 6:
           today = "Saturday"; 
           coffee = {
            name: "Drip",
            pic:"images/drip.jpg",
            alt:"A picture of the caramel latte",
            color:"beige",
            day:"Saturday",
            desc:`Cold outside,warm inside! <br> Drip coffee is made by pouring hot water onto ground coffee beans, allowing it to brew`
        };

    break;

     default:
         today = "Day is Unknown";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);

