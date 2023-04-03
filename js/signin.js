$('#login-form').submit(function(event) {
    event.preventDefault();
  
    // Get entered username and password
    const enteredUsername = $('#floatingInput').val();
    const enteredPassword = $('#floatingPassword').val();
  
    // Load users from JSON file
    $.getJSON('users.json', function(data) {
        console.log(data);
      const users = data.users;
  
      // Find user with matching username
      const user = users.find(user => user.username === enteredUsername);
  
      // Check if user exists
      if (user) {
        // Compute SHA256 hash of entered password
        const hashedPassword = CryptoJS.SHA256(enteredPassword).toString();
  
        // Check if hashed password matches the one in the users file
        if (hashedPassword === user.password) {
          // Redirect to dashboard page
          localStorage.setItem('isLoggedIn', 'true');
          window.location.href = 'index.html';
        } else {
          // Display error message
          $('#error-message').text('Invalid username or password');
        }
      } else {
        // Display error message
        $('#error-message').text('Invalid username or password');
      }
    });
  });

  
