
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
const productId = getQueryParamValue('productId')
const isPortfolioType = getQueryParamValue('type') === 'portfolio'
let productMatch = {}
/////////////////////////////////////////////////////
// Button Hover Animation

const getSingleProduct = async () => {

  const res = await fetch("../../products/products.json")
  const data = await res.json()
  const { products, categories, portfolio } = data

  const productsToSearch = isPortfolioType ? portfolio : products
  const itemMatch = productsToSearch.find(item => item.id === productId)
  if (!itemMatch) {
    alert("Məhsul tapılmadı")
    return
  }
  renderRelatedProductsSlider(productsToSearch) // call with category room, entrance
  productMatch = JSON.parse(JSON.stringify(itemMatch))
  const { title, price, images, categoryId } = itemMatch;
  const productImagesContainer = document.querySelector(".fz-product-details__img")
  const productImagesContainerNav = document.querySelector(".fz-product-details__img-nav")
  const productTitleEl = document.querySelector(".fz-product-details__title");
  const productPriceEl = document.querySelector(".price");
  const productCategoryEl = document.querySelector("#product-category");

  productTitleEl.textContent = title;
  productPriceEl.textContent = `${price} AZN`
  productCategoryEl.textContent = categories.find(item => item.id === categoryId)?.title;
  productImagesContainer.innerHTML = ""
  productImagesContainerNav.innerHTML = ""

  images.forEach(url => {
    const imgEl = document.createElement("img")
    imgEl.src = url
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


const singleRelatedProductTemplate = (item) => {
    const typeQueryParam = isPortfolioType ? '&type=portfolio' : ''
    return `
    <div class="col-lg-3 col-md-4 col-6 col-xxs-12">
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
            <a href="shop-details.html?productId=${item.id}${typeQueryParam}" class="fz-single-product__title">${item.title}</a>
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

const renderRelatedProductsSlider = async (productsToSearch) => {
    const relatedProductsContainer = document.querySelector(".related-product-section .row")
    relatedProductsContainer.innerHTML = ""
    productsToSearch.forEach(item => {
        const tempEl = document.createElement("div")
        tempEl.innerHTML = singleRelatedProductTemplate(item).trim()
        relatedProductsContainer.append(tempEl.firstChild)
    })
    $(".related-product-section .row").slick({
        slidesToShow: 4,
        autoplay: true,
        autoplayTimeout: 100,
        slidesToScroll: 4,
        infinite: true,
        adaptiveHeight: true,
        pauseOnHover: false,
        appendArrows: $(".related-product-section-slider-nav"),
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa-regular fa-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa-regular fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
      
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
      
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
      
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
      
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    });
}


$('.fz-def-btn').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
        top: y,
        left: x
    });
});
const renderAddToWishlistBtn = () => {
    const btnContainer = document.querySelector('.fz-product-details__actions')
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || []
    const isInWishList = wishlistItems.some(door => door.id === productId)
    
    const template = `
    <button class="fz-product-details__add-to-wishlist ${isInWishList ? 'fz-product-details__add-to-wishlist-active' : ''}">
        <i class="${isInWishList ? 'fa' : 'fa-light'} fa-heart"></i>
        <span style="margin-left: 4px;"">${isInWishList ? 'Bəyəndiklərimdən çıxart' : 'Bəyəndiklərimə əlavə et'}</span>
    </button>`
    const tempElement = document.createElement('div')
    tempElement.innerHTML = template.trim()
    tempElement.firstChild.addEventListener('click', () => {
        if (isInWishList) {
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems.filter(item => item.id !==productId)))
        } else {
            localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, productMatch]))
        }
        renderAddToWishlistBtn()

    })
    btnContainer.innerHTML = ""
    btnContainer.appendChild(tempElement.firstChild)
}
renderAddToWishlistBtn()
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

