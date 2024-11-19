document.querySelectorAll(".item-card .close-button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    }); 
});

//  const addItemForm = document.getElementById("addItemForm");

//  addItemForm.addEventListener("submit", function (event) {
//      event.preventDefault();
//      const itemName = document.getElementById("itemName").value;
//     const itemPrice = document.getElementById("itemPrice").value;
//     const itemDescription = document.getElementById("itemDescription").value;

//     const addItemDisplay = document.querySelector(".add-item-display");
//      const itemCard = addItemDisplay.querySelector(".item-card");

//     itemCard.querySelector(".item-header").textContent = itemName;
//      itemCard.querySelector(".item-description").textContent = itemDescription;
//     itemCard.querySelector(".price span:nth-child(2)").textContent =`$${itemPrice}`;
//  });

//   function clearForm() {
//      document.getElementById("addItemForm").reset();
//  }



document.querySelectorAll(".item-card .close-button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    });
});

const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const choice = document.getElementById("choice").value;

    const itemsContainer =  document.querySelector("#create .items-container");

    const newItemCard = document.createElement("div");
    newItemCard.classList.add("item-card");

    newItemCard.innerHTML = `
    <div class="item-info">
    <h4 class="item-header">${itemName}</h4>
    <p class="item-description">${itemDescription}</p>
    <button class="close-button">X</button>
    </div>
    <div class="price"><span>$</span>${itemPrice}<span> <button class = "btn menu-add">Order Now</button></span></div>
    <div class = "item-image">
    <img src = " " alt = "${itemName}">
    </div>
    `;
const sectionId = choice.toLowerCase().replace(/ /g, '-');
const section = document.getElementById(sectionId);
if (section) {
    section.querySelector(".items-container").appendChild(newItemCard);
}
  


    newItemCard.querySelector(".close-button").addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    });

    clearForm();
    });
    function clearForm() {
       document.getElementById("itemName").value = "";
       document.getElementById("itemPrice").value = "";
       document.getElementById("itemDescription").value = "";
       
    }
