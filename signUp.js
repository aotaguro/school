document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        document.getElementById('password').value = ''; //resets password field
        document.getElementById('confirm-password').value = '';
        return;
    }
    if (username.length < 5) { //inspired off password game :) Intentionally restricting
        alert('username too short');
    } else if (!username.includes('1')) {
        alert('your username does not contain the answer to sin²θ + cos²θ = ?');
    } else if (username.includes('🏋️')) {
        if (username.length > 17) {
            alert('username too long');
        } else {
            if (username.length > tempuser) {
                // Store the username in localStorage
                localStorage.setItem('username', username); // Store the username
                // Alert account creation and set the username in the top-right corner
                alert(`Account created successfully for ${username}`);
                window.location.href = 'index.html';  // Redirect to index.html
            } else {
                alert('your username does not contain the answer to life');
                let tempuser = username.length;
            }

        }

    }
    else {
        alert('username is not strong enough🏋️');
    }
});

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', function () { //hidden message code
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
