import { cart, addtoCart } from "../data/cart.js";
import { products } from "../data/product.js";

let productHTML = '';

products.forEach((product) => {
  productHTML += `
    <li class="w-5/6 md:w-[50%] md:h-[50%] lg:w-[20%] lg:h-[20%] px-4 py-3 bg-dull-white shadow-md shadow-black-dark flex flex-col gap-10 mb-6 cart-list-item-${product.id}">
      <div class="flex justify-center items-center">
        <img src="${product.image}" alt="product1" width="300" height="300">
      </div>
      <div class="flex flex-col items-start justify-start space-y-4">
        <div>${product.name}</div>
        <div class="flex gap-2 items-center">
          <img src="image/ratings/rating-${product.rating.stars * 10}.png" class="w-1/2"/>
          <div>${product.rating.count}</div>
        </div>
        <div>Price: $${product.priceCents}</div>
        <div class="pb-6">
          <select class="bg-slate-200 border-none px-2 py-1 rounded-3xl shadow-sm shadow-black-dark focus:outline-none focus:ring-2 focus:ring-red-600 focus:drop-shadow-lg">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
        </div>
        <button class="w-full px-3 py-2 bg-red-600 rounded-md text-white ease-linear duration-200 hover:bg-red-500 js-add-to-cart-button" data-product-id="${product.id}"> Add to Cart </button>
      </div>
    </li>
  `;
});

document.querySelector('.js-list-products').innerHTML = productHTML;

function addtoCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = `Carts(${cartQuantity})`;

  document.querySelector('.js-cart-quantity-mobile').innerHTML = `Carts(${cartQuantity})`;

  document.querySelector('.js-footer-cart-quantity').innerHTML = `Carts(${cartQuantity})`;
}
addtoCartQuantity();

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addtoCart(productId);
      addtoCartQuantity();
    })
})

