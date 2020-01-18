// Listen for submit
document.getElementById("drip-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const hour = document.getElementById("hour");
  const drip = document.getElementById("drip");
  const rate = document.getElementById("rate");

  const calcAmount = parseFloat(amount.value);
  const calcHour = parseFloat(hour.value);
  const calcDrip = parseFloat(drip.value);

  console.log(calcDrip);

  // Compute drip rate
  const x = Math.round(calcAmount * calcDrip);
  const t = Math.round(calcHour * 60);
  const drippy = Math.round(x / t);;

  if (drippy) {
    rate.value = drippy;

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

// // Show Error
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}