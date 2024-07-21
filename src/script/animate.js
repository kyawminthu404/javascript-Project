import { products } from "../data/product.js";


products.forEach((product) => {
  const scroll = ScrollReveal({
    reset: true,
    duration: 1200,
    distance: "60px"
  });
  
  scroll.reveal('.img-transform', {delay:150, origin:'top'});
  scroll.reveal('.home-text-transform', {delay:200, origin: 'left'});
  scroll.reveal(`.cart-list-item-${product.id}`, {delay:200, origin: 'bottom'});
  scroll.reveal('.contact-img-transform', {delay:200, origin:'right'});
  scroll.reveal('.contact-form-transform', {delay:200, origin:'left'});
  scroll.reveal('.footer1-transform', {delay:150, origin:'left'});
  scroll.reveal('.footer2-transform', {delay:150, origin:'right'});
  scroll.reveal('.footer3-transform', {delay:150, origin:'left'});
  scroll.reveal('.footer4-transform', {delay:150, origin:'right'});
  scroll.reveal('.checkout-footer1-transform', {delay:150, origin:'left'});
  scroll.reveal('.checkout-footer2-transform', {delay:150, origin:'right'});
  scroll.reveal('.checkout-footer3-transform', {delay:150, origin:'left'});
  scroll.reveal('.checkout-footer4-transform', {delay:150, origin:'right'});
})
