function heading(){
  const row = document.createElement("div");
  row.classList.add("row");
  
  const col = document.createElement("div");
  col.classList.add("col-12");
  
  const p = document.createElement("p");
  p.classList.add("text-center","h2","h1_md");
  p.innerHTML = "The Dirtbag Diner";
  
  col.appendChild(p);
  row.appendChild(col);

  return row;
}

export default heading;




