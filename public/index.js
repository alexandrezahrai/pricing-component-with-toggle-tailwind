// Element(s)
const priceSwitch = document.querySelector("input[type='checkbox']");
const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const masterPrice = document.getElementById("master-price");

// Event listener(s)
priceSwitch.addEventListener("change", updatePricing);

// Helper function(s)
function updatePricing() {
  let isChecked = priceSwitch.checked;

  if (isChecked) {
    basicPrice.innerHTML = "$19.99";
    proPrice.innerHTML = "$24.99";
    masterPrice.innerHTML = "$39.99";
  } else {
    basicPrice.innerHTML = "$240.00";
    proPrice.innerHTML = "$300.00";
    masterPrice.innerHTML = "$480.00";
  }
}
