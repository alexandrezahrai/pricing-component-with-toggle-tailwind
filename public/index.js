// Element(s)
const priceSwitch = document.querySelector("input[type='checkbox']");
const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const masterPrice = document.getElementById("master-price");
const monthlyPrices = ["$19.99", "$24.99", "$39.99"];
const yearlyPrices = ["$240", "$300", "$480"];

// Event listener(s)
priceSwitch.addEventListener("change", updatePricing);

// Helper function(s)
function updatePricing() {
  let isChecked = priceSwitch.checked;

  if (isChecked) {
    basicPrice.innerHTML = monthlyPrices[0];
    proPrice.innerHTML = monthlyPrices[1];
    masterPrice.innerHTML = monthlyPrices[2];
  } else {
    basicPrice.innerHTML = yearlyPrices[0];
    proPrice.innerHTML = yearlyPrices[1];
    masterPrice.innerHTML = yearlyPrices[2];
  }
}
