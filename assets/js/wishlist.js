
// PRELOADER START
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector("#pre-loader").style.opacity = 0;
    document.querySelector("#pre-loader").style.visibility = "hidden";
});
// PRELOADER END

/////////////////////////////////////////////////////
// Button Hover Animation

$('.fz-def-btn').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
        top: y,
        left: x
    });
});


// NICE SELECT JS START =====
$(document).ready(function () {
    $('select').niceSelect();
});
// ===== NICE SELECT JS END

// ======= CATEGORY LIST OPEN/CLOSE START ======= 
const categoryArea = document.querySelector(".fz-category-area");
const categoryBtn = document.querySelector(".fz-category-btn");
const categoryList = document.querySelector(".fz-category-menu");

if (categoryBtn) {
    categoryBtn.addEventListener("click", () => {
        categoryList.classList.toggle("open");
    })
}
if (categoryList) {
    document.addEventListener("click", (e) => {
        if (!categoryArea.contains(e.target)) {
            categoryList.classList.remove("open");
        }
    })

    window.onscroll = () => {
        if (document.querySelector("header").classList.contains("fixed")) {
            categoryList.classList.remove("open")
        }
    }
}

// ======= CATEGORY LIST OPEN/CLOSE END =======

// NAV MENU OPEN/CLOSE BTN JS START =====
const hamburger = document.querySelector(".fz-hamburger");
const navbar = document.querySelector(".fz-offcanvas-main-nav-wrapper");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navbar.classList.add("open");
        body.style.overflow = "hidden";
    });
}
$('.fz-button-close').on('click', function () {
    $('.fz-offcanvas-main-nav-wrapper').removeClass('open');
    body.style.overflow = "auto";
})
//===== NAV MENU OPEN/CLOSE BTN JS END 

// ======= MEAN MENU OPTIONS START =======
$(document).ready(function () {
    $('.fz-header-nav').meanmenu({
        meanMenuContainer: '.mobile-menu-updated',
        meanScreenWidth: "991",
        meanExpand: ['+'],
        meanClose: ['-'],
    });
});
// ======= MEAN MENU OPTIONS END =======



const body = document.body;
const cartBtn = document.querySelector(".fz-header-cart-btn");
const cartModal = document.querySelector("#cart-area-modal");
const overlay = document.querySelector(".overlay");

if (cartBtn) {
    cartBtn.onclick = () => {
        cartModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }
}

const quantityOpts = document.querySelectorAll(".cart-product__quantity");

quantityOpts.forEach(quantityOpt => {
    const minusBtn = quantityOpt.querySelector(".cart-product__minus");
    const plusBtn = quantityOpt.querySelector(".cart-product__plus");

    const increasingQtyValue = () => {
        const productQuantityInput = quantityOpt.querySelector(".cart-product-quantity-input");
        productQuantityInput.value++;
    }

    const decreasingQtyValue = () => {
        const productQuantityInput = quantityOpt.querySelector(".cart-product-quantity-input");
        if (productQuantityInput.value > 1) {
            productQuantityInput.value--;
        }
    }

    plusBtn.onclick = () => {
        increasingQtyValue();
    }

    minusBtn.onclick = () => {
        decreasingQtyValue();
    }
});

// WISHLIST MODAL JS
const wishlistBtn = document.querySelector(".fz-header-wishlist-btn");
const wishlistModal = document.querySelector(".fz-wishlist-modal");

// FIXED HEADER =====
window.addEventListener("scroll", () => {
    const toFixHeaders = document.querySelectorAll(".to-be-fixed");
    toFixHeaders.forEach(toFixHeader => {
        if (window.pageYOffset > 100) {
            toFixHeader.classList.add("fixed");
            document.body.style.paddingTop = toFixHeader.getBoundingClientRect().height + 'px';
        } else {
            toFixHeader.classList.remove("fixed");
            document.body.style.paddingTop = 0;
        }
    })
});
//===== FIXED HEADER




//----------------- PRODCUT DETAILS IMAGES SLIDER JS START ---------------------------------

//----------------- PRODCUT DETAILS IMAGES SLIDER JS END ---------------------------------

// load wishlist from local storage

const singleFavoriteProductTemplate = (item, isPortfolioItem) => {
    const typeQueryParam = isPortfolioItem ? '&type=portfolio' : ''
    return `
    <div class="col-xl-4 col-md-4 col-6 col-xxs-12">
    <div class="fz-1-single-product">
        <div class="fz-single-product__img">
            <a style="width: 100%; height: 100%;" href="shop-details.html?productId=${item.id}${typeQueryParam}">
                <img src=${item.images[0]} alt="Product Image">
            </a>
            <div class="fz-single-product__actions">
    
            </div>
        </div>
    
        <div class="fz-single-product__txt">
            <span class="fz-single-product__category list-view-text">Wooden Door</span>
            <a href="shop-details.html?productId=${item.id}" class="fz-single-product__title">${item.title}</a>
            <div class="fz-single-product__price-rating">
                <p class="fz-single-product__price">
                    <span class="current-price">${item.price} AZN</span>
                </p>
    
                <div class="rating list-view-text">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-light fa-star"></i>
                </div>
            </div>
    
            <p class="fz-single-product__desc list-view-text">

            </p>
    
            <div class="fz-single-product__actions list-view-text">
                <button class="fz-add-to-wishlist-btn">
                    <span class="btn-txt">add To wishlist</span>
                    <span class="btn-icon"><i class="fa-light fa-heart"></i></span>
                </button>
            </div>
        </div>
    </div>
    </div>
    `
}

const wishlistProductsContainer = document.querySelector(".fz-inner-products-container .row")


const addToFavorite = (item) => {
    // const {id, title, price, imageUrl, categoryId} = item
    let wishList = JSON.parse(localStorage.getItem('wishlist')) || []

        wishList = wishList.filter(el => el.id !== item.id)
        Toastify({
          text: "Bəyəndiklərimdən silindi",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #fdf11d, #fcb045)",
          },
          // Use template to customize content
          template: '<div class="toastify-content"><span class="toastify-text">Bəyəndiklərimdən silindi</span><span class="toastify-secondary-text">Secondary Text Goes Here</span></div>',
          onClick: function() {} // Callback after click
        }).showToast();
        
    localStorage.setItem("wishlist", JSON.stringify(wishList))
    loadWishlistProducts()
}

const loadWishlistProducts = () => {
    const products = JSON.parse(localStorage.getItem("wishlist")) || []

    wishlistProductsContainer.innerHTML = ""
    products.forEach((door, idx) => {
        const isPortfolioItem = door?.images[0].includes('portfolio')
        const singleProduct = singleFavoriteProductTemplate(door, isPortfolioItem).trim()
        const tempElement = document.createElement("div")
        tempElement.innerHTML = singleProduct
        wishlistProductsContainer.appendChild(tempElement.firstChild)

        const addToWishlistBtn = document.createElement("button")
        addToWishlistBtn.innerHTML = `
        <span class="btn-icon btn-icon--active"><i class="fa-light fa-heart"></i></span>
    `
        addToWishlistBtn.classList.add("fz-add-to-wishlist-btn")
        const wishlistBtnWrapper = document.querySelectorAll(".fz-single-product__actions:not([class*=' '])")[idx]
        const wishlistBtnWrapperListView = document.querySelectorAll(".fz-single-product__actions.list-view-text")[idx]    
        const addToWishInListView = addToWishlistBtn.cloneNode(true);
        addToWishlistBtn.addEventListener("click", () => {
            addToFavorite(door)
        })
        addToWishInListView.addEventListener("click", () => {
            addToFavorite(door)
        })
        wishlistBtnWrapperListView.appendChild(addToWishInListView)
        wishlistBtnWrapper.appendChild(addToWishlistBtn)
    })
}

loadWishlistProducts()