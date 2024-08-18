document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category') || '.';

    const allCategoryElement = document.querySelector(`ul li a[data-category="${selectedCategory}"]`) || document.querySelector('ul li a[data-category="."]');
    
    if (allCategoryElement) {
        highlightCategory(allCategoryElement);
        filterProductsByCategory(selectedCategory);
    }

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
    if (category === ".") {
        filteredProducts = products; 
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
