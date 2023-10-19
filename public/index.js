const monthlySlider = document.getElementById("monthly-range");
const output = document.getElementById("output-price");
const pageViewsElement = document.getElementById("page-views");
const switchCheckbox = document.getElementById("switch-checkbox");

const pageViewsSteps = ["10K", "50K", "100K", "500K", "1M"];

// Display the default slider value and page views
output.innerHTML = `$${Number(monthlySlider.value).toFixed(2)}`;
pageViewsElement.innerHTML = pageViewsSteps[monthlySlider.value / 6 - 1] + " pageviews";

// Update the current slider value and page views (each time you drag the slider handle)
monthlySlider.oninput = function () {
  let value = Number(this.value);
  output.innerHTML = `$${value.toFixed(2)}`;
  pageViewsElement.innerHTML = pageViewsSteps[value / 6 - 1] + " pageviews";

  if (switchCheckbox.checked === true) {
    output.innerHTML = `$${(value * 0.75).toFixed(2)}`; // Applying 25% discount for yearly pricing
  }
};

// Update the price per month based on the yearly pricing switch
switchCheckbox.addEventListener("change", function () {
  let value = Number(monthlySlider.value);
  if (switchCheckbox.checked === true) {
    output.innerHTML = `$${(value * 0.75).toFixed(2)}`; // Applying 25% discount
  } else {
    output.innerHTML = `$${value.toFixed(2)}`;
  }
});
