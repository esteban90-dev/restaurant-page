function tabs(){
  //create tab container
  const row = document.createElement("div");
  row.classList.add("row","p-0");

  const col = document.createElement("div");
  col.classList.add("col-12","display-flex","justify-center");

  const aboutButton = document.createElement("input");
  aboutButton.setAttribute("type","button");
  aboutButton.setAttribute("value","about");
  aboutButton.setAttribute("id","about");
  aboutButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-white","mr-2","p-3");

  const menuButton = document.createElement("input");
  menuButton.setAttribute("type","button");
  menuButton.setAttribute("value","menu");
  menuButton.setAttribute("id","menu");
  menuButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3");

  const contactButton = document.createElement("input"); 
  contactButton.setAttribute("type","button");
  contactButton.setAttribute("value","contact");
  contactButton.setAttribute("id","contact");
  contactButton.classList.add("border-none","border-top","border-right","border-left","border-color-gray-500","bg-gray-200","bg-white","mr-2","p-3");

  col.appendChild(aboutButton);
  col.appendChild(menuButton);
  col.appendChild(contactButton);
  row.appendChild(col);

  return row;
}

function setTabActive(tabElement){
  //remove dark background if it exists
  if (tabElement.classList.contains("bg-gray-200")){
    tabElement.classList.remove("bg-gray-200");
  }

  //set white background if it doesnt exist
  if (!tabElement.classList.contains("bg-white")){
    tabElement.classList.add("bg-white");
  }
}

function setTabInactive(tabElement){
  //remove white background if it exists
  if (tabElement.classList.contains("bg-white")){
    tabElement.classList.remove("bg-white");
  }

  //set dark background if it doesn't exist
  if (!tabElement.classList.contains("bg-gray-200")){
    tabElement.classList.add("bg-gray-200");
  }
}

export { tabs, setTabActive, setTabInactive };