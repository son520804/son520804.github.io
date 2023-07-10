function setTheme() {
    var currentHour = new Date().getHours();
    var bodyElement = document.getElementsByTagName("body")[0];
    if (currentHour >=6 && currentHour < 18) {
        bodyElement.classList.remove("body-dark-mode"); // Link css
        bodyElement.classList.add("body-light-mode");
    } else {
        bodyElement.classList.remove("body-light-mode"); // Link css
        bodyElement.classList.add("body-dark-mode");
    }
}

setTheme();