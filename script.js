function signup(){ 
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    //console.log(email);
    //console.log(pass);

    localStorage.setItem(email, pass);
}

function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    //console.log(email);
    //console.log(pass);

    if(localStorage.getItem(email)) {
        if(pass == localStorage.getItem(email)){
            location.replace("home.html");
        }
        else{
            alert("Wrong Password");
        }
    }
    else{
        alert("User does not exist");
    }
}
