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
                <div class="row checkoutproduct" data-index="${index}">
                    <div>
                        <img src="${item.image}" class="prodimg" alt="${item.name}">
                    </div>
                    <div class="checkoutitems" style="align-content:center;">
                        <strong>${item.name}</strong><br>
                        <strong>₹${(item.pricePerUnit).toFixed(2)}</strong><br> 
                        <strong>Qty: ${item.quantity}</strong><br>
                        <strong>Weight: ${item.weight}</strong>
                    </div>
                    <div style="align-content:center;">
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
            showToast(`Please select any product`,'error')
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
        const orderId = generateOrderId(); 
        const orderJSON = {
            orderId: orderId, 
            personalDetails: personalDetails,
            orderDetails: orderDetails,
            totalAmount: total.toFixed(2)
        };

        return orderJSON;
    };

    renderCart();

    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return; 
        } 
        
        const orderJSON = createOrderJSON();
        
        fetch('https://nissy-backend-gldxxko4lq-el.a.run.app/order-now/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderJSON)
        })
        .then(response => response.json())
        .then(data => {
            showToast('Order submitted successfully!','success');
            clearForm();
            if (localStorage.getItem('orderFromCart')) {
                clearCart(); 
                localStorage.removeItem('orderFromCart'); 
            }
        })
        .catch(error => {
            showToast(`There was an error submitting your order.`,'error')
        });
    });
});

function generateOrderId() {
    const timestamp = Date.now(); 
    const randomNum = Math.floor(Math.random() * 100000);
    return `Nissy-${timestamp}-${randomNum}`;
}


function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}
function clearForm() {
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
        document.querySelectorAll('.error-message').forEach(errorElement => {
            errorElement.textContent = '';
        });
        document.getElementById('order-items').innerHTML = '';
        localStorage.removeItem('checkoutCart');
        document.getElementById('total').textContent = "₹0.00";
    }
}
