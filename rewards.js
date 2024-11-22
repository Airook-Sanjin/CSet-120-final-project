let Coupons = [
    {code:"EARLYBIRD", discount:30},
    {code:"WEFAMILY", discount:50},
    {code:"WALTER", discount:15},

    ];
    localStorage.setItem("Coupons", JSON.stringify(Coupons));
let clicked1 = false;
let clicked2 = false;
document.querySelector(".reward button").addEventListener("click", function () {
    if (!clicked1)
       {clicked1 = true;
        clicked2 = false;
        document.querySelector(".reward").style.display = "none";
            if(Coupons.length > 3){
            Coupons.pop();
            }else{}
            Coupons.push({code:"FIRSTTIME", discount:40});
            document.querySelector(".reward2").style.display = "block";
        
            localStorage.setItem("Coupons", JSON.stringify(Coupons));
            alert("Claimed!");
    }
    else{
        alert("A coupon has already been claimed")
    }
    
});

document.querySelector(".reward2 button").addEventListener("click", function () {
    if(!clicked2){
        clicked2 = true;
        clicked1 = false;
        document.querySelector(".reward2").style.display = "none";
        if(Coupons.length > 3){
            Coupons.pop();
        }else{}
        Coupons.push({code:"TWENTYOFF", discount:20});
        document.querySelector(".reward").style.display = "block";
        
        localStorage.setItem("Coupons", JSON.stringify(Coupons));
        alert("Claimed!");
    }else{
        alert("A coupon has already been claimed")
    }
});