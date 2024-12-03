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






