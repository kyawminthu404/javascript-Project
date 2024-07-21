export const deliveryOptions = [{
  id: '1',
  deliveryDay: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDay: 3,
  priceCents: 5
}, {
  id: '3',
  deliveryDay: 1,
  priceCents: 10
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption; 

  deliveryOptions.forEach((option) => {
    if(deliveryOptionId === option.id) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}