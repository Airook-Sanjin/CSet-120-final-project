document.querySelectorAll(".item-card .close-button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    }); 
});

const addItemForm = document.getElementById("add-item-form");
const addItemButton = document.getElementById("add-item-button");
const menu = document.getElementById("menu");

addItemButton.addEventListener("click", (e) => {
    e.preventDefault();

    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-description").value;
    const itemPrice = document.getElementById("item-price").value;
 

    const newItem = document.createElement("div");
    newItem.innerHTML = `
    <h2>${itemName}</h2>
    <p>${itemDescription}</p>
    <p>Price: $${itemPrice}</p>

    `;


menu.appendChild(newItem);

});

