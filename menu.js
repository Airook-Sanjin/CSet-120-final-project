

function joinAsGuest() {
  let hasJoinedAsGuest = false;
  let status = localStorage.getItem("userStatus");
  if(!status || !status.includes("guest")){
    console.log("Logged as guest")
  localStorage.setItem("userStatus", "guest");
    hasJoinedAsGuest = true
  }

}
joinAsGuest;

let StoredLosPollosCaterMenu = JSON.parse(localStorage.getItem("LosPollosCaterMenu"));
	if(!StoredLosPollosCaterMenu){
		let InitialLosPollosCaterMenu = 
	{

		SandwichPartyPackage: [
			{
				Itemid: 1,
				Name: '15 Person Sandwich Party',
				Price: 299,
				Description:
					'Includes: Choice of Chicken Sandwiches, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, Choice of 2 Sauces, Napkins, Plates, and Serving Utensils.',
				image: 'menu2/side-party.jpg',
			},
			{
				Itemid: 2,
				Name: '30 Person Sandwich Party',
				Price: 399,
				Description:
					'Includes: Choice of Chicken Sandwiches, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, Choice of 2 Sauces, Napkins, Plates, and Serving Utensils.',
				image: 'menu2/sando-party.jpg',
			},
			{
				Itemid: 3,
				Name: '40 Person Sandwich Party',
				Price: 599,
				Description:
					'Includes: Choice of Chicken Sandwiches, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, Choice of 2 Sauces, Napkins, Plates, and Serving Utensils.',
				image: 'menu2/sando-party.jpg',
			},
			{
				Itemid: 4,
				Name: '50 Person Sandwich Party',
				Price: 399,
				Description:
					'Includes: Choice of Chicken Sandwiches, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, Choice of 2 Sauces, Napkins, Plates, and Serving Utensils.',
				image: 'menu2/sando-party.jpg',
			},
		],
		ChickenBuffetPackage: [
			{
				Itemid: 1,
				Name: '15 Person Pollo Buffet Paackage',
				Price: 244,
				Description:
					'Package Includes: 1/4 Chicken Per Person, Choice of 3 Sides, Choice of 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/sando-party.jpg',
			},
			{
				Itemid: 2,
				Name: '30 Person Pollo Buffet Paackage',
				Price: 449,
				Description:
					'Package Includes: 1/4 Chicken Per Person, Choice of 3 Sides, Choice of 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/sando-party.jpg',
			},
			{
				Itemid: 3,
				Name: '40 Person Pollo Buffet Paackage',
				Price: 599,
				Description:
					'Package Includes: 1/4 Chicken Per Person, Choice of 3 Sides, Choice of 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/sando-party.jpg',
			},
			{
				Itemid: 4,
				Name: '15 Person Pollo Buffet Paackage',
				Price: 749,
				Description:
					'Package Includes: 1/4 Chicken Per Person, Choice of 3 Sides, Choice of 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/sando-party.jpg',
			},
		],
		TendersFriesPackage: [
			{
				Itemid: 1,
				Name: '25 Person Tenders and Fries Package',
				Price: 35,
				Description:
					'Package Includes: Boxes of Pollo Signature Tenders and Curly Fries, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 2,
				Name: '50 Person Tenders and Fries Package',
				Price: 64,
				Description:
					'Package Includes: Boxes of Pollo Signature Tenders and Curly Fries, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 3,
				Name: '100 Person Tenders and Fries Package',
				Price: 100,
				Description:
					'Package Includes: Boxes of Pollo Signature Tenders and Curly Fries, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 4,
				Name: '150 Person Tenders and Fries Package',
				Price: 160,
				Description:
					'Package Includes: Boxes of Pollo Signature Tenders and Curly Fries, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
		],
		SideLoversPackage: [
			{
				Itemid: 1,
				Name: '15 Person Side Lovers Package',
				Price: 99,
				Description:
					'Package Includes: Chicken Nuggets, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 2,
				Name: '30 Person Side Lovers Package',
				Price: 99,
				Description:
					'Package Includes: Chicken Nuggets, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 3,
				Name: '50 Person Side Lovers Package',
				Price: 399,
				Description:
					'Package Includes: Chicken Nuggets, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
			{
				Itemid: 4,
				Name: '100 Person Side Lovers Package',
				Price: 499,
				Description:
					'Package Includes: Chicken Nuggets, Chicken Tenders, Large Fries, Nachos, Choice of 1 Extra Side, 2 Sauces, Napkins, Utensils, Plates, and Serving Utensils',
				image: 'menu2/tender-party.jpg',
			},
		],
	};
	localStorage.setItem(
		'LosPollosCaterMenu',
		JSON.stringify(InitialLosPollosCaterMenu)
	);
	StoredLosPollosCaterMenu = InitialLosPollosCaterMenu;
}
let modalClicked = false;
function delOrPickModal() {
	let deliveryForm = document.getElementsByClassName('form-container')[0];
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
	let Deliverybtn = document.getElementsByClassName('DeliveryDiv')[0];
	let Pickupbtn = document.getElementsByClassName('PickupDiv')[0];
	let indicator = document.getElementsByClassName('location-button')[0];

	console.log(deliveryForm);
	Deliverybtn.addEventListener('click', function () {
		if (indicator) {
			indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Delivery`;
		}

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
	Pickupbtn.addEventListener('click', function () {
		if (indicator) {
			indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`;
		}

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
	let closebtn = document.getElementsByClassName('Closebtn')[0];
	let modal = document.getElementsByClassName('modal')[0];
	modal.style.display = 'block';
	closebtn.addEventListener('click', function () {
		modal.style.display = 'none';
	});

	let CustomerLocInfo = [];
	let cStreet = document.getElementById('StreetAddress');
	let cStreet2 = document.getElementById('AddressLine2');
	let cCity = document.getElementById('City');
	let cSPR = document.getElementById('State');
	let cZIP = document.getElementById('ZipCode');
	let cDate = document.getElementById('Date-Dropdown');
	let cTime = document.getElementById('time-Dropdown');
	let Updatebtn = document.getElementsByClassName('Update-Btn')[0];

	Updatebtn.addEventListener('click', function () {
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
			localStorage.setItem('CustomerLocInfos', JSON.stringify(CustomerLocInfo));
		}
		modal.style.display = 'none';
	});
}

function caterDisplay() {
	console.log('DisplayCater');
	if (StoredLosPollosCaterMenu) {
		let menuContainer = document.getElementById('MenuContainer');
		if (document.getElementById('CaterMenuPage')) {
			menuContainer.innerHTML = ``;
		} else if (document.getElementById('ManagerPage')) {
			menuContainer.innerHTML = `<div class="items-container">
			<button id ="AddItemsButton">Add Item</button>
		</div>
		<section class = "Modal Manager">
		<div class="popup-container">
<form id="addItemForm" class="popup-card">
	<label for="itemName">Item Name:</label>
	<input required placeholder="Enter Item Name" type="text" id="itemName" name="itemName"><br><br>
	<label  for="itemPrice">Item Price:</label>
	<input step="any" required placeholder="Enter Price Ex:00.00" type="number" id="itemPrice" name="itemPrice"><br><br>
	<label for="itemDescription">Item Description:</label>
	<textarea required placeholder="Enter Item Description" id="itemDescription" name="itemDescription"></textarea><br><br>
	<select required name = "ItemCategory" id="ItemCategory">
	<option value="" >-ChooseCategory</option>
		<option value="BreakfastSpecialties">Breakfast Specialties</option>
		<option value="PollosBurritos">Pollos Burritos</option>
		<option value="PollosSpecialties">Pollos Specialties</option>
		<option value="Sides">Sides</option>
		<option value="Sandwiches">Sandwiches</option>
		<option value="Desserts">Desserts</option>
		<option value="Beverages">Beverages</option>
	</select><br><br>
	<label for="itemImage">Item Image:</label>
	<input required placeholder="Enter Image url" type="text" id="itemImage" name="itemImage"><br><br>
	<img class ="PlaceholderImage" src=""/><br><br>
	<input id ="SubmitItem" type="submit" value="Add Item">
	
  </form>
  </div>
  </section>
  <section class = "Modal ManagerEDIT">
		<div class="popup-container">
<form id="addItemForm" class="popup-card">
	<label for="itemName">Item Name:</label>
	<input required placeholder="Enter Item Name" type="text" id="EDITitemName" name="itemName"><br><br>
	<label for="itemPrice">Item Price:</label>
	<input step="any" required placeholder="Enter Price Ex:00.00" type="number" id="EDITitemPrice" name="itemPrice"><br><br>
	<label for="itemDescription">Item Description:</label>
	<textarea required placeholder="Enter Item Description" id="EDITitemDescription" name="itemDescription"></textarea><br><br>
	<select required name = "ItemCategory" id="EDITItemCategory">
	<option value="" >-ChooseCategory</option>
		<option value="BreakfastSpecialties">Breakfast Specialties</option>
		<option value="PollosBurritos">Pollos Burritos</option>
		<option value="PollosSpecialties">Pollos Specialties</option>
		<option value="Sides">Sides</option>
		<option value="Sandwiches">Sandwiches</option>
		<option value="Desserts">Desserts</option>
		<option value="Beverages">Beverages</option>
	</select><br><br>
	<label for="itemImage">Item Image:</label>
	<input required placeholder="Enter Image url" type="text" id="EDITitemImage" name="itemImage"><br><br>
	<img class ="PlaceholderImage" src=""/><br><br>
	<input id ="UpdateItem" type="submit" value="Update Item">
	
  </form>
  </div>
  </section>
  `;
		}

		let bttBtn = document.createElement('button');
		bttBtn.id = 'topBtn';
		bttBtn.title = 'Back To Top';
		bttBtn.innerHTML = '&uarr;';

		for (let section in StoredLosPollosCaterMenu) {
			let headerSection = document.createElement('section');
			headerSection.id = section
				.replace(/\$1/g, '')
				.replace(/([A-Z])/g, `$1`)
				.trim('');

			if (document.getElementById('CaterMenuPage')) {
				menuContainer.appendChild(headerSection);
			} else if (document.getElementById('ManagerPage')) {
				menuContainer.insertAdjacentElement('afterbegin', headerSection);
			}
			let menuHeading = document.createElement('div');
			menuHeading.className = 'menu-heading title-style';
			headerSection.appendChild(menuHeading);
			let sectionHeader = document.createElement('h2');
			sectionHeader.innerText = section.replace(/([A-Z])/g, ` $1`); //Formatting of category name
			sectionHeader.className = 'section-title';

			menuHeading.appendChild(sectionHeader);
			let itemsContainer = document.createElement('div');
			itemsContainer.className = 'items-container';
			headerSection.appendChild(itemsContainer);

			StoredLosPollosCaterMenu[section].forEach((item) => {
				let itemCard = document.createElement('div');
				itemCard.className = 'item-card';
				let ItemImgDiv = document.createElement('div');
				ItemImgDiv.className = 'item-img';
				let ItemImage = document.createElement('img');
				ItemImage.src = item.image;
				ItemImage.alt = item.Name;
				ItemImgDiv.appendChild(ItemImage);

				let ItemInfoDiv = document.createElement('div');
				ItemInfoDiv.className = 'item-info';

				let ItemName = document.createElement('h4');
				ItemName.className = 'item-header';
				ItemName.innerText = item.Name;

				let priceDiv = document.createElement('div');
				priceDiv.className = 'price';
				priceDiv.innerHTML = `$<span>${item.Price}</span`;

				let itemDescription = document.createElement('p');
				itemDescription.innerText = item.Description;

				let cardBottom = document.createElement('div');
				cardBottom.className = 'card-bottom';
				let menuAddBtn = document.createElement('button');
				menuAddBtn.className = 'btn menu-add';
				menuAddBtn.innerHTML = 'Order Now';

				itemCard.appendChild(ItemImgDiv);
				ItemInfoDiv.appendChild(ItemName);
				ItemInfoDiv.appendChild(priceDiv);
				ItemInfoDiv.appendChild(itemDescription);
				ItemInfoDiv.appendChild(cardBottom);
				cardBottom.appendChild(menuAddBtn);
				itemCard.appendChild(ItemInfoDiv);
				itemsContainer.appendChild(itemCard);
				menuContainer.appendChild(bttBtn);
			});
		}
	} else {
		console.log('No More Items Found In Storage');
	}
}

document.addEventListener('DOMContentLoaded', ready);
//  -----------------------------------------------------------------------
//                                Nav logo
//  -----------------------------------------------------------------------
let LogoDiv = document.getElementsByClassName('logo')[0];
console.log(LogoDiv);
LogoDiv.addEventListener('click', function () {
	location.replace('index.html');
});

function ready() {
	StoredLosPollosCaterMenu =
		JSON.parse(localStorage.getItem('LosPollosCaterMenu')) || {};
	caterDisplay();
	// makes sure the each add to cart buttons work
	let AddtoCart = document.getElementsByClassName('menu-add');
	for (let i = 0; i < AddtoCart.length; i++) {
		let AddtoCartBtn = AddtoCart[i];
		AddtoCartBtn.addEventListener('click', addToCartClicked);
	}
}

function addToCartClicked(event) {
	let button = event.target;
	console.log(button);
	let shopItem = button.parentElement.parentElement.parentElement;
	console.log(shopItem);
	let Title = shopItem.getElementsByClassName('item-header')[0].innerText;
	console.log(Title);

	let Price = shopItem
		.getElementsByClassName('price')[0]
		.getElementsByTagName('span')[0].innerText;
	console.log(Price);
	let foodImage = shopItem
		.getElementsByClassName('item-img')[0]
		.getElementsByTagName('img')[0].src;
	console.log(foodImage);

	let ItemInfo = {
		foodTitle: Title,
		foodPrice: Price,
		foodImg: foodImage,
		foodquantity: 1,
	};
	let existingItems = JSON.parse(localStorage.getItem('StoredItems')) || [];

	let existingItemsindex = existingItems.findIndex(
		(item) => item.foodTitle === Title
	);
	if (existingItemsindex > -1) {
		existingItems[existingItemsindex].foodquantity += 1;
		console.log(existingItems[existingItemsindex].foodquantity);
		// alert("Item is already in cart")
	} else {
		existingItems.push(ItemInfo);
		// localStorage.setItem("StoredItems", JSON.stringify(existingItems));
	}
	localStorage.setItem('StoredItems', JSON.stringify(existingItems));
}

let modalBtn = document.getElementsByClassName('Modalbutton')[0];
modalBtn.addEventListener('click', function () {
	let deliveryForm = document.getElementsByClassName('form-container')[0];
	if (!modalClicked) {
		modalClicked = true;
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
	delOrPickModal();
});
//  -----------------------------------------------------------------------
//                                OnScroll Function
//  -----------------------------------------------------------------------
let topButton = document.getElementById('topBtn');
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = 'block';
	} else {
		topButton.style.display = 'none';
	}
}
topButton.addEventListener('click', backToTop);
function backToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
