import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

renderOrderSummary();
renderPaymentSummary();


const checkoutAnimate = () => {
  const checkoutSideBar = document.getElementById('checkout-side-bar');
  const checkoutMobileView = document.getElementById('checkout-mobile-view');
  const checkoutCloseItem = document.getElementById('checkout-close-item');
  const checkoutListItem = document.getElementById('checkout-list-item');


  const toggleFun = () => {
    checkoutMobileView.classList.toggle('hidden');
    checkoutMobileView.classList.toggle('flex');
  }

  checkoutSideBar.addEventListener('click', toggleFun);
  checkoutCloseItem.addEventListener('click', toggleFun);
  checkoutListItem.addEventListener('click', toggleFun);
}

document.addEventListener('DOMContentLoaded', checkoutAnimate);