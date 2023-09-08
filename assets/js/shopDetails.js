
// PRELOADER START
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector("#pre-loader").style.opacity = 0;
    document.querySelector("#pre-loader").style.visibility = "hidden";
});
// PRELOADER END

function getQueryParamValue(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/////////////////////////////////////////////////////
// Button Hover Animation

const getSingleProduct = async () => {
  const productId = getQueryParamValue('productId')
  const res = await fetch("../../products/products.json")
  const data = await res.json()
  const { products } = data

  const itemMatch = products.find(item => item.id === productId)
  if (!itemMatch) {
    alert("Məhsul tapılmadı")
    return
  }
  const productImagesContainer = document.querySelector(".fz-product-details__img")
  const productImagesContainerNav = document.querySelector(".fz-product-details__img-nav")
  productImagesContainer.innerHTML = ""
  productImagesContainerNav.innerHTML = ""

  itemMatch.images.forEach(url => {
    const imgEl = document.createElement("img")
    imgEl.src = `assets/images/roomDoors/${url}`
    imgEl.alt = "Door Product Image"
    const imgClone = imgEl.cloneNode(true)
    productImagesContainer.append(imgEl)
    productImagesContainerNav.append(imgClone)
  })
  $('#fz-product-details__img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
});

$('.fz-product-details__img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fz-product-details__img',
    dots: false,
    focusOnSelect: true,
});
}
getSingleProduct()

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

if (wishlistBtn) {
    wishlistBtn.onclick = () => {
        wishlistModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }
}


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

// QUICK VIEW MODAL JS =====
const quickviewBtns = document.querySelectorAll(".fz-3-quick-view");
const quickviewModal = document.querySelector(".fz-quick-view-modal");

quickviewBtns.forEach(quickviewBtn => {
    quickviewBtn.onclick = () => {
        quickviewModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }

    document.onclick = (e) => {
        if (!e.target.classList.contains("fz-3-quick-view") && !quickviewModal.contains(e.target)) {
            quickviewModal.classList.remove("open");
        }
    }
})


//----------------- PRODCUT DETAILS IMAGES SLIDER JS START ---------------------------------

//----------------- PRODCUT DETAILS IMAGES SLIDER JS END ---------------------------------

