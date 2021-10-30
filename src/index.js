import { setTabActive, setTabInactive } from "./tabs.js";
import about from "./about.js";
import menu from "./menu.js";
import contact from "./contact.js";
import initialPageLoad from "./initial-page-load.js";

initialPageLoad();
const page = document.querySelector("#page");
console.dir(page);

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

