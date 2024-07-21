import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct, products } from "../../data/product.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.priceCents;
  })
  const totalBeforeTax = productPrice + shippingPrice;
  const taxCent = totalBeforeTax * 0.01;
  const totalCents = totalBeforeTax + taxCent;

  const htmlPaymentSummary = `
    <h1 class="font-bold mb-6 text-xl"> Order Summary </h1>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center ">
        <p class="js-cart-item-quantity"></p>
        <p> $${productPrice} </p>
      </div>

      <div class="flex justify-between items-center ">
        <p> Shipping & handling: </p>
        <p> $${shippingPrice}</p>
      </div>
    </div>

    <hr class="w-full border-none border-black-dark mx-auto my-4">

    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center ">
        <p> Total before tax: </p>
        <p> $${totalBeforeTax} </p> 
      </div>

      <div class="flex justify-between items-center ">
        <p> Estimated tax (1%): </p>
        <p> $${Math.round(taxCent)} </p>
      </div>
    </div>
    
    <hr class="w-full border-t border-black-dark mx-auto my-4">

    <div class="flex justify-between items-center">
      <p class="font-bold text-xl text-red-600"> Total Order: </p>
      <p class="font-bold text-xl text-red-600"> $${Math.round(totalCents)} </p>
    </div>

    <div class="mt-6">
      <button class="w-full px-3 py-3 rounded-xl text-white bg-red-600 ease-linear duration-200 hover:bg-red-500">Place your order items</button>
    </div>
  `;

  document.querySelector('.js-payment-summary').innerHTML = htmlPaymentSummary;

  function addtoCartItem() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-item-quantity').innerHTML = `Items(${cartQuantity})`;
  }
  addtoCartItem();
}