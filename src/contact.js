import contactCard from './contact-card.js';

function contact(){
  //create row for contact info
  const row1 = document.createElement("div");
  row1.classList.add("row","justify-center");
  const col1 = document.createElement("div");
  col1.classList.add("col-12");
  const p = document.createElement("p");
  p.classList.add("text-justify");
  p.innerHTML = "The Dirtbag Diner has no permanent location. " +
  "You can find us in an old van with 'Dirtbag Diner' spray painted on the side.  We are usually parked in Walmart Parking lots or off of forest service roads. " +
  "We would provide more information about the van but the truth is the vans we drive are so old and decrepit that they don't last long. " +
  "We have no cellphones and don't exist on social media. Below are the founding members who live full time in the Dirtbag Diner van.";
  col1.appendChild(p);
  row1.appendChild(col1);

  //create row for person cards
  const row2 = document.createElement("div");
  row2.classList.add("row");

  //create person 'cards'
  const col2 = contactCard("./assets/img/your-boy-1.JPG", "Your Boy Alex");
  const col3 = contactCard("./assets/img/your-boy-2.JPG", "Your Boy Kit");
  const col4 = contactCard("./assets/img/your-boy-3.JPG", "Your Boy Eric");

  //stick cols into person card row
  row2.appendChild(col2);
  row2.appendChild(col3);
  row2.appendChild(col4);

  //stick both rows into div
  const div = document.createElement("div");
  div.appendChild(row1);
  div.appendChild(row2);

  return div;
}

export default contact;