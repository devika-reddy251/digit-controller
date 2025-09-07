// Increment function
function increment() {
  const input = document.getElementById("numberInput"); // Get the input element
  let value = parseInt(input.value) || 0; // Get current value, default to 0 if empty or invalid
  input.value = value + 1; // Increment the value by 1
}

// Decrement function
function decrement() {
  const input = document.getElementById("numberInput");
  let value = parseInt(input.value) || 0;
  
  // Prevent value from going below 0
  if (value > 0) {
    input.value = value - 1;
  }
}