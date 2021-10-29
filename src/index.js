import heading from "./heading.js";
import { tabs, setTabActive, setTabInactive } from "./tabs.js";
import about from "./about.js";
import menu from "./menu.js";
import contact from "./contact.js";

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
page.classList.add("mb-5","bg-white","p-2","p-4_md","border-radius-3","shadow-lg");
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
  setTabActive(document.querySelector("#menu"));

  //change the about/contact tabs to inactive
  setTabInactive(document.querySelector("#about"));
  setTabInactive(document.querySelector("#contact"));
});

document.querySelector("#about").addEventListener('click', ()=> {
  //clear the current page
  while(page.firstChild){
    page.removeChild(page.firstChild);
  }

  //render the about page
  page.appendChild(about());

  //change the about tab to active
  setTabActive(document.querySelector("#about"));

  //change the menu/contact tabs to inactive
  setTabInactive(document.querySelector("#menu"));
  setTabInactive(document.querySelector("#contact"));
});

document.querySelector("#contact").addEventListener('click', ()=> {
  //clear the current page
  while(page.firstChild){
    page.removeChild(page.firstChild);
  }

  //render the contact page
  page.appendChild(contact());

  //change the contact tab to active
  setTabActive(document.querySelector("#contact"));

  //change the about/menu tabs to inactive
  setTabInactive(document.querySelector("#about"));
  setTabInactive(document.querySelector("#menu"));
});

