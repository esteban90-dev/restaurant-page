function menuItem(imagePath, description){
  //return a menu item 'card'
  const col = document.createElement("div");
  col.classList.add("col-12","mb-4")

  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("width-100");

  const p = document.createElement("p");
  p.classList.add("text-center");
  p.innerHTML = description;

  col.appendChild(img);
  col.appendChild(p);
  
  return col;
}

export default menuItem;