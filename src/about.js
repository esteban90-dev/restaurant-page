function about(){
  //create image container
  const imageRow = document.createElement("div");
  imageRow.classList.add("row");

  const imageCol = document.createElement("div");
  imageCol.classList.add("col-12");

  const img = document.createElement("img");
  img.src = './assets/img/IMG_0818.JPG';
  img.classList.add("width-100");

  imageCol.appendChild(img);
  imageRow.appendChild(imageCol);

  //create text container
  const textRow = document.createElement("div");
  textRow.classList.add("row");

  const textCol = document.createElement("div");
  textCol.classList.add("col-12");

  const textP = document.createElement("p");
  textP.classList.add("text-justify");
  textP.innerHTML = "Are you tired of eating food that tastes good? Are you sick of maintaining your foodie image on instagram? Are you running out of money? Reset your palate, regain time lost on social media, and watch your wallet grow at the Dirtbag Diner. The food here is SO cheap we guarantee that you couldn't spend less by going to the grocery store or the dollar menu.";

  textCol.appendChild(textP);
  textRow.appendChild(textCol);

  //stick containers into div
  const div = document.createElement("div");
  div.appendChild(imageRow);
  div.appendChild(textRow);

  return div;
}

export default about;


