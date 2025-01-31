document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store the username in localStorage
    localStorage.setItem("username", username); // Store the username

    // Alert account creation and set the username in the top-right corner
    alert(`Account created successfully for ${username}`);
    window.location.href = "index.html";  // Redirect to index.html
});

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', function() {
    //sets the constant bottomMessage to the string in the signUp.html called bottom-sentence
    const bottomMessage = document.getElementById('bottom-sentence');

    // Check if the user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
        // Smoothly fade in the bottom message
        bottomMessage.style.opacity = '1';
        bottomMessage.style.visibility = 'visible';
    } else {
        // Smoothly fade out the bottom message when scrolling up
        bottomMessage.style.opacity = '0';
        bottomMessage.style.visibility = 'hidden';
    }
});
