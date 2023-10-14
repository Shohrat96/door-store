document.body.style.position = "fixed";
window.addEventListener("load", () => {
  document.body.style.position = "";
  document.querySelector("#pre-loader").style.opacity = 0;
  document.querySelector("#pre-loader").style.visibility = "hidden";
});

// load products into fz-1-products-container in index.html

const newProductsSection = document.querySelector(".fz-1-products-container");


const singleProduct = (product, type) => {
  const {images, price, title, id} = product


  const isPortfolioSliderImage = type === 'portfolio'
  const linkToNavigate = isPortfolioSliderImage ? `/shop-details.html?productId=${id}&type=portfolio` :
  `/shop-details.html?productId=${id}`

  const mainUrl = images[0]
  return (`
  <div class="fz-1-single-product">
    <div class="fz-single-product__img">
      <a style="width: 100%;" href=${linkToNavigate}>
      <img
        src=${mainUrl}
        alt="Product Image"
      />
      </a>

    </div>
    <div class="fz-single-product__txt">
      <a href=${linkToNavigate} class="fz-single-product__title"
        >${title}</a
      >
      <p class="fz-single-product__price">
        <span class="current-price">${price} AZN</span>
      </p>
    </div>
  </div>
  `)
}

const setLatestProducts = async () => {
  const res = await fetch("../products/products.json")
  const data = await res.json()
  if (data.products.length > 0) {
    newProductsSection.innerHTML = ''

    data.products.slice(0, 15).forEach(element => {
      const singleLatestEl = singleProduct(element).trim()
      const tempWrapperElement = document.createElement('div')
      tempWrapperElement.innerHTML = singleLatestEl
      newProductsSection.append(tempWrapperElement.firstChild)
    });
    $(".fz-1-products-container").slick({
      slidesToShow: 5,
      autoplay: true,
      autoplayTimeout: 500,
      slidesToScroll: 5,
      infinite: true,
      pauseOnHover: false,
      adaptiveHeight: true,
      appendArrows: $(".fz-1-latest-products-slider-nav"),
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
}
setLatestProducts()


// set portfolio products

const portfolioProductsContainer = document.querySelector(".fz-1-modern-door-slider");

const setPortfolioProducts = async () => {
  const res = await fetch("../products/products.json")
  const data = await res.json()
  if (data.portfolio.length > 0) {
    portfolioProductsContainer.innerHTML = ''

    data.portfolio.forEach(element => {
      const singleLatestEl = singleProduct(element, 'portfolio').trim()
      const tempWrapperElement = document.createElement('div')
      tempWrapperElement.innerHTML = singleLatestEl
      portfolioProductsContainer.append(tempWrapperElement.firstChild)
    });
    $(".fz-1-modern-door-slider").owlCarousel({
      items: 4,
      loop: true,
      autoplay: false,
      autoplayTimeout: 1500,
      nav: true,
      navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
      ],
      navContainer: ".fz-1-modern-door-slider-nav",
      margin: 15,
      responsiveBaseElement: body,
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
          items: 4,
        },
      },
    });

  }
}

setPortfolioProducts()