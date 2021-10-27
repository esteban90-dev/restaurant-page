import aboutPage from "./about.js";

const content = document.querySelector("#content");
while(content.firstChild){
  content.removeChild(content.firstChild);
}
content.appendChild(aboutPage());