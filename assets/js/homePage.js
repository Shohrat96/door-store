const container = document.querySelector('.fz-1-products-container .slick-list .slick-track')
console.log('container: ', container)

const singleLatestProduct = (image, price) => (`
  <div class="fz-single-product__img">
      <img src="assets/images/roomDoors/${image}" alt="Product Image">
      <div class="fz-single-product__actions">
          <button class="fz-add-to-wishlist-btn">
              <span class="btn-txt">add To wishlist</span>
              <span class="btn-icon"><i class="fa-light fa-heart"></i></span>
          </button>

          <button class="fz-add-to-cart-btn">
              <span class="btn-txt">add To cart</span>
              <span class="btn-icon"><i class="fa-light fa-cart-shopping"></i></span>
          </button>

          <button class="fz-add-to-compare-btn">
              <span class="btn-txt">select to compare</span>
              <span class="btn-icon"><i class="fa-light fa-arrow-right-arrow-left"></i></span>
          </button>
      </div>
  </div>

  <div class="fz-single-product__txt">
      <a href="shop-details.html" class="fz-single-product__title">Classic Wood Door</a>
      <p class="fz-single-product__price">
          <span class="current-price">${price} AZN</span>
      </p>
  </div>
`)

const getLatestProducts = async () => {
  const res = await fetch("../products/products.json")
  const data = await res.json()
  console.log('data: ', data)
  if (data.products.length > 0) {
    data.products.forEach(element => {
      const singleLatestEl = document.createElement("div")
      singleLatestEl.classList.add("fz-1-single-product", "wood-door", "slick-slide")
      singleLatestEl.innerHTML = singleLatestProduct(element.image, element.price)
      container.appendChild(singleLatestEl)
    });
    
  }
}
// getLatestProducts()