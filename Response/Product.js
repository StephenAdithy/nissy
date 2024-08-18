// document.addEventListener('DOMContentLoaded', function() {
//     debugger
//     // Select the "All" category element
//     const allCategoryElement = document.querySelector('ul li a[data-category="."]');
    
//     // Check if the "All" category element exists and load all products
//     if (allCategoryElement) {
//         highlightCategory(allCategoryElement); // Highlight "All" as the selected category
//         filterProductsByCategory("."); // Load all products by passing "."
//     }

//     // Attach click event listeners to all category links
//     const categoryLinks = document.querySelectorAll('ul li a[data-category]');
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent the default link action
//             const selectedCategory = this.getAttribute('data-category');
//             highlightCategory(this);  
//             filterProductsByCategory(selectedCategory); // Load products based on selected category
//         });
//     });
// });

// function highlightCategory(activeElement) {
//     debugger
//     // Remove the active class from all category links
//     const categoryLinks = document.querySelectorAll('ul li a[data-category]');
//     categoryLinks.forEach(link => {
//         link.classList.remove('active-category');
//     });

//     // Add the active class to the selected category link
//     activeElement.classList.add('active-category');
// }

// function filterProductsByCategory(category) {
//     debugger
//     let filteredProducts;

//     // If the "All" category is selected, load all products
//     if (category === ".") {
//         filteredProducts = products; // Load all products
//     } else {
//         // Filter products by the selected category
//         filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
//     }

//     // Load the filtered products into the product container
//     loadProducts(filteredProducts);
// }

// function loadProducts(productsToLoad) {
//     debugger
//     const productContainer = document.getElementById('product-container');

//     productContainer.classList.add('fade-out'); 

//     setTimeout(() => {
//         productContainer.innerHTML = ''; 

//         productsToLoad.forEach(product => {
//             const weightOptionsHTML = product.weights.map(weight =>
//                 `<label>
//                     <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
//                     ${weight.label}
//                 </label><br>`).join('');
            
//             const imagesHTML = product.images.map(img =>
//                 `<img src="${img}" alt="image">`).join('');

//             const productItem = `
//                 <div class="col-lg-4 col-md-6 col-6">
//                     <div class="product__item">
//                         <div class="product__item__pic set-bg" style="background-image: url(${product.image});" onclick="location.href='shop-details.html?id=${product.id}'">
//                             <ul class="product__item__pic__hover">
//                                 <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div class="product__item__text">
//                             <h6><a href="#">${product.name}</a></h6>
//                             <h5>${product.price}</h5>
//                             <button class="featured__item__text-optionbtn" onclick="openNav(${product.id})">Select Option</button>
//                             <div id="overlay-${product.id}" class="overlay" onclick="closeNav(${product.id})"></div>
//                             <div id="mySidenav-${product.id}" class="sidenav">
//                                 <a href="javascript:void(0)" class="closebtn" onclick="closeNav(${product.id})">&times;</a>
//                                 <div class="sidenav-content">
//                                     <div class="slider" id="slider-${product.id}">
//                                         <div class="slides" id="slides-${product.id}">
//                                             ${imagesHTML}
//                                         </div>
//                                         <button class="prev" onclick="moveSlide(${product.id}, -1)">&#10094;</button>
//                                         <button class="next" onclick="moveSlide(${product.id}, 1)">&#10095;</button>
//                                     </div>
//                                     <div class="main-content">
//                                         <div class="main-content-heading"><a>${product.name}</a></div>
//                                         <p>${product.price}</p>
//                                         <p>${product.description}</p>
//                                         <div>
//                                             <h4>Weight</h4>
//                                             <div class="weight-display">
//                                                 ${weightOptionsHTML}
//                                             </div>
//                                         </div>
//                                         <div id="price-display-${product.id}" class="price-display">
//                                             Price: ₹<span id="calculated-price-${product.id}">0</span>
//                                         </div>
//                                         <div class="order-section">
//                                             <button class="order-section-countbutton" onclick="changeQuantity1(-1, ${product.id})">-</button>
//                                             <span id="quantity-${product.id}">1</span>
//                                             <button class="order-section-countbutton" onclick="changeQuantity1(1, ${product.id})">+</button>
//                                             <button class="add-to-cart" onclick="addToCartWithSelectedWeight(${product.id})">Add to Cart</button>
//                                             <button class="buy-now" onclick="buyNow(${product.id}, '${product.name}', '${product.price}')">Buy Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>                    
//                         </div>
//                     </div>
//                 </div>
//             `;
//             productContainer.insertAdjacentHTML('beforeend', productItem);
//         });

//         productContainer.classList.remove('fade-out'); 
//     }, 500); 
// }

// document.addEventListener('DOMContentLoaded', function() {
//     debugger
//     const allCategoryElement = document.querySelector('ul li a[data-category="."]');
    
//     // Highlight and filter products for "All" category by default
//     if (allCategoryElement) {
//         highlightCategory(allCategoryElement); // Highlight the "All" category
//         filterProductsByCategory("."); // Filter and load all products
//     }

//     // Attach click event listeners to category links
//     const categoryLinks = document.querySelectorAll('ul li a[data-category]');
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default link action
//             const selectedCategory = this.getAttribute('data-category');
//             highlightCategory(this);  
//             filterProductsByCategory(selectedCategory); // Filter products by selected category
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category') || '.';

    const allCategoryElement = document.querySelector(`ul li a[data-category="${selectedCategory}"]`) || document.querySelector('ul li a[data-category="."]');
    
    // Highlight and filter products for the selected category or "All" category by default
    if (allCategoryElement) {
        highlightCategory(allCategoryElement);
        filterProductsByCategory(selectedCategory);
    }

    // Attach click event listeners to category links in shop-grid.html
    const categoryLinks = document.querySelectorAll('ul li a[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            highlightCategory(this);  
            filterProductsByCategory(category);
        });
    });
});


function highlightCategory(activeElement) {
    const categoryLinks = document.querySelectorAll('ul li a[data-category]');
    categoryLinks.forEach(link => {
        link.classList.remove('active-category');
    });
    activeElement.classList.add('active-category');
}

function filterProductsByCategory(category) {
    let filteredProducts;
    // Load all products if "All" is selected
    if (category === ".") {
        filteredProducts = products; // Show all products
    } else {
        filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    loadProducts(filteredProducts);
}

function loadProducts(productsToLoad) {
    const productContainer = document.getElementById('product-container');

    productContainer.classList.add('fade-out'); 

    setTimeout(() => {
        productContainer.innerHTML = ''; 

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
                        <div class="product__item__pic set-bg" onclick="location.href='shop-details.html?id=${product.id}'">
                         <img src=${product.image} alt="product">   
                        </div>
                        <ul class="product__item__pic__hover">
                                <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
                        </ul>
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

        productContainer.classList.remove('fade-out'); 
    }, 500); 
}
