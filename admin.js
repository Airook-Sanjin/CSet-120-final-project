

//Delete item
document.querySelectorAll(".item-card .close-button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    });
});

//add item
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

    //clear form
    function clearForm() {
       document.getElementById("itemName").value = "";
       document.getElementById("itemPrice").value = "";
       document.getElementById("itemDescription").value = "";
       
    }

    //Store deleted items in an array 
    const deletedItems = [];

    //Delete item function 
    document.querySelectorAll(".item-card .close-button").forEach(button => {
        button.addEventListener("click", function () {
            const itemCard = this.closest(".item-card");
            const itemData = {
                itemName: itemCard.querySelector(".item-header").textContent,
                itemDescription: itemCard.querySelector(".item-description").textContent,
                itemPrice: itemCard.querySelector(".price span").textContent,
            };
            deletedItems.push(itemData);
            itemCard.style.display = "none";
        });
    });
    
    //Respawn all items button 
    const respawnButton = document.getElementById("respawnButton");

    respawnButton.addEventListener("click", function () {
        deletedItems.forEach(itemData => {
        const newItemCard = document.createElement("div");
        newItemCard.classList.add("item-card");
        newItemCard.innerHTML = `
        <div class="item-info">
        <h4 class="item-header">${itemData.itemName}</h4>
        <p class="item-description">${itemData.itemDescription}</p>
        </div>
        <div class="price"><span>$</span>${itemData.itemPrice}</div>
        `;

        const itemsContainer = document.querySelector("items.container");
        itemsContainer.appendChild(newItemCard);
        });

        deletedItems.length = 0;
    });


    