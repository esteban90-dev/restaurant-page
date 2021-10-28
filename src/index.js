import heading from "./heading.js";
import tabs from "./tabs.js";
import about from "./about.js";
import menu from "./menu.js";

//add main container
const container = document.createElement("div");
container.classList.add("container","max-width-8","m-auto");
document.querySelector("#content").appendChild(container);

//add heading
container.appendChild(heading());

//add tabs
container.appendChild(tabs());

//add page container
const page = document.createElement("div");
page.classList.add("mb-5");
page.setAttribute("id","#page");
container.appendChild(page);

//add about
page.appendChild(about());

//add event listeners
document.querySelector("#menu").addEventListener('click', ()=> {
  //clear the current page
  while(page.firstChild){
    page.removeChild(page.firstChild);
  }

  //render the menu page
  page.appendChild(menu());

  //change the menu tab to active

});

