const elsPaymentTypeRadio = document.querySelectorAll('[name="payment-type"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentTypeRadio.forEach(function (elPaymentTypeRadio) {
elPaymentTypeRadio.addEventListener('change', function () {
const period= elPaymentTypeRadio.value;
if (period === 'annual') {
 elsPricingPlanValue.forEach(function (elPrice){
elPrice.textContent =elPrice.closest('.pricing-type').dataset.paymentAnnual;
 });
}
else {
  elsPricingPlanValue.forEach(function (elPrice){
    elPrice.textContent =elPrice.closest('.pricing-type').dataset.paymentMonthly;
     });
}

});
});