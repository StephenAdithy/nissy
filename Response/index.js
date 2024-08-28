const products = [
    {
        id: 0,
        name: 'ABC Malt',
        price: '₹320.00 - ₹1200.00',
        image: 'img/products/abc1.jpg',
        category: 'Malt',
        description: 'Its increases hemoglobin very suitable for pregnant women and children Boosts immunity and stamina Helps keep the skin glowing keeps blood pressure and sugar levels under control ',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/abc1.jpg', 'img/products/abc 2.jpg', 'img/products/abc 3.jpg'],
        availability: "asas of Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹400.00-₹1200.00",
        productdescription: "Ingredients\n\napple, beetroot, carrot, Jaggery powder, Cashew, Almond, and Elachi\n\nTo make a delicious NISSY ABC MALT\n\nTake 1-2 teaspoons of NISSY ABC malt mix to your mug\npour 200 ml of milk either hot or cold\nstir well and enjoy it.\n\n• Don’t boil it along with milk.\n\nHealth benefits:\n\nEncourage healthy brain growth\nEnhances your memory power.\nHelps maintain the glow of the skin.\nBeneficial for both skin and hair\nPromises to heal the gut well\nregulating your blood pressure\n\n <b>Shelf Life:</b>\n\n6 months",
        information: "<b>பீட்ரூட்,</b> நாட்டுச்சர்க்கரை,  பாதாம், முந்திரி ,ஏலக்காய்",
        productImage: [
            "img/products/abc1.jpg",
            "img/products/abc 2.jpg",
            "img/products/abc 3.jpg",
            "img/products/Untitled design.png",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 800 },
            { id: "weight2", value: "250GM", label: "250GM", price: 400 },
            { id: "weight3", value: "500GM", label: "500GM", price: 1200 }
        ],
    },
    {
        id: 1,
        name: 'Beetroot Malt',
        price: '₹ 270.00-₹ 1000.00',
        image: 'img/products/beetroot1.jpg',
        category: 'Malt',
        description: 'It increases hemoglobin. very suitable for pregnant women and children  Boosts immunity and stamina Helps keep the skin glowing keeps blood pressure and sugar levels under control',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/beetroot1.jpg', 'img/products/beetroot2.jpg', 'img/products/beetroot3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: " ₹ 270.00-₹ 1000.00",
        selfLife: '2 months',
        productdescription: "Ingredients\n\napple, beetroot, carrot, Jaggery powder, Cashew, Almond, and Elachi\n\nTo make a delicious NISSY ABC MALT\n\nTake 1-2 teaspoons of NISSY ABC malt mix to your mug\npour 200 ml of milk either hot or cold\nstir well and enjoy it.\n\n• Don’t boil it along with milk.\n\nHealth benefits:\n\nEncourage healthy brain growth\nEnhances your memory power.\nHelps maintain the glow of the skin.\nBeneficial for both skin and hair\nPromises to heal the gut well\nregulating your blood pressure\n\nShelf Life:\n\n6 months",
        information: "பீட்ரூட், நாட்டுச்சர்க்கரை,  பாதாம், முந்திரி ,ஏலக்காய்",
        productImage: [
            "img/products/beetroot1.jpg",
            "img/products/beetroot2.jpg",
            "img/products/beetroot3.jpg",
            "img/products/beetroot4.jpg",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 270 },
            { id: "weight3", value: "500GM", label: "500GM", price: 520 }
        ],
    },
    {
        id: 2,
        name: 'Carrot Malt',
        price: '₹ 320.00 - ₹ 1200', 
        image: 'img/products/Carrot1.jpg',
        category: 'Malt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/products/Carrot1.jpg', 'img/products/Carrot2.jpg', 'img/products/Carrot3.jpg'],
        availability: "In Stock",
        shipping: "2 - 3 days shipping (Free Shipping).",
        weightDetail: "0.5 kg",
        rate: '₹ 320.00 - ₹ 1200',
        selfLife: '1 months',
        productImage: [
            "img/products/Carrot1.jpg",
            "img/products/Carrot2.jpg",
            "img/products/Carrot3.jpg",
            "img/products/Carrot1.jpg",
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 3,
        name: 'Crab Pool Security',
        price: '₹ 400.00',
        image: 'img/Nissy/Newimages/4.jpg',
        category: 'Malt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg','img/Nissy/Newimages/4.jpg'],
        availability: "out od Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '7 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 4,
        name: 'Crab Pool Security',
        price: '₹ 400.00', image: 'img/Nissy/Newimages/5.jpg',
        category: 'Malt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg','img/Nissy/Newimages/2.jpg'],
        availability: "In of Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '4 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 5,
        name: 'Crab Pool Security',
        price: '₹ 400.00', image: 'img/Nissy/Newimages/6.jpg',
        category: 'babyfood',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg'],
        availability: "In Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        selfLife: '12 months',
        rate: " ₹ 400.00",
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 6,
        name: 'Crab Pool Security',
        price: '₹ 400.00', image: 'img/Nissy/Newimages/7.jpg',
        category: 'babyfood',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg'],
        availability: "In Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '4 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 7,
        name: 'skin care',
        price: '₹ 400.00', image: 'img/Nissy/Newimages/8.jpg',
        category: 'skincare',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg'],
        availability: "Out of Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '6 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-1.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 8,
        name: 'Crab Pool Security',
        price: '₹ 400.00', image: 'img/Nissy/Newimages/9.jpg',
        category: 'skincare',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg'],
        availability: "In Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '12 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-4.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },
    {
        id: 9,
        name: 'Crab Pool Security',
        price: '$30.00',
        image: 'img/Nissy/Newimages/10.jpg',
        category: 'skincare',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg'],
        availability: "In Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '6 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-4.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 1000 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 101 }
        ],
    },

    {
        id: 10,
        name: 'Crab Pool Security',
        price: '₹ 400.00',
        image: 'img/Nissy/Newimages/4.jpg',
        category: 'Malt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio quidem aliquid voluptatem veritatis maxime eaque voluptatum expedita illo excepturi atque at assumenda quod, delectus ipsa aliquam cupiditate cum tempora.',
        weightOptions: ['1L', '250ml', '500ml'],
        images: ['img/Nissy/Newimages/3.jpg', 'img/Nissy/Newimages/6.jpg','img/Nissy/Newimages/1.jpg'],
        availability: "out od Stock",
        shipping: "01 day shipping. <samp>Free pickup today</samp>",
        weightDetail: "0.5 kg",
        rate: " ₹ 400.00",
        selfLife: '2 months',
        productImage: [
            "img/product/details/product-details-1.jpg",
            "img/product/details/thumb-4.jpg",
            "img/product/details/thumb-2.jpg",
            "img/product/details/thumb-3.jpg",
            "img/product/details/thumb-4.jpg"
        ],
        weights: [
            { id: "weight1", value: "1KG", label: "1KG", price: 200 },
            { id: "weight2", value: "250GM", label: "250GM", price: 100 },
            { id: "weight3", value: "500GM", label: "500GM", price: 90 }
        ],
    },
    // Add more products as needed
];


const Bannerimages = [
    { src: "img/banner/herobanner1.jpg", alt: "First slide",category: "Malt", },
    { src: "img/banner/herobanner2.jpg", alt: "Second slide" , category: "babyfood",},
    { src: "img/banner/herobanner3.jpg", alt: "Third slide" , category: "skincare",},
    { src: "img/banner/herobanner4.jpg", alt: "Fourth slide", category: "naturalprotienpowder" },
    { src: "img/banner/herobanner5.jpg", alt: "Fifth slide", category: "Malt" }
];

const categoryItems = [
    { src: "img/Category/3.jpg", category: "Malt", alt: "Alternate Text" },
    { src: "img/Category/Me.jpg", category: "babyfood", alt: "Alternate Text" },
    { src: "img/Category/2.jpg", category: "skincare", alt: "Alternate Text" },
    { src: "img/Category/1.jpg", category: "naturalprotienpowder", alt: "Alternate Text" }
];

function generateProductHTML(product) {
    const weightOptionsHTML = product.weights.map(weight =>
        `<label>
        <input type="radio" name="weight-${product.id}" value="${weight.value}" data-price="${weight.price}" onclick="updatePrice(${product.id})"> 
        ${weight.label}
    </label><br>`).join('');
    const imagesHTML = product.images.map(img =>
        `<img src="${img}" alt="image">`).join('');

    return `
                <div class="featured__filter-items col-lg-3 col-md-6 col-sm-6 mix ${product.category}">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" onclick="location.href='shop-details.html?id=${product.id}'"> 
                        <img src=${product.image} alt="product"> 
                       </div>
                        <div class="featured__item__text">
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
                                            <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
}


function addToCartWithSelectedWeight(productId) {
    const selectedWeightElement = document.querySelector(`input[name='weight-${productId}']:checked`);
    if (!selectedWeightElement) {
        showToast(`Please select any weight`,'error')
        return;
    }

    const selectedWeight = selectedWeightElement.value;
    const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));

    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (!quantityElement) {
        showToast('Please select the Quantity','error');
        return;
    }

    const quantity = parseInt(quantityElement.textContent);

    if (isNaN(quantity)) {
        showToast('Invalid quantity value','error');
        return;
    }

    addToCart(productId, selectedWeight, quantity, pricePerUnit);
}


function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    
    const selectedWeightElement = document.querySelector(`input[name="weight-${productId}"]:checked`);
    
    if (!selectedWeightElement) {
        showToast('Please select a weight option.','error');
        return;
    }
    
    const selectedWeight = selectedWeightElement.value;
    const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));
    
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);

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

function updatePrice(productId) {
    const selectedWeight = document.querySelector(`input[name='weight-${productId}']:checked`);
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);
    const priceDisplay = document.getElementById(`calculated-price-${productId}`);

    console.log("Selected weight:", selectedWeight);

    if (selectedWeight && priceDisplay) {
        const pricePerUnit = parseFloat(selectedWeight.getAttribute('data-price'));
        console.log("Price per unit:", pricePerUnit);
        const totalPrice = pricePerUnit * quantity;
        priceDisplay.textContent = totalPrice.toFixed(2);
    }
}

function updatePrice1(productId) {
    const selectedWeightElement = document.querySelector("input[name='weight']:checked");
    const quantityElement = document.getElementById(`quantity-${productId}`);
    
    if (selectedWeightElement && quantityElement) {
        const pricePerUnit = parseFloat(selectedWeightElement.getAttribute('data-price'));
        const quantity = parseInt(quantityElement.value);

        const totalPrice = pricePerUnit * quantity;

        document.querySelector(".product-details-info li:nth-child(1) span").innerText = `₹${totalPrice}`;
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');

    toast.classList.remove('success', 'error');
    
    if (type === 'success') {
        toast.classList.add('success');
    } else if (type === 'error') {
        toast.classList.add('error');
    }

    toastMessage.textContent = message; 
    toast.classList.add('show'); 

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function closeToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}

function addToCart(productId, selectedWeight, quantity, pricePerUnit) {
    const product = products.find(p => p.id === productId);

    if (!selectedWeight) {
        showToast('Please select a weight option','error');
        return;
    }

    if (isNaN(quantity) || quantity < 1) {
        showToast('Please select a valid quantity.','error');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.weight === selectedWeight);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
        cart[existingProductIndex].pricePerUnit += quantity * pricePerUnit;
    } else {
        cart.push({ ...product, weight: selectedWeight, pricePerUnit: quantity * pricePerUnit, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    closeNav(productId);

    showToast('Item added to cart!','success');
}


function renderProducts(products) {
    const container = document.querySelector('.featured__filter');
    container.innerHTML = products.map(generateProductHTML).join('');
}

function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function setActiveCategory(category) {
    filterProductsByCategory(category);
    document.querySelectorAll('.featured__controls a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-category') === category);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.querySelector('.fa-shopping-bag + span').textContent = cartCount;

    const favoriteCount = localStorage.getItem('favoriteCount') || 0;
    document.querySelector('.fa-heart + span').textContent = favoriteCount;

    updateCartCount();
    updateFavoriteCount();
});

function openNav(id) {
    const screenWidth = window.innerWidth;

    let width;
    if (screenWidth <= 768) { 
        width = "100%";
    } else {
        width = "500px"; 
    }

    document.getElementById(`mySidenav-${id}`).style.width = width;
    document.getElementById(`overlay-${id}`).style.display = "block";

    currentIndex[id] = 0;
    showSlides(id);
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.fa-shopping-bag + span').textContent = totalCount;
    localStorage.setItem('cartCount', totalCount);
}



function closeNav(id) {
    const sidebar = document.getElementById(`mySidenav-${id}`);
    const radioButtons = sidebar.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false; 
    });

    const priceDisplay = document.getElementById(`calculated-price-${id}`);
    const quantityDisplay = document.getElementById(`quantity-${id}`);
    
    if (priceDisplay) {
        priceDisplay.textContent = "0"; 
    }
    
    if (quantityDisplay) {
        quantityDisplay.textContent = "1"; 
    }
    document.getElementById(`mySidenav-${id}`).style.width = "0";
    document.getElementById(`overlay-${id}`).style.display = "none";
}

function changeQuantity1(amount, productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        let quantity = parseInt(quantityElement.textContent);
        quantity = Math.max(1, quantity + amount);
        quantityElement.textContent = quantity;
        updatePrice(productId);
    }
}


function changeQuantity(amount, productId) {
    let quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        let oldValue = parseInt(quantityElement.value);
        let newValue = oldValue + amount;

        if (newValue < 1) {
            newValue = 1;
        }

        quantityElement.value = newValue;

        updatePrice1(productId);
    }
}


let currentIndex = {};

function moveSlide(id, n) {
    currentIndex[id] += n;
    showSlides(id);
}

function showSlides(id) {
    const slides = document.querySelectorAll(`#slider-${id} .slides img`);
    if (currentIndex[id] >= slides.length) {
        currentIndex[id] = 0;
    }
    if (currentIndex[id] < 0) {
        currentIndex[id] = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex[id] ? 'block' : 'none';
    });
}


function updateFavoriteUI() {
    
    console.log('Updating favorite UI...');
    
    const favoriteLinks = document.querySelectorAll('.product__item__pic__hover li a');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    favoriteLinks.forEach(link => {
        const productId = parseInt(link.getAttribute('onclick').match(/(\d+)/)[0], 10);
        
        console.log(`Product ID: ${productId}, Is Favorite: ${favorites.includes(productId)}`);
        
        if (favorites.includes(productId)) {
            link.classList.add('favorite');
        } else {
            link.classList.remove('favorite');
        }
    });
}




function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const countElement = document.getElementById('favorite-count');
    if (countElement) {
        countElement.textContent = favorites.length;
    }
}


function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const productIndex = favorites.indexOf(productId);
    const isFavorite = productIndex !== -1;

    if (isFavorite) {
        favorites.splice(productIndex, 1);
        showToast('Removed from favorites', 'success'); 
    } else {
        favorites.push(productId);
        showToast('Added to favorites', 'success'); 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    updateFavoriteCount();
    updateFavoriteUI(productId);
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favoritesList');
    const emptyFavoritesMessage = document.getElementById('emptyFavoritesMessage');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '';  
        if (emptyFavoritesMessage) {
            emptyFavoritesMessage.style.display = 'block';  
        }
    } else {
        emptyFavoritesMessage.style.display = 'none'; 
    favoritesList.innerHTML = '';

    favorites.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            favoritesList.innerHTML += `
                <div class="Wish-list-main">
                    <div class="Wish-list-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="Wish-list-content">
                        <div class="Wish-list-content-header">${product.name}</div>
                        <div class="Wish-list-content-rate"><span>${product.price}</span></div>
                        <div class="Wish-list-content-viewpro" onclick="location.href='shop-details.html?id=${product.id}'">View Product</div>
                    </div>
                    <div class="Wish-list-close" onclick="removeFavorite(${id})">&times;</div>
                </div>
            `;
        }
    });
}
}
function removeFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showToast(`WishList Removed Successfully`,'success');
    updateFavoriteCount();
    loadFavorites();
    updateFavoriteUI(productId);
}

function openNavwl() {
    document.getElementById("sideNavbarwl").style.width = window.innerWidth <= 768 ? "100%" : "450px";
    document.getElementById("overlaywl").style.display = "block";
    loadFavorites();
}

function closeNavwl() {
    document.getElementById("sideNavbarwl").style.width = "0";
    document.getElementById("overlaywl").style.display = "none";
}

window.onload = function () {
    updateFavoriteCount();
    updateFavoriteUI();
    document.getElementById("heartIcon").onclick = openNavwl;
    document.getElementById("closeNavwl").onclick = closeNavwl;
    document.getElementById("overlaywl").onclick = closeNavwl;
};



$(document).ready(function() {
    function createBootstrapCarousel(items) {
        const carouselContainer = document.getElementById('carousel-items-bootstrap');
        carouselContainer.innerHTML = ''; 

        items.forEach((item, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const imgElement = document.createElement('img');
            imgElement.addEventListener('click', () => {
                window.location.href = `shop-grid.html?category=${item.category}`;
            });
            imgElement.className = 'd-block w-100 h-500';
            imgElement.src = item.src;
            imgElement.alt = item.alt;
            
            carouselItem.appendChild(imgElement);
            carouselContainer.appendChild(carouselItem);
        });
    }

    function createOwlCarousel(items) {
        const carouselContainer = document.getElementById('owl-carousel-items');
        carouselContainer.innerHTML = ''; 

        items.forEach(item => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'item';
            
            const imgElement = document.createElement('img');
            imgElement.className = 'sect1 mb-4';
            imgElement.src = item.src;
            imgElement.alt = item.alt;
            imgElement.dataset.category = item.category;
           
            imgElement.addEventListener('click', function() {
                window.location.href = `shop-grid.html?category=${item.category}`;
            });
            carouselItem.appendChild(imgElement);
            carouselContainer.appendChild(carouselItem);
        });

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: [
                '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
                '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                540: {
                    items: 2
                },
                767: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    createBootstrapCarousel(Bannerimages);
    createOwlCarousel(categoryItems);
});

var content = '';

$(document).ready(function () {
    $('a[data-toggle="modal"]').click(function () {
        var title = $(this).data('title');
        content = $(this).data('content');

        $('#exampleModalCenter .modal-title').text(title);
        $('#exampleModalCenter .modal-body').html(content);
    });
});

$('#exampleModalCenter .modal-body').html(content); 
