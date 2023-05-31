//alert("can you see this");

/*
Here are main things we'll likely need to store for each coffee:
 

name-the mane of the coffee
pic-the pic of the coffee
color-the color associated with the coffee
alt-the alt tag indentifying th coffee
day-the day of the week
desc-a description of the coffee
*/

let myDate=new Date();

let today = myDate.getDay();

//today = 3;

switch(today){

    case 2:
           today = "Tuesday";    
    break;

    case 3:
           today = "Wednesday";    
    break;


     default:
         today = "Day is Unknown";
}

let coffee = {
    name: "Bubble Tea",
    pic:"images/bubble-tea.jpg",
    alt:"A picture of the bubble tea",
    color:"pink",
    day:"Wednesday",
    desc:`I love me some bubble tea!`
}

console.log(coffee);

