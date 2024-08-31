document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadCartItems();
});

function loadCartItems() {
    console.log('Loading cart items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSection = document.querySelector('.shoping__checkout');
    const cartColumn = document.querySelector('.col-lg-8');
    const totalColumn = document.querySelector('.col-lg-4');

    if (!cartItemsContainer) {
        console.error('Cart items container not found');
        return;
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <img src="img/Nissy/shooping-cart.png" alt="Empty Cart" class="empty-cart-image">
            <h6 class="empty-cart-message">No items in your cart</h6>
            <button class="return-to-shop-button" onclick="location.href='shop-grid.html'">Return to Shop</button>
        `;
        if (cartTotalSection) {
            cartTotalSection.style.display = 'none';
        }
        if (cartColumn && totalColumn) {
            cartColumn.classList.remove('col-lg-8');
            cartColumn.classList.add('col-lg-12');
            totalColumn.style.display = 'none'; 
        }
        updateCartSummary(0);
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        console.log('Item:', item);
        total += item.pricePerUnit;
        return `
            <div class="cart-item">
                <img class="cart-image" src="${item.image}" alt="${item.name}" onclick="location.href='shop-details.html?id=${item.id}'">
                <div class="shoping__cart__table-products-details">
                    <div class="shopping_cart-name">${item.name}</div>
                    <div class="shopping_cart-weigth"><span>${item.weight}</span></div>
                    <div class="shopping_cart-quantity">Quantity: <span id="quantity-${item.id}">${item.quantity}</span></div>
                    <div class="shoping__cart__table-products-details-amtcounter">
                        <div>₹ ${item.pricePerUnit}/-</div>
                    </div>
                    <div class="shopping__cart-availability">${item.availability}</div>
                </div>
                <div class="counter">
                    <button class="shoping__cart__table-products-details-remove" onclick="removeFromCart(${item.id}, '${item.weight}')">Remove</button>
                </div>
            </div>`;
    }).join('');

    updateCartSummary(total);
    if (cartTotalSection) {
        cartTotalSection.style.display = 'block';
    }
    if (cartColumn && totalColumn) {
        cartColumn.classList.remove('col-lg-12');
        cartColumn.classList.add('col-lg-8');
        totalColumn.style.display = 'block'; 
    }
}


function updateCartSummary(total) {
    console.log('Updating cart summary. Total:', total);
    const totalElement = document.getElementById('total');

    if (!totalElement) {
        console.error('Total element not found');
        return;
    }

    totalElement.textContent = `₹${total.toFixed(2)}`;

    console.log('Total element updated:', totalElement.textContent);
}
function removeFromCart(productId, weight) {
    console.log(`Removing product with ID: ${productId} and weight: ${weight}`);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => !(item.id === productId && item.weight === weight));
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast('Cart Removed Successfully','success');
    loadCartItems();
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.fa-shopping-bag + span').textContent = totalCount;
    localStorage.setItem('cartCount', totalCount);
}
function saveCartForCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('checkoutCart', JSON.stringify(cart));
    localStorage.setItem('orderFromCart', 'true'); 
}
