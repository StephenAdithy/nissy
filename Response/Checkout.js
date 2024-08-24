document.addEventListener('DOMContentLoaded', () => {
    const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    const checkoutOrderContainer = document.getElementById('order-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    const renderCart = () => {
        checkoutOrderContainer.innerHTML = '';
        total = 0; 

        checkoutCart.forEach((item, index) => {
            total += item.pricePerUnit;

            const itemHTML = `
                <div class="row" data-index="${index}">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <img src="${item.image}" class="prodimg" alt="${item.name}">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 contentalign">
                        <strong>${item.name}</strong><br>
                        <strong>₹${(item.pricePerUnit).toFixed(2)}</strong><br> 
                        <strong>Qty: ${item.quantity}</strong><br>
                        <strong>Weight: ${item.weight}</strong>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 contentalign">
                        <button class="remove-item" data-index="${index}">
                            <i class="fa fa-window-close closebtn" aria-hidden="true"></i>
                        </button>                                     
                    </div>
                </div>`;

            checkoutOrderContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        totalElement.textContent = `₹${total.toFixed(2)}`;
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach((button, index) => {
            button.addEventListener('click', () => removeItem(index));
        });
    };

    const removeItem = (index) => {
        checkoutCart.splice(index, 1); 
        localStorage.setItem('checkoutCart', JSON.stringify(checkoutCart)); 
        renderCart(); 
    };

    const validateForm = () => {
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const postcode = document.getElementById('postcode').value.trim();
        const phone = document.getElementById('phone').value.trim();

        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        let isValid = true;

        if (firstName === '') {
            document.getElementById('first-name-error').textContent = 'First Name is required.';
            isValid = false;
        }
        if (lastName === '') {
            document.getElementById('last-name-error').textContent = 'Last Name is required.';
            isValid = false;
        }
        if (address === '') {
            document.getElementById('address-error').textContent = 'Address is required.';
            isValid = false;
        }
        if (city === '') {
            document.getElementById('city-error').textContent = 'Town/City is required.';
            isValid = false;
        }
        if (state === '') {
            document.getElementById('state-error').textContent = 'Country/State is required.';
            isValid = false;
        }
        if (postcode === '') {
            document.getElementById('postcode-error').textContent = 'Postcode/ZIP is required.';
            isValid = false;
        }
        if (phone === '') {
            document.getElementById('phone-error').textContent = 'Phone is required.';
            isValid = false;
        }
        if(total == 0){
            alert('Please select any product');
            window.location.href = 'shop-grid.html';
            return false;
        }
        return isValid;
    };

    const createOrderJSON = () => {
        const personalDetails = {
            firstName: document.getElementById('first-name').value.trim(),
            lastName: document.getElementById('last-name').value.trim(),
            address: document.getElementById('address').value.trim(),
            apartment: document.getElementById('apartment').value.trim(),
            city: document.getElementById('city').value.trim(),
            state: document.getElementById('state').value.trim(),
            postcode: document.getElementById('postcode').value.trim(),
            phone: document.getElementById('phone').value.trim()
        };

        const orderDetails = checkoutCart.map(item => ({
            name: item.name,
            pricePerUnit: item.pricePerUnit,
            quantity: item.quantity,
            weight: item.weight,
            image: item.image
        }));

        const orderJSON = {
            personalDetails: personalDetails,
            orderDetails: orderDetails,
            totalAmount: total.toFixed(2)
        };

        return JSON.stringify(orderJSON, null, 2);
    };

    renderCart();

    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            const orderJSON = createOrderJSON();
            
            console.log("Order JSON:", orderJSON); 

            document.getElementById('order-details-hidden').value = orderJSON;
            document.getElementById('total-hidden').value = total.toFixed(2);
        }
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
//     const checkoutOrderContainer = document.getElementById('order-items');
//     const totalElement = document.getElementById('total');
//     let total = 0;

//     // Render Cart Items
//     const renderCart = () => {
//         checkoutOrderContainer.innerHTML = '';
//         total = 0;

//         checkoutCart.forEach((item, index) => {
//             total += item.pricePerUnit * item.quantity;

//             const itemHTML = `
//                 <div class="row" data-index="${index}">
//                     <div class="col-lg-4 col-md-4 col-sm-4">
//                         <img src="${item.image}" class="prodimg" alt="${item.name}">
//                     </div>
//                     <div class="col-lg-6 col-md-6 col-sm-6 contentalign">
//                         <strong>${item.name}</strong><br>
//                         <strong>₹${(item.pricePerUnit).toFixed(2)}</strong><br> 
//                         <strong>Qty: ${item.quantity}</strong><br>
//                         <strong>Weight: ${item.weight}</strong>
//                     </div>
//                     <div class="col-lg-2 col-md-2 col-sm-2 contentalign">
//                         <button class="remove-item" data-index="${index}">
//                             <i class="fa fa-window-close closebtn" aria-hidden="true"></i>
//                         </button>                                     
//                     </div>
//                 </div>`;

//             checkoutOrderContainer.insertAdjacentHTML('beforeend', itemHTML);
//         });

//         totalElement.textContent = `₹${total.toFixed(2)}`;
//         const removeButtons = document.querySelectorAll('.remove-item');
//         removeButtons.forEach(button => {
//             button.addEventListener('click', () => removeItem(button.getAttribute('data-index')));
//         });
//     };

//     // Remove Item from Cart
//     const removeItem = (index) => {
//         checkoutCart.splice(index, 1);
//         localStorage.setItem('checkoutCart', JSON.stringify(checkoutCart));
//         renderCart();
//     };

//     // Validate Form Fields
//     const validateForm = () => {
//         const firstName = document.getElementById('first-name').value.trim();
//         const lastName = document.getElementById('last-name').value.trim();
//         const address = document.getElementById('address').value.trim();
//         const city = document.getElementById('city').value.trim();
//         const state = document.getElementById('state').value.trim();
//         const postcode = document.getElementById('postcode').value.trim();
//         const phone = document.getElementById('phone').value.trim();

//         document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

//         let isValid = true;

//         if (firstName === '') {
//             document.getElementById('first-name-error').textContent = 'First Name is required.';
//             isValid = false;
//         }
//         if (lastName === '') {
//             document.getElementById('last-name-error').textContent = 'Last Name is required.';
//             isValid = false;
//         }
//         if (address === '') {
//             document.getElementById('address-error').textContent = 'Address is required.';
//             isValid = false;
//         }
//         if (city === '') {
//             document.getElementById('city-error').textContent = 'Town/City is required.';
//             isValid = false;
//         }
//         if (state === '') {
//             document.getElementById('state-error').textContent = 'Country/State is required.';
//             isValid = false;
//         }
//         if (postcode === '') {
//             document.getElementById('postcode-error').textContent = 'Postcode/ZIP is required.';
//             isValid = false;
//         }
//         if (phone === '') {
//             document.getElementById('phone-error').textContent = 'Phone is required.';
//             isValid = false;
//         }
//         if (total === 0) {
//             alert('Please select any product');
//             window.location.href = 'shop-grid.html';
//             return false;
//         }
//         return isValid;
//     };

//     // Pre-fill form with saved data from localStorage
//     const savedData = JSON.parse(localStorage.getItem('checkoutData'));
    
//     if (savedData) {
//         document.getElementById('first-name').value = savedData.firstName || '';
//         document.getElementById('last-name').value = savedData.lastName || '';
//         document.getElementById('address').value = savedData.address || '';
//         document.getElementById('apartment').value = savedData.apartment || '';
//         document.getElementById('city').value = savedData.city || '';
//         document.getElementById('state').value = savedData.state || '';
//         document.getElementById('postcode').value = savedData.postcode || '';
//         document.getElementById('phone').value = savedData.phone || '';
//     }

//     // Save form data on submit
//     document.getElementById('checkout-form').addEventListener('submit', (event) => {
//         if (!validateForm()) {
//             event.preventDefault();
//         } else {
//             // Save form values to localStorage
//             const firstName = document.getElementById('first-name').value;
//             const lastName = document.getElementById('last-name').value;
//             const address = document.getElementById('address').value;
//             const apartment = document.getElementById('apartment').value;
//             const city = document.getElementById('city').value;
//             const state = document.getElementById('state').value;
//             const postcode = document.getElementById('postcode').value;
//             const phone = document.getElementById('phone').value;

//             localStorage.setItem('checkoutData', JSON.stringify({
//                 firstName,
//                 lastName,
//                 address,
//                 apartment,
//                 city,
//                 state,
//                 postcode,
//                 phone
//             }));
//         }
//     });

//     renderCart(); // Initial render of cart items
// });

