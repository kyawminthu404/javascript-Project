export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [{
    productId: 'sneaker1',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: 'sneaker2',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

function addtoStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addtoCart(productId) {
  let matchingProduct;

  cart.forEach((cartItem) => {
    if(cartItem.productId === productId) {
      matchingProduct = cartItem;
    }
  });
  
  if(matchingProduct) {
    matchingProduct.quantity += 1;
  }else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  addtoStorage();
};

export function removetoCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  addtoStorage();
};

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingProduct;

  cart.forEach((cartItem) => {
    if(cartItem.productId === productId) {
      matchingProduct = cartItem;
    }
  });

  matchingProduct.deliveryOptionId = deliveryOptionId;

  addtoStorage();
}