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
        console.log('Delete request successful');
      } else {
        // Handle errors here
        console.error('Delete request failed');
      }
    })
    .catch((error) => {
      // Handle network or other errors here
      console.error('Error:', error);
    });
});
