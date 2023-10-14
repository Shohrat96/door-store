// PRELOADER START
const loaderStart = () => {
  // document.body.style.position = "fixed";
  document.querySelector("#pre-loader").style.opacity = 1;
  document.querySelector("#pre-loader").style.visibility = "visible";
  document.querySelector("#pre-loader").style.display = "block";
};

// loaderStart()

const loaderEnd = () => {
  document.body.style.position = "";
  document.querySelector("#pre-loader").style.opacity = 0;
  document.querySelector("#pre-loader").style.visibility = "hidden";
  document.querySelector("#pre-loader").style.display = "none";
}
window.addEventListener("load", () => {
  // loaderEnd();
  loaderEnd()
});
// PRELOADER END

// BANNER MODAL VIDEO
$(".fz-banner-vid-btn").modalVideo();

/////////////////////////////////////////////////////
// Button Hover Animation
$(".fz-def-btn").on("mouseenter", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
});
$(".fz-def-btn").on("mouseout", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
});

/////////////////////////////////////////////////////
// Button Move Animation
const all_btn = gsap.utils.toArray(".fz-def_btn_wrapper");
const all_btn_cirlce = gsap.utils.toArray(".fz-def-btn");
all_btn.forEach((btn, i) => {
  $(btn).mousemove(function (e) {
    callParallax(e);
  });
  function callParallax(e) {
    parallaxIt(e, all_btn_cirlce[i], 80);
  }

  function parallaxIt(e, target, movement) {
    var $this = $(btn);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    gsap.to(target, 0.5, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
      ease: Power2.easeOut,
    });
  }
  $(btn).mouseleave(function (e) {
    gsap.to(all_btn_cirlce[i], 0.5, {
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    });
  });
});

// COUNTDOWN JS START =====
$(".fz-hot-deal-countdown").syotimer({
  date: new Date(2023, 2, 24, 15),
  periodic: true,
  periodInterval: 10,
  periodUnit: "d",
});
//===== COUNTDOWN JS END

// NICE SELECT JS START =====
$(document).ready(function () {
  $("select").niceSelect();
});
// ===== NICE SELECT JS END

// ======= CATEGORY LIST OPEN/CLOSE START =======
const categoryArea = document.querySelector(".fz-category-area");
const categoryBtn = document.querySelector(".fz-category-btn");
const categoryList = document.querySelector(".fz-category-menu");

if (categoryBtn) {
  categoryBtn.addEventListener("click", () => {
    categoryList.classList.toggle("open");
  });
}
if (categoryList) {
  document.addEventListener("click", (e) => {
    if (!categoryArea.contains(e.target)) {
      categoryList.classList.remove("open");
    }
  });

  window.onscroll = () => {
    if (document.querySelector("header").classList.contains("fixed")) {
      categoryList.classList.remove("open");
    }
  };
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
$(".fz-button-close").on("click", function () {
  $(".fz-offcanvas-main-nav-wrapper").removeClass("open");
  body.style.overflow = "auto";
});
//===== NAV MENU OPEN/CLOSE BTN JS END

// ======= MEAN MENU OPTIONS START =======
$(document).ready(function () {
  $(".fz-header-nav").meanmenu({
    meanMenuContainer: ".mobile-menu-updated",
    meanScreenWidth: "991",
    meanExpand: ["+"],
    meanClose: ["-"],
  });
});
// ======= MEAN MENU OPTIONS END =======

// INDEX-2 SEARCH BAR JS START =====
$(".fz-2-search-btn").on("click", function (e) {
  $(".fz-cbsearchbar").addClass("fz-cb-searchbar-opened");
  $(".overlay").addClass("open");
});
$(".fz-cbsearchbar__close, .overlay").on("click", function (e) {
  $(".fz-cbsearchbar").removeClass("fz-cb-searchbar-opened");
  $(".overlay").removeClass("open");
});
//===== INDEX-2 SEARCH BAR JS END

// BANNER SLIDER JS START =====
$(".fz-3-banner-slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  margin: 200,
});
//===== BANNER SLIDER JS END

// LAYER-CAKE SECTION SLIDER JS START =====
$(".fz-3-layer-cake-slider").owlCarousel({
  items: 4,
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  navContainer: ".fz-3-layer-cake-slider-nav",
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsiveBaseElement: document.body,

  responsive: {
    0: {
      items: 1,
      center: true,
    },

    480: {
      items: 2,
      center: false,
    },

    576: {
      items: 2,
    },

    768: {
      items: 3,
    },

    992: {
      items: 4,
    },

    1200: {
      margin: 30,
    },
  },
});
//===== LAYER-CAKE SECTION SLIDER JS END

// POUND-CAKE SECTION SLIDER JS START =====
$(".fz-3-pound-cake-slider").owlCarousel({
  items: 4,
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  navContainer: ".fz-3-pound-cake-slider-nav",
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsiveBaseElement: document.body,

  responsive: {
    0: {
      items: 1,
    },

    480: {
      items: 2,
    },

    576: {
      items: 2,
    },

    768: {
      items: 3,
    },

    992: {
      items: 4,
    },

    1200: {
      margin: 30,
    },
  },
});
//===== POUND-CAKE SECTION SLIDER JS END

// CUP-CAKE SECTION SLIDER JS START =====
$(".fz-cup-cake-slider").owlCarousel({
  items: 4,
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  navContainer: ".fz-cup-cake-slider-nav",
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsiveBaseElement: document.body,

  responsive: {
    0: {
      items: 1,
    },

    480: {
      items: 2,
    },

    576: {
      items: 2,
    },

    768: {
      items: 3,
    },

    992: {
      items: 4,
    },

    1200: {
      margin: 30,
    },
  },
});
//===== CUP-CAKE SECTION SLIDER JS START

$("#fz-2-testimonial-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  navContainer: ".fz-testimonial-slider-nav",
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  dotsContainer: ".fz-testimonial-slider-dots",
  dots: true,
});

$("#fz-3-testimonial-slider").slick({
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
  asNavFor: ".testimonial-img-slider",
  appendArrows: $(".fz-3-testimonial-slider-nav"),
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-regular fa-angle-up"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-regular fa-angle-down"></i></button>',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        verticalSwiping: false,
        vertical: false,
      },
    },
  ],
});

$(".testimonial-img-slider").slick({
  draggable: false,
  arrows: false,
  asNavFor: "#fz-3-testimonial-slider",
  fade: true,
});

$(".js-modal-btn").modalVideo();

const body = document.body;
const cartBtn = document.querySelector(".fz-header-cart-btn");
const cartModal = document.querySelector("#cart-area-modal");
const overlay = document.querySelector(".overlay");

if (cartBtn) {
  cartBtn.onclick = () => {
    cartModal.classList.add("open");
    overlay.classList.add("open");
    body.style.overflow = "hidden";
  };
}

const quantityOpts = document.querySelectorAll(".cart-product__quantity");

quantityOpts.forEach((quantityOpt) => {
  const minusBtn = quantityOpt.querySelector(".cart-product__minus");
  const plusBtn = quantityOpt.querySelector(".cart-product__plus");

  const increasingQtyValue = () => {
    const productQuantityInput = quantityOpt.querySelector(
      ".cart-product-quantity-input"
    );
    productQuantityInput.value++;
  };

  const decreasingQtyValue = () => {
    const productQuantityInput = quantityOpt.querySelector(
      ".cart-product-quantity-input"
    );
    if (productQuantityInput.value > 1) {
      productQuantityInput.value--;
    }
  };

  plusBtn.onclick = () => {
    increasingQtyValue();
  };

  minusBtn.onclick = () => {
    decreasingQtyValue();
  };
});

// WISHLIST MODAL JS
const wishlistBtn = document.querySelector(".fz-header-wishlist-btn");
const wishlistModal = document.querySelector(".fz-wishlist-modal");

// if (wishlistBtn) {
//   wishlistBtn.onclick = () => {
//     wishlistModal.classList.add("open");
//     overlay.classList.add("open");
//     body.style.overflow = "hidden";
//   };
// }

// CART & WISHLIST MODAL CLOSE
const closeBtns = document.querySelectorAll(".cart-area-modal-close-btn");
closeBtns.forEach((closeBtn) => {
  closeBtn.onclick = () => {
    closeModal();
  };
});
overlay.addEventListener("click", () => {
  closeModal();
});

const closeModal = () => {
  cartModal.classList.remove("open");
  wishlistModal.classList.remove("open");
  overlay.classList.remove("open");
  body.style.overflow = "visible";
};

// INDEX-3 BANNER VIDEO MODAL
$(".fz-1-banner-vid-btn").modalVideo();

$(".fz-1-banner-slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: false,
  autoplayTimeout: 7000,
  responsive: {
    1200: {
      nav: true,
    },
  },
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  onTranslated: function () {
    // Select the active slide
    var $activeSlide = $(".owl-item.active");

    // Apply the animation only to the active slide
    $activeSlide.find(".text5").each(function () {
      $(this).html(
        $(this).text().replace(/\S+/g, "<span class='word'>$&</span>")
      );
    });

    var $text5 = $activeSlide.find(".text5 span"),
      tl_5 = new TimelineMax({ repeat: 0 });

    tl_5.staggerFrom(
      $text5,
      0.5,
      { alpha: 0, x: 20, ease: Power1.easeOut },
      0.2,
      "+=0.2"
    );
  },
});

$(".fz-2-heading").each(function () {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>")
  );
});
var $fz2Heading = $(".fz-2-heading span"),
  tl_2 = new TimelineMax({ repeat: -1 });

tl_2
  .staggerFrom(
    $fz2Heading,
    0.5,
    {
      top: "+=25px",
      rotation: "-=-3deg",
      alpha: 0,
      scale: 0.8,
      ease: Power1.easeOut,
    },
    0.08
  )
  .to($fz2Heading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=5");

// 

$(".filter-navs button").on("click", function () {
  // Remove active class from all buttons
  $(".filter-navs button").removeClass("active");

  // Add active class to clicked button
  $(this).addClass("active");

  var filter = $(this).data("filter");
  $(".fz-1-products-container").slick("slickUnfilter");

  if (filter == "wood-door") {
    $(".fz-1-products-container").slick("slickFilter", ".wood-door");
  } else if (filter == "fiberglass") {
    $(".fz-1-products-container").slick("slickFilter", ".fiberglass");
  } else if (filter == "solid-core") {
    $(".fz-1-products-container").slick("slickFilter", ".solid-core");
  } else if (filter == "mdf") {
    $(".fz-1-products-container").slick("slickFilter", ".mdf");
  } else if (filter == "all") {
    $(".fz-1-products-container").slick("slickUnfilter");
  }
});

// $(".fz-1-modern-door-slider").owlCarousel({
//   items: 4,
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 1500,
//   nav: true,
//   navText: [
//     '<i class="fa-solid fa-angle-left"></i>',
//     '<i class="fa-solid fa-angle-right"></i>',
//   ],
//   navContainer: ".fz-1-modern-door-slider-nav",
//   margin: 15,
//   responsiveBaseElement: body,
//   responsive: {
//     0: {
//       items: 1,
//     },

//     480: {
//       items: 2,
//     },

//     576: {
//       items: 2,
//     },

//     768: {
//       items: 3,
//     },

//     992: {
//       items: 4,
//     },

//     1200: {
//       items: 4,
//     },
//   },
// });

$(".fz-1-brands").owlCarousel({
  items: 5,
  loop: true,
  autoplay: true,
  responsive: {
    0: {
      items: 3,
    },

    480: {
      items: 3,
    },

    768: {
      items: 4,
    },

    992: {
      items: 5,
    },
  },
});

/*--- PRODUCT VIEW TYPE CHANGE JS START ---*/
const gridViewBtn = document.querySelector(".grid-view");
const listViewBtn = document.querySelector(".list-view");
const productsRow = document.querySelectorAll(
  ".fz-inner-products-container .row > *"
);
const products = document.querySelectorAll(
  ".fz-inner-products-container .fz-1-single-product"
);
const productsContainer = document.querySelector(
  ".fz-inner-products-container"
);
const productsContainerRow = document.querySelector(
  ".fz-inner-products-container .row"
);
const addToFavorite = (item) => {
    // const {id, title, price, imageUrl, categoryId} = item
    let wishList = JSON.parse(localStorage.getItem('wishlist')) || []

    if (wishList.some(door => door.id === item.id)) {
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
        
    } else {
        wishList.push(item)
        Toastify({
          text: "Bəyəndiklərimə əlavə edildi",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          // Use template to customize content
          template: '<div class="toastify-content"><span class="toastify-text">Bəyəndiklərimdən silindi</span><span class="toastify-secondary-text">Secondary Text Goes Here</span></div>',
          onClick: function() {} // Callback after click
        }).showToast();
        
    }
    localStorage.setItem("wishlist", JSON.stringify(wishList))
    getProducts()
}
const singleProductTemplate = (imageUrl, title, price, id, categoryId) => {

    return `
    <div class="col-xl-4 col-md-4 col-6 col-xxs-12">
    <div class="fz-1-single-product">
    <div class="fz-single-product__img">
        <a style="width: 100%; height: 100%" href="shop-details.html?productId=${id}">
            <img src=${imageUrl} alt="Product Image">
        </a>
        <div class="fz-single-product__actions">
            
        </div>
    </div>
    
    <div class="fz-single-product__txt">
        <span class="fz-single-product__category list-view-text">${categoryId === '1' ? 'Otaq Qapısı' : 'Giriş qapısı'}</span>
        <a href="shop-details.html?productId=${id}" class="fz-single-product__title">${title}</a>
        <div class="fz-single-product__price-rating">
            <p class="fz-single-product__price">
                <span class="current-price">${price} AZN</span>
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

        </div>
    </div>
    </div>
    </div>
    `;
} 

const sortProducts = (sortOption, products) => {
  let sortedProducts;
  if (sortOption === "price-asc") {
    // price-asc | price-desc
    sortedProducts = products.sort((a, b) => a.price - b.price);
  } else {
    sortedProducts = products.sort((a, b) => b.price - a.price);
  }
  return sortedProducts;
};

const getBetweenPrice = (products, priceRange) => {
  const filteredProducts = products.filter((item) => {
    if (
      parseInt(item.price) >= priceRange[0] &&
      parseInt(item.price) <= priceRange[1]
    )
      return item;
  });
  return filteredProducts;
};
function getQueryParamValue(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let sortOption = null;
let priceRange = null;

const getProducts = async () => {
  loaderStart()
  productsContainerRow.innerHTML = "";
  const categoryQueryParam = getQueryParamValue("category");

  const res = await fetch("../../products/products.json");
  const data = await res.json();
  loaderEnd()

  let { products } = data;
  if (categoryQueryParam === "otaq-qapilari") {
    products = products.filter((item) => item.categoryId === "1");
  }
  if (categoryQueryParam === "seyf-qapilar") {
    products = products.filter((item) => item.categoryId === "2");
  }
  if (priceRange) {
    products = getBetweenPrice(products, priceRange);
  }
  if (sortOption) {
    products = sortProducts(sortOption, products);
  }

  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || []

  products.forEach((item, idx) => {
    const itemIsInWishlist = wishlistItems.some(product => product.id === item.id)

    const addToWishlistBtn = document.createElement("button")
    addToWishlistBtn.classList.add("fz-add-to-wishlist-btn")
    addToWishlistBtn.addEventListener("click", (e) => {
        addToFavorite(item)
    })
    addToWishlistBtn.innerHTML = `
        <span class="btn-txt">${itemIsInWishlist ? 'Bəyəndiklərimdən sil' : 'Bəyəndiklərimə əlavə et'}</span>
        <span class="btn-icon ${itemIsInWishlist ? 'btn-icon--active' : ''}"><i class="fa-light fa-heart"></i></span>
    `

    const newEl = document.createElement("div");
    newEl.innerHTML = singleProductTemplate(
      item.images[0],
      item.title,
      item.price,
      item.id,
      item.categoryId
    ).trim();
    productsContainerRow.append(newEl.firstChild);
    const wishlistBtnWrapper = document.querySelectorAll(".fz-single-product__actions:not([class*=' '])")[idx]
    const wishlistBtnWrapperListView = document.querySelectorAll(".fz-single-product__actions.list-view-text")[idx]

    // the same add to wish logic for list view
    const addToWishInListView = addToWishlistBtn.cloneNode(true);
    addToWishInListView.addEventListener("click", () => {
        addToFavorite(item)
    })
    wishlistBtnWrapperListView.appendChild(addToWishInListView)
    wishlistBtnWrapper.appendChild(addToWishlistBtn)
  });
};
getProducts();

if (listViewBtn) {
  listViewBtn.onclick = () => {
    productsContainer.classList.add("list-view-on");
    gridViewBtn.classList.remove("active");
    listViewBtn.classList.add("active");
  };
}

if (gridViewBtn) {
  gridViewBtn.onclick = () => {
    productsContainer.classList.remove("list-view-on");
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
  };
}
/*--- PRODUCT VIEW TYPE CHANGE JS END ---*/

// FAQ ACCORDION JS START =====
const accordionItems = document.querySelectorAll(".fz-single-accordion-item");

accordionItems.forEach((accordionItem) => {
  accordionItem.onclick = () => {
    const openedItems = document.querySelector(
      ".fz-single-accordion-item.open"
    );
    if (accordionItem.classList.contains("open")) {
      openedItems.classList.remove("open");
    } else {
      accordionItem.classList.toggle("open");
      if (openedItems) {
        openedItems.classList.remove("open");
      }
    }
  };
});
//===== FAQ ACCORDION JS START

// FIXED HEADER =====
window.addEventListener("scroll", () => {
  const toFixHeaders = document.querySelectorAll(".to-be-fixed");
  toFixHeaders.forEach((toFixHeader) => {
    if (window.pageYOffset > 100) {
      toFixHeader.classList.add("fixed");
      document.body.style.paddingTop =
        toFixHeader.getBoundingClientRect().height + "px";
    } else {
      toFixHeader.classList.remove("fixed");
      document.body.style.paddingTop = 0;
    }
  });
});
//===== FIXED HEADER

// QUICK VIEW MODAL JS =====
const quickviewBtns = document.querySelectorAll(".fz-3-quick-view");
const quickviewModal = document.querySelector(".fz-quick-view-modal");

quickviewBtns.forEach((quickviewBtn) => {
  quickviewBtn.onclick = () => {
    quickviewModal.classList.add("open");
    overlay.classList.add("open");
    body.style.overflow = "hidden";
  };

  document.onclick = (e) => {
    if (
      !e.target.classList.contains("fz-3-quick-view") &&
      !quickviewModal.contains(e.target)
    ) {
      quickviewModal.classList.remove("open");
    }
  };
});
//===== QUICK VIEW MODAL JS

// CLIENTS SLIDER JS START =====
$(".clients").owlCarousel({
  items: 5,
  autoplay: true,
  loop: true,

  responsive: {
    0: {
      items: 3,
    },

    480: {
      items: 3,
    },

    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
  },
});
//===== CLIENTS SLIDER JS END

// --------------------------------- PRDUCTS FILTERING BY PRICE START ----------------------------------------
let keypressSlider = document.querySelector(".slider-keypress");
let input0 = document.querySelector(".input-with-keypress-0");
let input1 = document.querySelector(".input-with-keypress-1");

let inputs = [input0, input1];

const sliderContainer = document.getElementById("slider");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

noUiSlider.create(sliderContainer, {
  start: [0, 3000],
  connect: true,
  range: {
    min: 0,
    max: 3000,
  },
});

const slider = sliderContainer.noUiSlider;

// Function to update slider based on inputs
function updateSlider() {
  const newMin = parseInt(minInput.value);
  const newMax = parseInt(maxInput.value);
  this.size = this.value.length;
  // Validate inputs and update the slider only if valid
  if (!isNaN(newMin) && !isNaN(newMax) && newMin <= newMax) {
    slider.set([newMin, newMax]);
  }
}

// Listen for input changes
minInput.addEventListener("change", updateSlider);
maxInput.addEventListener("change", updateSlider);

// Listen for slider update events
slider.on("update", function (values, handle) {
  // Update input fields when slider changes
  if (handle === 0) {
    minInput.value = parseInt(values[handle]);
  } else if (handle === 1) {
    maxInput.value = parseInt(values[handle]);
  }
});

// if (keypressSlider) {
//     noUiSlider.create(keypressSlider, {
//         start: [0, 3000],
//         connect: true,
//         step: 1,
//         range: {
//             min: [0],
//             max: [3000]
//         }
//     });

//     // keypressSlider.noUiSlider.on("update", function (values, handle) {
//     //     inputs[handle].value = parseInt(values[handle]);
//     //     console.log('values[handle]: ', values[handle])

//     //     /* begin Listen to keypress on the input */
//     //     function setSliderHandle(i, value) {
//     //         var r = [null, null];
//     //         r[i] = value;
//     //         keypressSlider.noUiSlider.set(r);
//     //     }

//     //     // Listen to keydown events on the input field.
//     //     inputs.forEach(function (input, handle) {
//     //         input.addEventListener("change", function () {
//     //             console.log('fksdnfks: ', this.value)
//     //             setSliderHandle(handle, this.value);
//     //             this.max = this.value
//     //         });

//     //         input.addEventListener("keydown", function (e) {
//     //             var values = keypressSlider.noUiSlider.get();
//     //             var value = Number(values[handle]);

//     //             // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
//     //             var steps = keypressSlider.noUiSlider.steps();

//     //             // [down, up]
//     //             var step = steps[handle];

//     //             var position;

//     //             // 13 is enter,
//     //             // 38 is key up,
//     //             // 40 is key down.
//     //             switch (e.which) {
//     //                 case 13:
//     //                     setSliderHandle(handle, this.value);
//     //                     break;

//     //                 case 38:
//     //                     // Get step to go increase slider value (up)
//     //                     position = step[1];

//     //                     // false = no step is set
//     //                     if (position === false) {
//     //                         position = 1;
//     //                     }

//     //                     // null = edge of slider
//     //                     if (position !== null) {
//     //                         setSliderHandle(handle, value + position);
//     //                     }

//     //                     break;

//     //                 case 40:
//     //                     position = step[0];

//     //                     if (position === false) {
//     //                         position = 1;
//     //                     }

//     //                     if (position !== null) {
//     //                         setSliderHandle(handle, value - position);
//     //                     }

//     //                     break;
//     //             }
//     //         });
//     //     });
//     //     /* end Listen to keypress on the input */
//     // });
// }
const filterBtn = document.querySelector(".price-filter-area button");

filterBtn.addEventListener("click", () => {
  const minimumPrice = parseInt(document.querySelector("#minInput").value);
  const maxPrice = parseInt(document.querySelector("#maxInput").value);
  priceRange = [minimumPrice, maxPrice];
  getProducts();
});
// -------------------------------- PRDUCTS FILTERING BY PRICE END -----------------------------------------

//----------------- PRODCUT DETAILS IMAGES SLIDER JS START ---------------------------------
$("#fz-product-details__img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});

$(".fz-product-details__img-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".fz-product-details__img",
  dots: false,
  focusOnSelect: true,
});
//----------------- PRODCUT DETAILS IMAGES SLIDER JS END ---------------------------------

const sortOptions = document.querySelectorAll(".nice-select .list li");
sortOptions.forEach((item) => {
  item.addEventListener("click", (e) => {
    const sortOptionValue = e.target.dataset.value;
    sortOption = sortOptionValue;
    getProducts();
  });
});