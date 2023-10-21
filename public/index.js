// Element(s)
const priceSwitch = document.querySelector("input[type='checkbox']");
const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const masterPrice = document.getElementById("master-price");
const monthlyPrices = ["$19.99", "$24.99", "$39.99"];
const yearlyPrices = ["$240", "$300", "$480"];

// Helper function(s)
const updatePricing = () => {
  let isChecked = priceSwitch.checked;
  let pricesToUse = isChecked ? monthlyPrices : yearlyPrices;

  [basicPrice, proPrice, masterPrice].map((price, index) => {
    price.innerHTML = pricesToUse[index];
  });

  isChecked
    ? priceSwitch.setAttribute("aria-checked", "true")
    : priceSwitch.setAttribute("aria-checked", "false");
};

// Event listener(s)
priceSwitch.addEventListener("change", updatePricing);
