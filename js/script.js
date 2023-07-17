function setTheme() {
    var currentHour = new Date().getHours();
    var bodyElement = document.getElementsByTagName("body")[0];
    if (currentHour >=7 && currentHour < 19) {
        bodyElement.classList.remove("body-dark-mode"); // Link css
        bodyElement.classList.add("body-light-mode");
    } else {
        bodyElement.classList.remove("body-l= ight-mode"); // Link css
        bodyElement.classList.add("body-dark-mode");
    }
}

setTheme();


var flashingText = document.getElementById('flashing-text');


// Optional: Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the element
    var flashingText = document.getElementById('flashing-text');
    
    // Define an array of colors
    var colorArray = ['black', 'red', 'blue', 'green', 'orange', 'purple'];
    
    // Set an initial color
    var currentColorIndex = 0;
    flashingText.style.color = colorArray[currentColorIndex];
    
    // Change the color at regular intervals
    setInterval(function() {
      // Increment the color index
      var newColorIndex = (currentColorIndex + 1) % colorArray.length;
      
      // Set the new color
      flashingText.style.color = colorArray[currentColorIndex];
    }, 1000);
  });