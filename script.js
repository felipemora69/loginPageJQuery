$(document).ready(function() {
    $("#loginBtn").click(function(event) {
        event.preventDefault(); // Prevent default button behavior
        validateLogin();
    });
});

function validateLogin() {
    let username = $("#username").val();
    let password = $("#password").val();
    let messageElement = $("#message");

    if (password.length < 6) {
        // Password is not valid
        showMessage("Password should be at least 6 characters.", "red");
        $("#password").css("border", "2px solid red");
    } else {
        // Password is valid
        showMessage("Success!", "green");
        $("#password").css("border", "2px solid green");
    }
}

function showMessage(message, color) {
    let messageElement = $("#message");
    messageElement.text(message).css("color", color);
}








/*function validateLogin() {

    let usernameInput = document.getElementById("username");
    let username = usernameInput.value;
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;

    let messageElement = document.getElementById("message");

    if (password.length < 6) {
        // Password is not valid
        messageElement.textContent = "Password should be at least 6 characters.";
        messageElement.style.color = "red";
        passwordInput.style.border = "2px solid red";
    } else {
        // Password is valid
        messageElement.textContent = "Success!";
        messageElement.style.color = "green";
        passwordInput.style.border = "2px solid green";
    }

    //Re-set values
    usernameInput.value = "";
    passwordInput.value = "";

    return false;
}*/