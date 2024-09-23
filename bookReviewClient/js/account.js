function registerUser() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    alert( 'You have been registered. ');

    window.location.href = 'home.html?email=' + encodeURIComponent(email);
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert('You have been Logged in'); // Simulate login process
    // Redirect the user to the home page after successful login
    window.location.href = 'home.html?email=' + encodeURIComponent(email);
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    if(loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            loginUser();
        });
    }
});