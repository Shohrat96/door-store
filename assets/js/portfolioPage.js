
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

// if (wishlistBtn) {
//     wishlistBtn.onclick = () => {
//         wishlistModal.classList.add("open");
//         overlay.classList.add("open");
//         body.style.overflow = "hidden";
//     }
// }


// CART & WISHLIST MODAL CLOSE
const closeBtns = document.querySelectorAll(".cart-area-modal-close-btn");
closeBtns.forEach(closeBtn => {
    closeBtn.onclick = () => {
        closeModal();
    }
})
overlay.addEventListener("click", () => {
    closeModal();
})

const closeModal = () => {
    cartModal.classList.remove("open");
    wishlistModal.classList.remove("open")
    overlay.classList.remove("open");
    body.style.overflow = "visible";
}



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



// set portfolio products
const singlePortfolioTemplate = (item) => `
<div class="col-xl-4 col-md-4 col-6 col-xxs-12">
<div class="fz-1-single-product">
    <div class="fz-single-product__img">
        <img src="assets/images/portfolio/${item.images[0]}" alt="Product Image">
        <div class="fz-single-product__actions">
            <button class="fz-add-to-wishlist-btn">
                <span class="btn-txt">add To wishlist</span>
                <span class="btn-icon"><i class="fa-light fa-heart"></i></span>
            </button>
        </div>
    </div>

    <div class="fz-single-product__txt">
        <span class="fz-single-product__category list-view-text">Wooden Door</span>
        <a href="shop-details.html" class="fz-single-product__title">${item.title}</a>
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
            2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
            Led Light for Notebook Laptop/PC RGB Backlit Universal.
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

const portfolioProductsContainer = document.querySelector(".fz-inner-products-container .row")


const setPortfolioProducts = async () => {
    const res = await fetch("../products/products.json")
    const data = await res.json()
    if (data.portfolio.length > 0) {
      portfolioProductsContainer.innerHTML = ''
  
      data.portfolio.forEach(element => {
        const singleLatestEl = singlePortfolioTemplate(element).trim()
        const tempWrapperElement = document.createElement('div')
        tempWrapperElement.innerHTML = singleLatestEl
        portfolioProductsContainer.append(tempWrapperElement.firstChild)
      });
  
    }
  }
  
  setPortfolioProducts()