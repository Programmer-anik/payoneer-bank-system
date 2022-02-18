// Selection
const loginArea = document.getElementById("login-area");
const loginAreaButton = document.getElementById("login-area-button");


loginAreaButton.addEventListener("click", function() {
    loginArea.classList.add("boom");
});