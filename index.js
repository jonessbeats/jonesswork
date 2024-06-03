// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Main function to use the helper function
  function calculateSquare() {
    // Get user input
    var userInput = prompt("Enter a number:");
  
    // Convert user input to a number
    var number = parseFloat(userInput);
  
    // Check if the input is a valid number
    if (!isNaN(number)) {
      // Calculate the square using the helper function
      var result = square(number);
      alert("The square of " + number + " is " + result);
    } else {
      // Inform the user if the input is not a valid number
      alert("Invalid input. Please enter a valid number.");
    }
  }
  
  // Call the main function
  calculateSquare();  