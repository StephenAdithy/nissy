    function getQueryParameter(name) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadProductDetails(id) {
    if (typeof products === 'undefined') {
        console.error('Products data is not available.');
        return;
    }
    const product = products[id];
    if (product) {
        if (product.productImage && product.productImage.length > 0) {
        document.querySelector(".product__details__pic__item img").src = product.productImage[0];
        }
        let slider = document.querySelector(".product__details__pic__slider");
        slider.innerHTML = "";
        for (let i = 0; i < product.productImage.length; i++) {
            let img = document.createElement("img");
            img.src = product.productImage[i];
            img.setAttribute("data-imgbigurl", product.productImage[i]);
            img.addEventListener("click", function() {
            document.querySelector(".product__details__pic__item img").src = this.src;
        });
            slider.appendChild(img);
        }
        document.querySelector(".product__details__text h3").innerText = product.name;
        document.querySelector(".product__details__price").innerText = product.price;
        document.querySelector(".description_details").innerText = product.description;
        document.querySelector(".description-tab").innerText = product.productdescription;
        document.querySelector(".information-tab").innerText = product.information;

        $('.product__details__pic__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 4,
            responsive: {
                0: {
                    items: 4
                },
                540: {
                    items: 4
                },
                767: {
                    items: 4
                },
                1024: {
                    items: 4
                }
            },
        });

        let weightContainer = document.querySelector(".row.mt-3");
        weightContainer.innerHTML = "";
        product.weights.forEach((weight, index) => {
            let col = document.createElement("div");
            col.className = "col-lg-3 col-md-4 col-sm-4";
            let formCheck = document.createElement("div");
            formCheck.className = "form-check";
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "weight";
            input.id = weight.id;
            input.value = weight.value;
            input.setAttribute("data-price", weight.price); 
            if (index === 0) {
                input.checked = true;
            }
            let label = document.createElement("label");
            label.className = "form-check-label";
            label.setAttribute("for", weight.id);
            label.innerText = weight.label;
            formCheck.appendChild(input);
            formCheck.appendChild(label);
            col.appendChild(formCheck);
            weightContainer.appendChild(col);
        });

        let infoList = document.querySelector(".product-details-info");
        infoList.querySelector("li:nth-child(1) span").innerText = product.availability;
        infoList.querySelector("li:nth-child(2) span").innerHTML = product.shipping;
        infoList.querySelector("li:nth-child(3) span").innerText = product.weightDetail;
        infoList.querySelector("li:nth-child(4) span").innerText = product.rate;
    }
}



window.onload = function () {
    let productId = getQueryParameter("id");
    if (productId) {
        loadProductDetails(productId);
        loadProduct(productId);
    }
};



function loadProduct(productId) {
    const productDetailsContainer = document.getElementById('product-details-container');
    if (!productDetailsContainer) {
        console.error('Container with ID product-details-container not found.');
        return;
    }

    const productDetails = `
        <div class="mt-4">
            <div class="product__details__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <span class="dec qtybtn" onclick="changeQuantity(-1, ${productId})">-</span>
                        <input id="quantity-${productId}" type="text" value="1">
                        <span class="inc qtybtn" onclick="changeQuantity(1, ${productId})">+</span>
                    </div>
                </div>
            </div>                            
            <a class="primary-btn" onclick="handleAddToCart(${productId}); return false;">ADD TO CART</a>
            <a class="primary-btn" onclick="buyNow1(${productId})">BUY NOW</a>
            <div id="price-display-${productId}" class="price-display">
                                    Price: ₹<span id="calculated-price-${productId}">0</span>
        </div>
    `;

    productDetailsContainer.innerHTML = productDetails;

    if (typeof handleAddToCart !== 'function') {
        console.error('handleAddToCart function is not defined.');
    }
}

function buyNow1(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found');
        return;
    }
    const selectedWeightElement = document.querySelector("input[name='weight']:checked");
    
    if (!selectedWeightElement) {
        alert("Please select a weight option.");
        return;
    }
    
    const selectedWeight = selectedWeightElement.value;
    const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));
    
    const quantityElement = document.getElementById(`quantity-${productId}`);
    const quantity = quantityElement ? parseInt(quantityElement.value) : 1;

    if (isNaN(quantity) || quantity < 1) {
        console.error('Invalid quantity');
        return;
    }
    const productToCheckout = {
        id: product.id,
        name: product.name,
        pricePerUnit: pricePerUnit * quantity,
        quantity: quantity,
        image: product.image,
        weight: selectedWeight
    };

    localStorage.setItem('checkoutCart', JSON.stringify([productToCheckout]));

    window.location.href = 'checkout.html';
}


function handleAddToCart(productId) {
    let selectedWeightElement = document.querySelector("input[name='weight']:checked");
    if (!selectedWeightElement) {
        console.error('No weight selected');
        return;
    }
    
    let selectedWeight = selectedWeightElement.value;
    let pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));

    let quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = quantityElement ? parseInt(quantityElement.value) : 1;

    if (isNaN(quantity) || quantity < 1) {
        console.error('Invalid quantity');
        return;
    }

    let product = products.find(p => p.id === productId);
    
    if (product) {
        addToCart(productId, selectedWeight, quantity, pricePerUnit);
    } else {
        console.error('Product not found');
    }
}
