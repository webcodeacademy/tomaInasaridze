const nav = ["Today‘s Offers", "See New Products", "Log in / Registration", "Cart"];

const links = ["offers.html", "products.html", "logreg.html", "contact.html"];

let navtext = '<ul class="flex hide">';

for(i=0; i<nav.length; i++){
    navtext += '<li><a href=" ' + links[i] + '">' + nav[i] + "</a></li>";
    console.log(navtext);
}

navtext += "</ul>";

console.log(navtext);

document.getElementById("nav").innerHTML = navtext;