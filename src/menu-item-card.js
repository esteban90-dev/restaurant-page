function menuItemCard(imagePath, description){
  //return a menu item 'card'
  const col = document.createElement("div");
  col.classList.add("col-12","col-6_lg","mb-5")

  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("width-100","height-100","object-fit-cover");

  const p = document.createElement("p");
  p.classList.add("text-center");
  p.innerHTML = description;

  col.appendChild(img);
  col.appendChild(p);
  
  return col;
}

export default menuItemCard;