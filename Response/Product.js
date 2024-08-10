// function loadProducts() {
//     const productContainer = document.getElementById('product-container');
//     products.forEach(product => {
//         const weightOptionsHTML = product.weights.map(weight =>
//             `<label>
//                 <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
//                 ${weight.label}
//             </label><br>`).join('');
        
//         const imagesHTML = product.images.map(img =>
//             `<img src="${img}" alt="image">`).join('');

//         const productItem = `
//             <div class="col-lg-4 col-md-6 col-sm-6">
//                 <div class="product__item">
//                     <div class="product__item__pic set-bg" style="background-image: url(${product.image});"  onclick="location.href='shop-details.html?id=${product.id}'">
//                         <ul class="product__item__pic__hover">
//                             <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
//                         </ul>
//                     </div>
//                     <div class="product__item__text">
//                         <h6><a href="#">${product.name}</a></h6>
//                         <h5>${product.price}</h5>
//                         <button class="featured__item__text-optionbtn" onclick="openNav(${product.id})">Select Option</button>
//                         <div id="overlay-${product.id}" class="overlay" onclick="closeNav(${product.id})"></div>
//                         <div id="mySidenav-${product.id}" class="sidenav">
//                             <a href="javascript:void(0)" class="closebtn" onclick="closeNav(${product.id})">&times;</a>
//                             <div class="sidenav-content">
//                                 <div class="slider" id="slider-${product.id}">
//                                     <div class="slides" id="slides-${product.id}">
//                                         ${imagesHTML}
//                                     </div>
//                                     <button class="prev" onclick="moveSlide(${product.id}, -1)">&#10094;</button>
//                                     <button class="next" onclick="moveSlide(${product.id}, 1)">&#10095;</button>
//                                 </div>
//                                 <div class="main-content">
//                                     <div class="main-content-heading"><a>${product.name}</a></div>
//                                     <p>${product.price}</p>
//                                     <p>${product.description}</p>
//                                     <div>
//                                         <h4>Weight</h4>
//                                         <div class="weight-display">
//                                             ${weightOptionsHTML}
//                                         </div>
//                                     </div>
//                                     <div id="price-display-${product.id}" class="price-display">
//                                         Price: ₹<span id="calculated-price-${product.id}">0</span>
//                                     </div>
//                                     <div class="order-section">
//                                         <button class="order-section-countbutton" onclick="changeQuantity1(-1, ${product.id})">-</button>
//                                         <span id="quantity-${product.id}">1</span>
//                                         <button class="order-section-countbutton" onclick="changeQuantity1(1, ${product.id})">+</button>
//                                         <button class="add-to-cart" onclick="addToCartWithSelectedWeight(${product.id})">Add to Cart</button>
//                                         <button class="buy-now" onclick="buyNow(${product.id}, '${product.name}', '${product.price}')">Buy Now</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>                    
//                     </div>
//                 </div>
//             </div>
//         `;
//         productContainer.insertAdjacentHTML('beforeend', productItem);
//     });
// }

// document.addEventListener('DOMContentLoaded', loadProducts);

// function loadProductDetails(product) {
//     const productDetailsContainer = document.getElementById('product-details-container');
//     const productDetails = `
//         <div class="mt-4">
//             <div class="product__details__quantity">
//                 <div class="quantity">
//                     <div class="pro-qty">
//                         <span class="dec qtybtn">-</span>
//                         <input type="text" value="1">
//                         <span class="inc qtybtn">+</span>
//                     </div>
//                 </div>
//             </div>                            
//             <a href="#" class="primary-btn" onclick="addToCart(${product.id})">ADD TO CARD</a>
//             <a href="#" class="primary-btn">BUY NOW</a>
//         </div>
//     `;
//     productDetailsContainer.innerHTML = productDetails;
// }




// document.addEventListener('DOMContentLoaded', function() {
//     // Load all products initially
//     loadProducts(products);

//     // Add event listeners to category links
//     const categoryLinks = document.querySelectorAll('ul li a');
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const selectedCategory = this.getAttribute('data-category');
//             filterProductsByCategory(selectedCategory);
//         });
//     });
// });

// function loadProducts(productsToLoad) {
//     const productContainer = document.getElementById('product-container');
//     productContainer.innerHTML = ''; // Clear the container before loading products

//     productsToLoad.forEach(product => {
//         const weightOptionsHTML = product.weights.map(weight =>
//             `<label>
//                 <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
//                 ${weight.label}
//             </label><br>`).join('');
        
//         const imagesHTML = product.images.map(img =>
//             `<img src="${img}" alt="image">`).join('');

//         const productItem = `
//             <div class="col-lg-4 col-md-6 col-sm-6">
//                 <div class="product__item">
//                     <div class="product__item__pic set-bg" style="background-image: url(${product.image});" onclick="location.href='shop-details.html?id=${product.id}'">
//                         <ul class="product__item__pic__hover">
//                             <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
//                         </ul>
//                     </div>
//                     <div class="product__item__text">
//                         <h6><a href="#">${product.name}</a></h6>
//                         <h5>${product.price}</h5>
//                         <button class="featured__item__text-optionbtn" onclick="openNav(${product.id})">Select Option</button>
//                         <div id="overlay-${product.id}" class="overlay" onclick="closeNav(${product.id})"></div>
//                         <div id="mySidenav-${product.id}" class="sidenav">
//                             <a href="javascript:void(0)" class="closebtn" onclick="closeNav(${product.id})">&times;</a>
//                             <div class="sidenav-content">
//                                 <div class="slider" id="slider-${product.id}">
//                                     <div class="slides" id="slides-${product.id}">
//                                         ${imagesHTML}
//                                     </div>
//                                     <button class="prev" onclick="moveSlide(${product.id}, -1)">&#10094;</button>
//                                     <button class="next" onclick="moveSlide(${product.id}, 1)">&#10095;</button>
//                                 </div>
//                                 <div class="main-content">
//                                     <div class="main-content-heading"><a>${product.name}</a></div>
//                                     <p>${product.price}</p>
//                                     <p>${product.description}</p>
//                                     <div>
//                                         <h4>Weight</h4>
//                                         <div class="weight-display">
//                                             ${weightOptionsHTML}
//                                         </div>
//                                     </div>
//                                     <div id="price-display-${product.id}" class="price-display">
//                                         Price: ₹<span id="calculated-price-${product.id}">0</span>
//                                     </div>
//                                     <div class="order-section">
//                                         <button class="order-section-countbutton" onclick="changeQuantity1(-1, ${product.id})">-</button>
//                                         <span id="quantity-${product.id}">1</span>
//                                         <button class="order-section-countbutton" onclick="changeQuantity1(1, ${product.id})">+</button>
//                                         <button class="add-to-cart" onclick="addToCartWithSelectedWeight(${product.id})">Add to Cart</button>
//                                         <button class="buy-now" onclick="buyNow(${product.id}, '${product.name}', '${product.price}')">Buy Now</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>                    
//                     </div>
//                 </div>
//             </div>
//         `;
//         productContainer.insertAdjacentHTML('beforeend', productItem);
//     });
// }

// function filterProductsByCategory(category) {
//     const filteredProducts = products.filter(product => product.category === category);
//     loadProducts(filteredProducts);
// }

document.addEventListener('DOMContentLoaded', function() {
    // Select the first category link and load its products by default
    const firstCategoryElement = document.querySelector('ul li a[data-category]');
    if (firstCategoryElement) {
        const firstCategory = firstCategoryElement.getAttribute('data-category');
        highlightCategory(firstCategoryElement);
        filterProductsByCategory(firstCategory);
    }

    // Add event listeners to all category links
    const categoryLinks = document.querySelectorAll('ul li a[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedCategory = this.getAttribute('data-category');
            highlightCategory(this);  // Highlight the clicked category
            filterProductsByCategory(selectedCategory);
        });
    });
});

function highlightCategory(activeElement) {
    // Remove the active class from all category links
    const categoryLinks = document.querySelectorAll('ul li a[data-category]');
    categoryLinks.forEach(link => {
        link.classList.remove('active-category');
    });

    // Add the active class to the current category link
    activeElement.classList.add('active-category');
}

function loadProducts(productsToLoad) {
    const productContainer = document.getElementById('product-container');

    productContainer.classList.add('fade-out'); // Start the fade-out effect

    setTimeout(() => {
        productContainer.innerHTML = ''; // Clear the container before loading products

        productsToLoad.forEach(product => {
            const weightOptionsHTML = product.weights.map(weight =>
                `<label>
                    <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
                    ${weight.label}
                </label><br>`).join('');
            
            const imagesHTML = product.images.map(img =>
                `<img src="${img}" alt="image">`).join('');

            const productItem = `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" style="background-image: url(${product.image});" onclick="location.href='shop-details.html?id=${product.id}'">
                            <ul class="product__item__pic__hover">
                                <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <h5>${product.price}</h5>
                            <button class="featured__item__text-optionbtn" onclick="openNav(${product.id})">Select Option</button>
                            <div id="overlay-${product.id}" class="overlay" onclick="closeNav(${product.id})"></div>
                            <div id="mySidenav-${product.id}" class="sidenav">
                                <a href="javascript:void(0)" class="closebtn" onclick="closeNav(${product.id})">&times;</a>
                                <div class="sidenav-content">
                                    <div class="slider" id="slider-${product.id}">
                                        <div class="slides" id="slides-${product.id}">
                                            ${imagesHTML}
                                        </div>
                                        <button class="prev" onclick="moveSlide(${product.id}, -1)">&#10094;</button>
                                        <button class="next" onclick="moveSlide(${product.id}, 1)">&#10095;</button>
                                    </div>
                                    <div class="main-content">
                                        <div class="main-content-heading"><a>${product.name}</a></div>
                                        <p>${product.price}</p>
                                        <p>${product.description}</p>
                                        <div>
                                            <h4>Weight</h4>
                                            <div class="weight-display">
                                                ${weightOptionsHTML}
                                            </div>
                                        </div>
                                        <div id="price-display-${product.id}" class="price-display">
                                            Price: ₹<span id="calculated-price-${product.id}">0</span>
                                        </div>
                                        <div class="order-section">
                                            <button class="order-section-countbutton" onclick="changeQuantity1(-1, ${product.id})">-</button>
                                            <span id="quantity-${product.id}">1</span>
                                            <button class="order-section-countbutton" onclick="changeQuantity1(1, ${product.id})">+</button>
                                            <button class="add-to-cart" onclick="addToCartWithSelectedWeight(${product.id})">Add to Cart</button>
                                            <button class="buy-now" onclick="buyNow(${product.id}, '${product.name}', '${product.price}')">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            `;
            productContainer.insertAdjacentHTML('beforeend', productItem);
        });

        productContainer.classList.remove('fade-out'); // Fade back in after products are loaded
    }, 500); // Wait for the fade-out transition to complete
}

function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    loadProducts(filteredProducts);
}
