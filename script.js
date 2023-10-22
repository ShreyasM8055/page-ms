// Handle login form submission
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    window.location.href = "page.html";
    //alert(`Username: ${username}\nPassword: ${password}`);

    // You can replace the alert with your actual login logic.
});

// Initialize Google Sign-In
gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: '1065806393030-5l9rb4o7n2q8iobr13qav76em98rkl75.apps.googleusercontent.com'
    }).then(function(auth2) {
        // You can attach the click handler for your Google Sign-In button here
        var options = new gapi.auth2.SigninOptionsBuilder();
        options.setLoginHint('user@example.com'); // Replace with the user's email
        auth2.attachClickHandler('google-signin', options, onSignIn, onFailure);
    });
});
function onSignIn(googleUser) {
    window.location.href = "page.html";
    var profile = googleUser.getBasicProfile();
    var userEmail = profile.getEmail();
    var userDisplayName = profile.getName(); // Optionally, you can also get the user's name

    // Display the logged-in Gmail email
    var userEmailDisplay = document.getElementById("user-email");
    userEmailDisplay.textContent = "Logged in as: " + userEmail;

    // You can also display the user's name if needed
    var userNameDisplay = document.getElementById("user-name");
    userNameDisplay.textContent = "Hello, " + userDisplayName;
}
function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userEmail = profile.getEmail();
    var userDisplayName = profile.getName(); // Optionally, you can also get the user's name
    var userProfileImage = profile.getImageUrl(); // Get the profile picture URL

    // Construct the URL with user information as parameters
    var pageUrl = "page.html?email=" + encodeURIComponent(userEmail) + "&name=" + encodeURIComponent(userDisplayName) + "&image=" + encodeURIComponent(userProfileImage);

    // Redirect to the page.html with user information
    window.location.href = pageUrl;
}
// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userEmail = urlParams.get("email");
const userDisplayName = urlParams.get("name");
const userProfileImage = urlParams.get("image");

// Display the user's email
var userEmailDisplay = document.getElementById("user-email");
userEmailDisplay.textContent = "Logged in as: " + userEmail;

// Display the user's name
var userNameDisplay = document.getElementById("user-name");
userNameDisplay.textContent = "Hello, " + userDisplayName;

// Display the user's profile picture
var userProfileImageDisplay = document.getElementById("user-profile-image");
userProfileImageDisplay.src = userProfileImage; // Set the profile picture's src attribute

