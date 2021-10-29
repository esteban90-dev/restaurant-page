import menuItemCard from "./menu-item-card.js";

function menu(){
  const row = document.createElement("div");
  row.classList.add("row");

  const col1 = menuItemCard("./assets/img/ramen-noodles.JPG", "Ramen Noodles");
  const col2 = menuItemCard("./assets/img/tortilla-pbj.JPG", "PB&J Tortilla");
  const col3 = menuItemCard("./assets/img/stirfry-and-beer.JPG", "Stirfry and Beer");
  const col4 = menuItemCard("./assets/img/scalloped-potatoes.JPG", "Scalloped Potatoes");
  const col5 = menuItemCard("./assets/img/refried-beans.JPG", "Refried Beans");
  const col6 = menuItemCard("./assets/img/ratatouille.JPG", "Ratatouille");
  const col7 = menuItemCard("./assets/img/peas-carrots-fish.JPG", "Peas and Carrots with Canned Fish");
  const col8 = menuItemCard("./assets/img/oatmeal-and-coffee.JPG", "Oatmeal and Coffee");
  const col10 = menuItemCard("./assets/img/nutella.JPG", "Jar of Nutella");
  const col11 = menuItemCard("./assets/img/noodles.JPG", "Noodles");
  const col12 = menuItemCard("./assets/img/IMG_1015.JPG", "Canned Whole Chicken");
  const col13 = menuItemCard("./assets/img/fresh-vegetables.JPG", "Fresh Vegetables");
  const col14 = menuItemCard("./assets/img/dehydrated-refried-beans.JPG", "Dehyrated Refried Beans");
  const col15 = menuItemCard("./assets/img/cheesecake.JPG", "Frozen Aisle Cheesecake");
  const col16 = menuItemCard("./assets/img/canned-tamales.JPG", "Canned Tamales");
  const col17 = menuItemCard("./assets/img/canned-hamburger.JPG", "Canned Hamburger");
  const col18 = menuItemCard("./assets/img/baguette.JPG", "Bread");
  const col19 = menuItemCard("./assets/img/avocado-and-fish.JPG", "Avocado and Canned Fish");
  
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