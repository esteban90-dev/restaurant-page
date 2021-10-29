function menuItemCard(imagePath, title, description){
  //return a menu item 'card'
  const col = document.createElement("div");
  col.classList.add("col-12","col-6_lg")

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("height-5","height-6_sm");
  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("width-100","height-100","object-fit-cover");
  imgDiv.appendChild(img);

  const pTitle = document.createElement("p");
  pTitle.innerHTML = title;

  const pDescription = document.createElement("p");
  pDescription.classList.add("text-xs","text-gray-600","mb-4");
  pDescription.innerHTML = description;

  col.appendChild(imgDiv);
  col.appendChild(pTitle);
  col.appendChild(pDescription);
  
  return col;
}

export default menuItemCard;