// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html


// Define item costs for size (Realistic medicine sizes)
const ITEM_COSTS = {
  "small": 3.50,
  "medium": 6.50,
  "large": 10.00
};

// Define optional ingredient costs
const TOPPING_COSTS = {
  "none": 0.00,
  "1": 1.50,
  "2": 2.50,
  "3": 3.50
};  

// Tax rate
const TAX_RATE = 0.13;

// Function to calculate the purchase cost
function calculatePurchase() {
  const size = document.querySelector('input[name="size"]:checked');
  const toppings = document.querySelector('input[name="toppings"]:checked');

  if (!size || !toppings) {
    document.getElementById("result-output").innerHTML =
      "Please select both a size and an additional ingredient option.";
    return;
  }

  const sizeValue = size.value;
  const toppingsValue = toppings.value;

  const sizeCost = ITEM_COSTS[sizeValue];
  const toppingsCost = TOPPING_COSTS[toppingsValue];
  const subtotal = sizeCost + toppingsCost;

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const resultHTML = `
    <p><strong>Item:</strong> ${capitalize(sizeValue)} Medicine</p>
    <p><strong>Size Cost:</strong> $${sizeCost.toFixed(2)}</p>
    <p><strong>Additional Ingredient:</strong> $${toppingsCost.toFixed(2)}</p>
    <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
    <p><strong>Tax (13%):</strong> $${tax.toFixed(2)}</p>
    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
  `;

  document.getElementById("result-output").innerHTML = resultHTML;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

