import menuItemCard from "./menu-item-card.js";

function menu(){
  const row = document.createElement("div");
  row.classList.add("row");

  const col1 = menuItemCard("./assets/img/ramen-noodles.JPG", "Ramen Noodles", "Hot water and the .25 cent pack of noodles.");
  const col2 = menuItemCard("./assets/img/tortilla-pbj.JPG", "PB&J Tortilla","Name says it all.");
  const col3 = menuItemCard("./assets/img/stirfry-and-beer.JPG", "Stirfry and Beer","Cooked on a $5 Walmart wok. No telling what the stirfry ingredients will be from day to day. The beer is always cold and cheap though.");
  const col4 = menuItemCard("./assets/img/scalloped-potatoes.JPG", "Scalloped Potatoes","The instant kind, from the box.");
  const col5 = menuItemCard("./assets/img/refried-beans.JPG", "Refried Beans","The fanciest of all meals here - these are made in an instant pot, frozen, then thawed out when you want em.");
  const col6 = menuItemCard("./assets/img/ratatouille.JPG", "Ratatouille","Can only find this stuff in France - hasn't caught on in the States yet.");
  const col7 = menuItemCard("./assets/img/peas-carrots-fish.JPG", "Peas and Carrots with Canned Fish","When you think you need more vitamins in your life.");
  const col8 = menuItemCard("./assets/img/oatmeal-and-coffee.JPG", "Oatmeal and Coffee","Our breakfast every morning.");
  const col10 = menuItemCard("./assets/img/nutella.JPG", "Jar of Nutella","This goes great in tortillas when you get tired of PB&J.");
  const col11 = menuItemCard("./assets/img/noodles.JPG", "Noodles","Can't remember what goes in here besides noodles.");
  const col12 = menuItemCard("./assets/img/IMG_1015.JPG", "Canned Whole Chicken","When you get tired of the rotisserie chickens from the grocery store.");
  const col13 = menuItemCard("./assets/img/fresh-vegetables.JPG", "Fresh Vegetables","Best raw or boiled.");
  const col14 = menuItemCard("./assets/img/dehydrated-refried-beans.JPG", "Dehyrated Refried Beans","What are you gonna eat when you run out of water?");
  const col15 = menuItemCard("./assets/img/cheesecake.JPG", "Frozen Aisle Cheesecake","This is best served half thawed - that way it's kinda like ice cream and kinda like cheesecake at the same time.");
  const col16 = menuItemCard("./assets/img/canned-tamales.JPG", "Canned Tamales","A delicious mess.");
  const col17 = menuItemCard("./assets/img/canned-hamburger.JPG", "Canned Hamburger","When you're far from civilization but need that burger fix.");
  const col18 = menuItemCard("./assets/img/baguette.JPG", "Bread","This is about all that's cheap in Europe.");
  const col19 = menuItemCard("./assets/img/avocado-and-fish.JPG", "Avocado and Canned Fish","If you mash it up real good it makes a good 'pate'.");
  
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  row.appendChild(col6);
  row.appendChild(col7);
  row.appendChild(col8);
  row.appendChild(col10);
  row.appendChild(col11);
  row.appendChild(col12);
  row.appendChild(col13);
  row.appendChild(col14);
  row.appendChild(col15);
  row.appendChild(col16);
  row.appendChild(col17);
  row.appendChild(col18);
  row.appendChild(col19);

  const div = document.createElement("div");
  div.appendChild(row);

  return div;
}

export default menu;