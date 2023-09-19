document.body.style.position = "fixed";
window.addEventListener("load", () => {
  document.body.style.position = "";
  document.querySelector("#pre-loader").style.opacity = 0;
  document.querySelector("#pre-loader").style.visibility = "hidden";
});

// load products into fz-1-products-container in index.html

const newProductsSection = document.querySelector(".fz-1-products-container");


const singleLatestProduct = (image, price, title, id) => (`


<div class="fz-1-single-product">
  <div class="fz-single-product__img">
    <a href="shop-details.html?productId=${id}">
    <img
      src=assets/images/roomDoors/${image}
      alt="Product Image"
    />
    </a>
    <div class="fz-single-product__actions">
      <button class="fz-add-to-wishlist-btn">
        <span class="btn-txt">Bəyəndiklərimə əlavə et</span>
        <span class="btn-icon"
          ><i class="fa-light fa-heart"></i
        ></span>
      </button>
    </div>
  </div>
  <div class="fz-single-product__txt">
    <a href="shop-details.html?productId=${id}" class="fz-single-product__title"
      >${title}</a
    >
    <p class="fz-single-product__price">
      <span class="current-price">${price} AZN</span>
    </p>
  </div>
</div>
`)

const setLatestProducts = async () => {
  const res = await fetch("../products/products.json")
  const data = await res.json()
  console.log('data in setLatestProducts: ', data)
  if (data.products.length > 0) {
    newProductsSection.innerHTML = ''

    data.products.slice(0, 15).forEach(element => {
      const { images, price, title, id } = element
      const singleLatestEl = singleLatestProduct(images[0], price, title, id).trim()
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