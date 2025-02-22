document.addEventListener("DOMContentLoaded", function () {
  // Get references to the display and buttons
  const userInput = document.getElementById("user-input");

  const numberButtons = document.querySelectorAll(".key-numbers");
  const resetButton = document.querySelector(".key-reset");
  const equalButton = document.querySelector(".key-equal");
  const delButton = document.getElementById("del");
  const operators = document.querySelectorAll(".key-add, .key-sub, .key-multiply, .key-dot");

  let expression = ""; // Store the entered numbers & operators

  // Update display function
  function updateDisplay() {
      userInput.textContent = expression || "0"; // If empty, show "0"
  }

  // Handle number button clicks
  numberButtons.forEach(button => {
      button.addEventListener("click", function () {
          expression += this.textContent;
          updateDisplay();
      });
  });

  // Handle operator button clicks
  operators.forEach(button => {
      button.addEventListener("click", function () {
          expression += this.textContent === "*" ? "*" : this.textContent; // Convert 'x' to ''
          updateDisplay();
      });
  });



  // Handle DELETE button
  delButton.addEventListener("click", function () {
      expression = expression.slice(0, -1); // Remove last character
      updateDisplay();
  });

  // Handle RESET button
  resetButton.addEventListener("click", function () {
      expression = "";
      updateDisplay();
  });

  // Handle EQUAL button
  equalButton.addEventListener("click", function () {
      try {
          expression = eval(expression).toString(); // Evaluate the expression
          updateDisplay();
      } catch (error) {
          expression = "Error";
          updateDisplay();
      }
  });

  // Initialize display
  updateDisplay();
});