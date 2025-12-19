// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}
 


// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFFAC1", "#FFC1C1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `You pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = `You typed: ${input}`;
}

// Attach Event Listeners
function setupEventListeners() {
  document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
  document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor);
  document.addEventListener('keydown', displayKeyPress);
  document.getElementById('textInput').addEventListener('input', displayUserInput);

  // Optional: change background when typing
  document.getElementById('textInput').addEventListener('input', () => {
    document.body.style.backgroundColor = "#E0F7FA"; // light blue when typing
  });
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}