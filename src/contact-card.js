function contactCard(imagePath, name){
  const col = document.createElement("div");
  col.classList.add("col-12","col-4_lg");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("height-5","height-6_sm");
  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("width-100","height-100","object-fit-cover");
  imgDiv.appendChild(img);

  const p = document.createElement("p");
  p.innerHTML = name;
  p.classList.add("text-center","mb-4","mb-0_lg");

  //stick imageDiv and p elements into col
  col.appendChild(imgDiv);
  col.appendChild(p);

  return col;
}

export default contactCard;