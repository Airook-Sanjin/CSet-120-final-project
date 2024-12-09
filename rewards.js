let Coupons = [
    {code:"EARLYBIRD", discount:30},
    {code:"WEFAMILY", discount:50},
    {code:"WALTER", discount:15},
    {code:"RESTGUS", discount:80}

    ];
let modalClicked = false
    localStorage.setItem("Coupons", JSON.stringify(Coupons));
let clicked1 = false;
let clicked2 = false;
document.querySelector(".reward button").addEventListener("click", function () {
    if (!clicked1)
       {clicked1 = true;
        clicked2 = false;
        document.querySelector(".reward").style.display = "none";
            if(Coupons.length > 4){
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
        if(Coupons.length > 4){
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


 //  -----------------------------------------------------------------------
  //                                Nav logo
  //  -----------------------------------------------------------------------
  let LogoDiv = document.getElementsByClassName("logo")[0]
  console.log(LogoDiv)
  LogoDiv.addEventListener("click",function(){
    location.replace("index.html");
  })
  //  -----------------------------------------------------------------------
  //                                Modal
  //  -----------------------------------------------------------------------
  function delOrPickModal(){
    let deliveryForm = document.getElementsByClassName("form-container")[0];
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    let Deliverybtn = document.getElementsByClassName("DeliveryDiv")[0];
    let Pickupbtn = document.getElementsByClassName("PickupDiv")[0];
    let indicator = document.getElementsByClassName("location-button")[0];
    
    console.log(deliveryForm)
    Deliverybtn.addEventListener("click", function () {
      if(indicator){indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Delivery`;}
      
      deliveryForm.innerHTML = `<div class="Main Loc-container">
                    <div class="Address-Container">
                      <div class="Address">
                        <h6>Street Address <span class="star">*</span></h6>
                        <input
                          type="text"
                          placeholder="123 Main St"
                          id="StreetAddress"
                          required
                        />
                      </div>
                      <div class="AddressLine2">
                        <h6>Address Line 2</h6>
                        <input
                          type="text"
                          placeholder="Apt, Suite, Unit, etc."
                          id="AddressLine2"
                        />
                      </div>
                    </div>
                    <div class="City-State">
                      <div class="City-Container">
                        <h6>City <span class="star">*</span></h6>
                        <input
                          type="text"
                          placeholder="City"
                          id="City"
                          required
                        />
                      </div>
  
                      <div class="State-Container">
                        <h6>State/Province/Region <span class="star">*</span></h6>
                        <select id="State" required>
                          <option value="" disabled selected>
                            Select State/Province
                          </option>
                          <option value="">Select State</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    </div>
  
                    <div class="Zip-Container">
                      <h6>ZIP/Postal Code <span class="star">*</span></h6>
                      <input
                        type="text"
                        placeholder="ZIP/Postal Code"
                        id="ZipCode"
                        required
                      />
                    </div>
                  </div>
                  <div class="Menu in-container">
                    <label for="Date"><h4>Choose Date:</h4></label>
                    <select name="Date" id="Date-Dropdown">
                      <option value="Today">Today</option>
                      <option value="tomorrow">tomorrow</option>
                      <option value="11/10">11/10</option>
                      <option value="11/11">11/11</option>
                    </select>
                  </div>
                  <div class="Menu in-container">
                    <label for="Time"><h4>Choose Time:</h4></label>
                    <select name="Date" id="time-Dropdown">
                      <option value="12:00pm">12:00pm</option>
                      <option value="12:30pm">12:30pm</option>
                      <option value="1:00pm">1:00pm</option>
                      <option value="1:30pm">1:30pm</option>
                    </select>
                  </div>`;
    });
    Pickupbtn.addEventListener("click", function () {
      if(indicator){indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`;}
      
      deliveryForm.innerHTML = `
      <div class="Address-Container">
                      <div class="Address">
                        <h6>Store Address <span class="star">*</span></h6>
                        <input
                          type="text"
                          placeholder="123 Main St"
                          id="StreetAddress"
                          required
                        />
                      </div>
                      </div>
                      <div class="Menu in-container">
                    <label for="Date"><h4>Choose Date:</h4></label>
                    <select name="Date" id="Date-Dropdown">
                      <option value="Today">Today</option>
                      <option value="tomorrow">tomorrow</option>
                      <option value="11/10">11/10</option>
                      <option value="11/11">11/11</option>
                    </select>
                  </div>
                  <div class="Menu in-container">
                    <label for="Time"><h4>Choose Time:</h4></label>
                    <select name="Date" id="time-Dropdown">
                      <option value="12:00pm">12:00pm</option>
                      <option value="12:30pm">12:30pm</option>
                      <option value="1:00pm">1:00pm</option>
                      <option value="1:30pm">1:30pm</option>
                    </select>
                  </div>`;
    });
    let closebtn = document.getElementsByClassName("Closebtn")[0];
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display="block"
    closebtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
    
    let CustomerLocInfo = [];
    let cStreet = document.getElementById("StreetAddress");
    let cStreet2 = document.getElementById("AddressLine2");
    let cCity = document.getElementById("City");
    let cSPR = document.getElementById("State");
    let cZIP = document.getElementById("ZipCode");
    let cDate = document.getElementById("Date-Dropdown");
    let cTime = document.getElementById("time-Dropdown");
    let Updatebtn = document.getElementsByClassName("Update-Btn")[0];
  
    Updatebtn.addEventListener("click", function () {
      if (CustomerLocInfo.length > 0) {
        CustomerLocInfo.pop();
      } else {
        console.log(
          cStreet.value,
          cStreet2.value,
          cCity.value,
          cSPR.value,
          cZIP.value,
          cDate.value,
          cTime.value
        );
        CustomerLocInfo.push({
          StreetA: cStreet.value,
          Street2: cStreet2.value,
          City: cCity.value,
          SPR: cSPR.value,
          ZIP: cZIP.value,
          date: cDate.value,
          Time: cTime.value,
        });
        localStorage.setItem("CustomerLocInfos", JSON.stringify(CustomerLocInfo));
      }
      modal.style.display = "none";
    });
    
    
  }
  let modalBtn = document.getElementsByClassName("Modalbutton")[0];
  modalBtn.addEventListener("click", function(){
    let deliveryForm = document.getElementsByClassName("form-container")[0];
    if(!modalClicked){
      modalClicked = true
      deliveryForm.innerHTML = `<div class="Main Loc-container">
    <div class="Address-Container">
      <div class="Address">
        <h6>Street Address <span class="star">*</span></h6>
        <input
          type="text"
          placeholder="123 Main St"
          id="StreetAddress"
          required
        />
      </div>
      <div class="AddressLine2">
        <h6>Address Line 2</h6>
        <input
          type="text"
          placeholder="Apt, Suite, Unit, etc."
          id="AddressLine2"
        />
      </div>
    </div>
    <div class="City-State">
      <div class="City-Container">
        <h6>City <span class="star">*</span></h6>
        <input
          type="text"
          placeholder="City"
          id="City"
          required
        />
      </div>
  
      <div class="State-Container">
        <h6>State/Province/Region <span class="star">*</span></h6>
        <select id="State" required>
          <option value="" disabled selected>
            Select State/Province
          </option>
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    </div>
  
    <div class="Zip-Container">
      <h6>ZIP/Postal Code <span class="star">*</span></h6>
      <input
        type="text"
        placeholder="ZIP/Postal Code"
        id="ZipCode"
        required
      />
    </div>
  </div>
  <div class="Menu in-container">
    <label for="Date"><h4>Choose Date:</h4></label>
    <select name="Date" id="Date-Dropdown">
      <option value="Today">Today</option>
      <option value="tomorrow">tomorrow</option>
      <option value="11/10">11/10</option>
      <option value="11/11">11/11</option>
    </select>
  </div>
  <div class="Menu in-container">
    <label for="Time"><h4>Choose Time:</h4></label>
    <select name="Date" id="time-Dropdown">
      <option value="12:00pm">12:00pm</option>
      <option value="12:30pm">12:30pm</option>
      <option value="1:00pm">1:00pm</option>
      <option value="1:30pm">1:30pm</option>
    </select>
  </div>`;
    }
    
    delOrPickModal()
  })


//apply coupon to Final Cart Page 

