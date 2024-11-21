function initializeSignInPage() {
	function signup() {
		let email = document.getElementById('email').value;
		let pass = document.getElementById('password').value;
		const passwordRequirements = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		//console.log(email);
		//console.log(pass);

		localStorage.setItem(email, pass);
		if (!passwordRequirements.test(pass)) {
			alert(
				'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.'
			);
		}
		if (localStorage.getItem(email)) {
			if (passwordRequirements.test(pass)) {
				location.replace('index.html');
			}
		} else {
			alert('User does not exist');
		}
	}

	function login() {
		let email = document.getElementById('email').value;
		let pass = document.getElementById('password').value;
		//console.log(email);
		//console.log(pass);

		if (email == managerInfo.email && pass == managerInfo.password) {
			location.replace('index.html');
			alert('Logged in as manager');
		} else if (localStorage.getItem(email)) {
			if (pass == localStorage.getItem(email)) {
				location.replace('index.html');
			} else {
				alert('Wrong Password');
			}
		} else {
			alert('User does not exist');
		}
	}
	document.getElementById('Signup-btn').addEventListener('click', signup);
	document.getElementById('Login-btn').addEventListener('click', login);
}
// ----------------------------------------------------------------------------------------------------------
function initializeMainPage() {
	//  -----------------------------------------------------------------------
	//                                Modal Boxes
	//  -----------------------------------------------------------------------
	let MainmodalBtn = document.getElementsByClassName('Modalbutton Main')[0];

	let Mainmodal = document.getElementsByClassName('modal Main')[0];
	let Mainclosebtn = document.getElementsByClassName('Closebtn Main')[0];
	MainmodalBtn.addEventListener('click', function () {
		console.log(MainmodalBtn);
		Mainmodal.style.display = 'block';
	});
	Mainclosebtn.addEventListener('click', function () {
		Mainmodal.style.display = 'none';
	});
	window.onclick = function (event) {
		if (event.target == Mainmodal) {
			Mainmodal.style.display = 'none';
		}
	};
	let logo = document.getElementById('logo');
	logo.addEventListener('click', function () {
		location.replace('index.html');
	});
	let mainDeliverybtn = document.getElementsByClassName('Delivery-Main')[0];
	let mainPickupbtn = document.getElementsByClassName('Pickup-Main')[0];

	let maindeliveryForm =
		document.getElementsByClassName('Main-in-container')[0];
	mainDeliverybtn.addEventListener('click', function () {
		maindeliveryForm.style.display = 'block';
	});
	mainPickupbtn.addEventListener('click', function () {
		maindeliveryForm.style.display = 'none';
	});
	//  -----------------------------------------------------------------------
	//                                Testimonial Carousel
	//  -----------------------------------------------------------------------
	let currentTestimonialIndex = 0;
	let TestimonialCards = document.querySelectorAll('.Testimonial-Card');
	let totalTestimonialCards = TestimonialCards.length;
	document
		.getElementById('Next-TestBtn')
		.addEventListener('click', function () {
			if (currentTestimonialIndex < totalTestimonialCards - 1) {
				currentTestimonialIndex++;
			} else {
				currentTestimonialIndex = 0;
			}
			updateTestimonial();
		});
	document
		.getElementById('Prev-TestBtn')
		.addEventListener('click', function () {
			if (currentTestimonialIndex > 0) {
				currentTestimonialIndex--;
			} else {
				currentTestimonialIndex = totalTestimonialCards - 1;
			}
			updateTestimonial();
		});

	function updateTestimonial() {
		let TestimonialContainers = document.querySelector(
			'.Testimonial-Container'
		);

		let testOffset = -currentTestimonialIndex * (700 + 450);
		TestimonialContainers.style.transform = `translateX(${testOffset}px)`;
	}
}
// ---------------------------------------------------------------------------------------------------------
function initializeMenuPage() {
	document.addEventListener('DOMContentLoaded', ready);
	ready();
	function ready() {
		// makes sure the each add to cart buttons work
		let AddtoCart = document.getElementsByClassName('menu-add');
		for (let i = 0; i < AddtoCart.length; i++) {
			let AddtoCartBtn = AddtoCart[i];
			AddtoCartBtn.addEventListener('click', addToCartClicked);
		}
		//  -----------------------------------------------------------------------
		//                                Adding to Cart
		//  -----------------------------------------------------------------------
	}
	function addToCartClicked(event) {
		let button = event.target;
		console.log(button);
		let shopItem = button.parentElement.parentElement;
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
		};
		let existingItems = JSON.parse(localStorage.getItem('StoredItems')) || [];
		existingItems.push(ItemInfo);

		localStorage.setItem('StoredItems', JSON.stringify(existingItems));
	}
	//  -----------------------------------------------------------------------
	//                                Modal Boxes
	//  -----------------------------------------------------------------------
	let modalBtn = document.getElementsByClassName('Modalbutton Menu')[0];
	let modal = document.getElementsByClassName('modal Menu')[0];
	let closebtn = document.getElementsByClassName('Closebtn Menu')[0];
	modalBtn.addEventListener('click', function () {
		modal.style.display = 'block';
	});
	closebtn.addEventListener('click', function () {
		modal.style.display = 'none';
	});
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
	let logo = document.getElementById('logo');
	logo.addEventListener('click', function () {
		location.replace('index.html');
	});
	let Deliverybtn = document.getElementsByClassName('Delivery-Menu')[0];
	let Pickupbtn = document.getElementsByClassName('Pickup-Menu')[0];
	let indicator = document.getElementById('D-P-Indicator');
	let deliveryForm = document.getElementsByClassName('in-container')[0];
	Deliverybtn.addEventListener('click', function () {
		indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Delivery`;
		deliveryForm.style.display = 'block';
	});
	Pickupbtn.addEventListener('click', function () {
		indicator.innerHTML = `<ion-icon name="pin"></ion-icon> Pick Up`;
		deliveryForm.style.display = 'none';
	});

	//  -----------------------------------------------------------------------
	//                            onscroll Function
	//  -----------------------------------------------------------------------
	let topButton = document.getElementById('topBtn');
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			topButton.style.display = 'block';
		} else {
			topButton.style.display = 'none';
		}
	}
	topButton.addEventListener('click', backToTop);
	function backToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	//  -----------------------------------------------------------------------
	//                            Onscroll function end
	//  -----------------------------------------------------------------------
}
function initializeCheckoutPage() {
	function ready() {
		let quantityInputs = document.getElementsByClassName('Cart-Quantity');
		for (let i = 0; i < quantityInputs.length; i++) {
			let input = quantityInputs[i];
			input.addEventListener('change', quantityChanged);
		}
	}
	//  -----------------------------------------------------------------------
	//                            retrieving and applying Coupons
	//  -----------------------------------------------------------------------

	//  -----------------------------------------------------------------------
	//                            retrieving Item info
	//  -----------------------------------------------------------------------

	let retrievedItems = JSON.parse(localStorage.getItem(`StoredItems`)) || [];
	let PlaceOrderBtn = document.getElementById('PlaceOrderBtn');
	// --------------------------------------------------------------------
	let itemList = document.getElementsByClassName('Item-Qty-Price-List')[0];
	for (let i = 0; i < retrievedItems.length; i++) {
		let cartRowContent = document.createElement('div');
		cartRowContent.className = 'Item-List-Container';
		cartRowContent.innerHTML = `
    
                <div class="Item-Container">
                  <img id="Item-img" src="${retrievedItems[i].foodImg}" alt="ItemImg" />
                  <p>${retrievedItems[i].foodTitle}</p>
                </div>
                <div class="Qty-Container">
                  <input class ="Cart-Quantity"
                    type="number"
                    name="Quantity-Counter"
                    id="Quantity"
                    value="1" min="1"
                  />
                </div>
                <div class="Price-Container">
                  <p class ="Cart-Price">Total: $${retrievedItems[i].foodPrice}</p>
                </div>
                <button class = "remove-btn">Remove</button>
             `;
		itemList.insertAdjacentElement('beforeEnd', cartRowContent);
	}
	itemList.addEventListener('click', function (event) {
		if (event.target.classList.contains('remove-btn')) {
			removeItem(event);
		}
	});
	ready();
	PlaceOrderBtn.addEventListener('click', function () {
		let ExpDate = document.getElementById('ExpDate').value;
		let Cvv = document.getElementById('CVV').value;
		let CardName = document.getElementById('CardName').value;
		let CardNumber = document.getElementById('CardNumber').value;
		let ExistingErrormsg = document.getElementsByClassName('Error-Msg')[0];
		let existingSuccessMsg = document.getElementsByClassName('Success-Msg')[0];

		if (ExistingErrormsg) {
			ExistingErrormsg.remove();
		}
		if (existingSuccessMsg) {
			existingSuccessMsg.remove();
		}
		let errorMessage = validateCard(CardName, CardNumber, ExpDate, Cvv);
		if (errorMessage) {
			let errorElement = document.createElement('p');
			errorElement.className = 'Error-Msg';
			errorElement.style.color = 'red';
			errorElement.innerText = errorMessage;
			PlaceOrderBtn.insertAdjacentElement('afterend', errorElement);
		} else {
			let SuccessMsg = document.createElement('p');
			SuccessMsg.className = 'Success-Msg';
			SuccessMsg.style.color = 'green';
			SuccessMsg.innerText = 'Purchase Successful';
			PlaceOrderBtn.insertAdjacentElement('afterend', SuccessMsg);
		}
	});

	function validateCard(CardName, CardNumber, ExpDate, Cvv) {
		let errorMessage = '';

		if (!CardName) {
			errorMessage += ' Please Enter Card Name\n';
		}
		if (!CardNumber || !/^\d{13,19}$/.test(CardNumber)) {
			errorMessage += 'Please Enter Card Number(13 to 19 digits)\n';
		}
		if (!ExpDate) {
			errorMessage += 'Please Fill the expiry Date (MM/YY)\n';
		}
		//--------------------------------------------------------------------------------------------------------------------//
		if (!Cvv || !/^\d{3,4}$/.test(Cvv)) {
			// This is a regular expression that match specific numbers
			//"^" marks the start of the string and "$" marks the end of the string
			// "/d" matches any digit (0 -9) and "{number,number}" specifies that the digit (element) must occur 3 or 4 times
			errorMessage += ' CVV is invalid (must be 3 or 4 digits)\n';
		}
		//-------------------------------------------------------------------------------------------------------------------------//
		return errorMessage;
	}

	//  -----------------------------------------------------------------------
	//                            Quantity Change
	//  -----------------------------------------------------------------------
	function quantityChanged(event) {
		let input = event.target;
		console.log(input);
		if (isNaN(input.value) || input.value <= 0) {
			input.value = 1;
		}
		updateCartTotal();
	}
	//  -----------------------------------------------------------------------
	//                            Remove Function
	//  -----------------------------------------------------------------------
	function removeItem(event) {
		console.log('RemoveItem Pressed?');
		let buttonClicked = event.target;

		let itemContainer = buttonClicked.closest('.Item-List-Container');

		// VVV this will find the index of the item we want to remove
		let itemTitle = itemContainer.getElementsByTagName('p')[0].textContent;
		console.log(itemTitle);
		let retrievedItems = JSON.parse(localStorage.getItem('StoredItems')) || [];
		let itemIndex = retrievedItems.findIndex(
			(item) => item.foodTitle === itemTitle
		); //this is a callback function that check each item in the retrievedItems array
		// it checks if foodTitle matches itemTitle adn return the index of that item
		if (itemIndex > -1) {
			retrievedItems.splice(itemIndex, 1); //removes it from array'
			localStorage.setItem('StoredItems', JSON.stringify(retrievedItems));
		}
		itemContainer.remove();
		updateCartTotal();
	}
	//  -----------------------------------------------------------------------
	//                            Updating Total
	//  ------------------------------------------------------------------------
	// let quantityValue = document.getElementById("Quantity").value;
	// console.log(quantityValue);
	function updateCartTotal() {
		let itemContainer = document.getElementsByClassName(
			'Item-Qty-Price-List'
		)[0];
		let itemRow = itemContainer.getElementsByClassName('Item-List-Container');
		let total = 0;
		let taxtotal = 0.06;
		let orderTotal = 0;
		let TipTotal = 0;
		for (let i = 0; i < itemRow.length; i++) {
			let cartRow = itemRow[i];
			let priceElement = cartRow.getElementsByClassName('Cart-Price')[0];
			let quantityElement = cartRow.getElementsByClassName('Cart-Quantity')[0];
			let price = parseFloat(priceElement.innerText.replace('Total: $', ''));
			let quantity = parseInt(quantityElement.value);
			total += price * quantity;

			// ---------------------tips-------------------------------
		}
		taxtotal = total * 0.06;

		let tipBtns = document.getElementsByClassName('tip-btn');
		for (let e = 0; e < tipBtns.length; e++) {
			let tipBtnElement = tipBtns[e];
			tipBtnElement.addEventListener('click', function () {
				Tip = parseFloat(tipBtnElement.innerText.replace(`Tip: $`, ``)) / 100;
				if (isNaN(Tip)) {
					TipTotal = 0;
					total = Math.round(total * 100) / 100;
					orderTotal = total + taxtotal;
					console.log(Tip);
				} else {
					TipTotal = total * Tip;
					total = Math.round(total * 100) / 100;
					orderTotal = total + taxtotal + TipTotal;
				}

				document.getElementById(
					'TotalPrice'
				).innerText = `Total: $${total.toFixed(2)}`;
				document.getElementById('tip').innerText = `Tip: $${TipTotal.toFixed(
					2
				)}`;
				document.getElementById('tax').innerText = `Tax: $${taxtotal.toFixed(
					2
				)}`;
				document.getElementById(
					'FinalTotal'
				).innerText = `Order Total: $${orderTotal.toFixed(2)}`;
			});
		}

		orderTotal = total + taxtotal + TipTotal;

		document.getElementById('TotalPrice').innerText = `Total: $${total.toFixed(
			2
		)}`;
		document.getElementById('tip').innerText = `Tip: $${TipTotal.toFixed(2)}`;
		document.getElementById('tax').innerText = `Tax: $${taxtotal.toFixed(2)}`;
		document.getElementById(
			'FinalTotal'
		).innerText = `Order Total: $${orderTotal.toFixed(2)}`;
	}
	updateCartTotal();

	let couponEnterBtn = document.getElementById('CouponBtn');

	couponEnterBtn.addEventListener('click', applyCoupon);
	function applyCoupon() {
		//  -------------------------------------coupons------------------------------------
		let couponIdRetrieved = JSON.parse(localStorage.getItem('Coupons')) || [];
		let Coupon = document.getElementById('CouponID').value;
		let discount = 0;
		for (let coupon of couponIdRetrieved) {
			if (coupon.code === Coupon) {
				discount = coupon.discount;
				break;
			}
		}
		if (discount > 0) {
			let total = parseFloat(
				document
					.getElementById('FinalTotal')
					.innerText.replace('Order Total: $', '')
			);
			let discountAmount = (total * discount) / 100;
			let newTotal = total - discountAmount;
			console.log(Coupon);
			document.getElementById(
				'FinalTotal'
			).innerText = `Total:$${newTotal.toFixed(2)}`;
			let orderSummaryContainer = document.getElementById('tip');
			let CouponElement = document.createElement('p');
			CouponElement.innerHTML = `Discount: -$${discountAmount.toFixed(2)}`;
			orderSummaryContainer.insertAdjacentElement('afterend', CouponElement);
		} else {
			alert('invalid Code');
		}
	}
}
//  -----------------------------------------------------------------------
//                            Placed order function
//  ------------------------------------------------------------------------

//  -----------------------------------------------------------------------
//                  Checks for Id to Load the right Functions
//  -----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('Page1')) {
		console.log('MainPage opening');
		initializeMainPage();
	} else if (document.getElementById('SignInPage')) {
		console.log('Signin Page opening');
		initializeSignInPage();
	} else if (document.getElementById('MenuPage')) {
		console.log('MenuPage opening');
		initializeMenuPage();
	} else if (document.getElementById('CheckoutPage')) {
		console.log('checkoutPage opening');
		initializeCheckoutPage();
	}
});
