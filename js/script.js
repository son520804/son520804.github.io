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

var colorArray = ['black', 'green', 'blue', 'purple'];
// Get the element
var flashingText = document.getElementById('flashing-text');
// Set an initial color
var currentColorIndex = 0;
flashingText.style.color = colorArray[currentColorIndex];
// Change the color at regular intervals
function switchColor() {
    // Increment the color index
    currentColorIndex = (currentColorIndex + 1) % colorArray.length;
    
    // Set the new color
    flashingText.style.color = colorArray[currentColorIndex];
}

// Change the color at regular intervals
setInterval(switchColor, 1000);