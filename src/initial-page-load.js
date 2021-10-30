import heading from "./heading.js";
import about from "./about.js";
import { tabs } from "./tabs.js";

function initialPageLoad(){
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
  page.setAttribute("id","page");
  container.appendChild(page);

  //add about
  page.appendChild(about());
}

export default initialPageLoad;


