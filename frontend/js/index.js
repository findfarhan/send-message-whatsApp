document.getElementById('myform').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const url = document.getElementById('url').value;
  const phone_no = document.getElementById('phone_no').value;
  const description = document.getElementById('description').value;
  const subject = document.getElementById('subject').value;

  // Prepare the data to send to the API
  const data = {
    subject: subject,
    description: description,
    url: url,
    phone_no: phone_no,
  };

  // Show a loading message
  displayAlert('Sending message...', 'info');

  // Make a POST request to the API
  fetch('http://localhost:8000/send/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the appropriate content type
    },
    body: JSON.stringify(data), // Convert data to JSON format
  })
    .then((response) => {
      if (response.ok) {
        // Handle a successful response here
        displayAlert('Message sent successfully!', 'success');
        // Clear form fields
        clearFormFields();
      } else {
        // Handle errors here
        displayAlert(
          'Failed to send message. Please try again later.',
          'danger'
        );
      }
    })
    .catch((error) => {
      // Handle network or other errors here
      displayAlert('Error: ' + error.message, 'danger');
    });
});

// Function to display an alert
function displayAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', 'alert-' + type);
  alertDiv.textContent = message;
  alertContainer.innerHTML = ''; // Clear previous alerts
  alertContainer.appendChild(alertDiv);
}

// Function to clear form fields
function clearFormFields() {
  document.getElementById('url').value = '';
  document.getElementById('phone_no').value = '';
  document.getElementById('description').value = '';
  document.getElementById('subject').value = '';
}
