function contactCard(imagePath, name){
  const col = document.createElement("div");
  col.classList.add("col-12","col-4_lg","mb-5","mb-0_lg");

  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("width-100","height-100","object-fit-cover");

  const p = document.createElement("p");
  p.innerHTML = name;
  p.classList.add("text-center");

  //stick image and p elements into col
  col.appendChild(img);
  col.appendChild(p);

  return col;
}

export default contactCard;