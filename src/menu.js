import menuItem from "./menu-item.js";

function menu(){
  const row = document.createElement("div");
  row.classList.add("row");

  const col1 = menuItem("./assets/img/ramen-noodles.JPG", "Ramen Noodles");
  const col2 = menuItem("./assets/img/tortilla-pbj.JPG", "PB&J Tortilla");
  const col3 = menuItem("./assets/img/stirfry-and-beer.JPG", "Stirfry and Beer");
  const col4 = menuItem("./assets/img/scalloped-potatoes.JPG", "Scalloped Potatoes");
  const col5 = menuItem("./assets/img/refried-beans.JPG", "Refried Beans");
  const col6 = menuItem("./assets/img/ratatouille.JPG", "Ratatouille");
  const col7 = menuItem("./assets/img/peas-carrots-fish.JPG", "Peas and Carrots with Canned Fish");
  const col8 = menuItem("./assets/img/oatmeal-and-coffee.JPG", "Oatmeal and Coffee");
  const col9 = menuItem("./assets/img/ramen-noodles.JPG", "Ramen Noodles");
  const col10 = menuItem("./assets/img/nutella.JPG", "Jar of Nutella");
  const col11 = menuItem("./assets/img/noodles.JPG", "Noodles");
  const col12 = menuItem("./assets/img/IMG_1015.JPG", "Canned Whole Chicken");
  const col13 = menuItem("./assets/img/fresh-vegetables.JPG", "Fresh Vegetables");
  const col14 = menuItem("./assets/img/dehydrated-refried-beans.JPG", "Dehyrated Refried Beans");
  const col15 = menuItem("./assets/img/cheesecake.JPG", "Frozen Aisle Cheesecake");
  const col16 = menuItem("./assets/img/canned-tamales.JPG", "Canned Tamales");
  const col17 = menuItem("./assets/img/canned-hamburger.JPG", "Canned Hamburger");
  const col18 = menuItem("./assets/img/baguette.JPG", "Bread");
  const col19 = menuItem("./assets/img/avocado-and-fish.JPG", "Avocado and Canned Fish");
  
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
  div.classList.add("bg-white","p-2","p-4_md","border-radius-3","shadow-md");
  div.appendChild(row);

  return div;
}

export default menu;