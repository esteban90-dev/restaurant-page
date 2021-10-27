function aboutPage(){
  //create main container
  const container = document.createElement("div");
  container.classList.add("container","max-width-7","m-auto");

  //create heading container
  const headingRow = document.createElement("div");
  headingRow.classList.add("row");

  const headingCol = document.createElement("div");
  headingCol.classList.add("col-12");

  const headingP = document.createElement("p");
  headingP.classList.add("text-center","h2","h1_md");
  headingP.innerHTML = "The Dirtbag Diner";

  headingCol.appendChild(headingP);
  headingRow.appendChild(headingCol);

  //create tab container
  const tabRow = document.createElement("div");
  tabRow.classList.add("row","p-0");

  const tabCol = document.createElement("div");
  tabCol.classList.add("col-12","display-flex","justify-center");

  const aboutButton = document.createElement("input");
  aboutButton.setAttribute("type","button");
  aboutButton.setAttribute("value","about");
  aboutButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-white","mr-2","p-3");

  const menuButton = document.createElement("input");
  menuButton.setAttribute("type","button");
  menuButton.setAttribute("value","menu");
  menuButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3");

  const contactButton = document.createElement("input");
  contactButton.setAttribute("type","button");
  contactButton.setAttribute("value","contact");
  contactButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3");

  tabCol.appendChild(aboutButton);
  tabCol.appendChild(menuButton);
  tabCol.appendChild(contactButton);
  tabRow.appendChild(tabCol);

  //create image container
  const imageRow = document.createElement("div");
  imageRow.classList.add("row", "bg-white");

  const imageCol = document.createElement("div");
  imageCol.classList.add("col-12");

  const img = document.createElement("img");
  img.src = './assets/img/IMG_0818.JPG';
  img.classList.add("width-100");

  imageCol.appendChild(img);
  imageRow.appendChild(imageCol);

  //create text container
  const textRow = document.createElement("div");
  textRow.classList.add("row", "bg-white");

  const textCol = document.createElement("div");
  textCol.classList.add("col-12");

  const textP = document.createElement("p");
  textP.classList.add("text-justify");
  textP.innerHTML = "Are you tired of eating food that tastes good? Are you sick of maintaining your foodie image on instagram? Are you running out of money? Reset your palate, regain time lost on social media, and watch your wallet grow at the Dirtbag Diner. The food here is SO cheap we guarantee that you couldn't spend less by going to the grocery store.";

  textCol.appendChild(textP);
  textRow.appendChild(textCol);

  //append containers to main container
  container.appendChild(headingRow);
  container.appendChild(tabRow);
  container.appendChild(imageRow);
  container.appendChild(textRow);

  return container;
}

export default aboutPage;

