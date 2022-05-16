const getContentDiv = document.getElementById("content");

function contact() {
  const contactSection = document.createElement("section");
  const AddrInfo = document.createElement("article");
  const contTitle = document.createElement("h1");
  const contAddr = document.createElement("p");
  const contPhone = document.createElement("p");

  contactSection.classList.add("tabcontent");
  contactSection.setAttribute("id", "Contact");

  contTitle.innerHTML = "INDOOR & OUTDOOR DINING // TAKEOUT & DELIVERY";
  contAddr.innerHTML = "250 Broome Street, New York, NY, 10002";
  contPhone.innerHTML = "(347) 778-5889";

  AddrInfo.append(contTitle, contAddr, contPhone);
  contactSection.append(AddrInfo);

  getContentDiv.append(contactSection);
}

export { contact };
