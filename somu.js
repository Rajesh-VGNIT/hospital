// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     var username = document.getElementById("StudentUserName").value;
//     var password = document.getElementById("StudentPassword").value;

//     // Create an object with the login credentials
//     var credentials = {
//         StudentUserName: StudentUserName,
//         StudentPassword: StudentPassword
//     };

//     // Send an HTTP POST request to the backend
//     fetch('http://localhost:8081/Admin/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response from the backend
//         console.log(data);
//         // Perform further actions based on the response, such as redirecting to a different page or displaying an error message
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });



<script>
$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    var username = $('#username').val();
    var password = $('#password').val();

    // Make the API request to validate the login
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: { username: username, password: password },
      success: function(response) {
        // If the login is successful, redirect to the dashboard page
        if (response.success) {
          window.location.href = '/dashboard.html';
        } else {
          alert('Invalid username or password. Please try again.');
        }
      },
      error: function() {
        alert('An error occurred. Please try again later.');
      }
    });
});
</script>