const managerInfo = {
    email: "LosPollosManager81@gmail.com",
    password: "GusFring2425"
};

function login () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === managerInfo.email && password === managerInfo.password) {
        location.replace("index.html");
        alert("Logged in as manager");
    } else {
        alert("Incorrect");
    }
}



function loggedInAsMangager () {
    return sessionStorage.getItem(loggedInAsMangager) === "true";
}


function deleteItem (id) {
    const element = document.getElementById(id);
    element.remove();
}


function addItem () {
    
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;
    const item = document.createElement("div");
    item.classList.add("item-card");
    item.innerHTML = `
        <div class="item-info">
            <h4 class="item-header">${name}</h4>
            <p class="item-description">${price}</p>
        </div>
        <div class="price"><span>$</span>${price}<span> <button class="btn menu-add">Add to Cart</button></span></div>
        <div class="item-img">
            <img src = "${img}" alt = "${name}">
        </div>
    `;
    document.getElementById("items").appendChild(item);
}