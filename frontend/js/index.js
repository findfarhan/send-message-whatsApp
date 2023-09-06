document.getElementById('myform').addEventListener('submit', function (event) {
  event.preventDefault();

  const url = document.getElementById('url').value;
  const phone_no = document.getElementById('phone_no').value;
  const description = document.getElementById('description').value;
  const subject = document.getElementById('subject').value;

  const data = {
    subject: subject,
    description: description,
    url: url,
    phone_no: phone_no,
  };

  displayAlert('Sending message...', 'info');

  fetch('http://localhost:8000/send/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        displayAlert('Message sent successfully!', 'success');
        clearFormFields();
      } else {
        displayAlert(
          'Failed to send message. Please try again later.',
          'danger'
        );
      }
    })
    .catch((error) => {
      displayAlert('Error: ' + error.message, 'danger');
    });
});

function displayAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', 'alert-' + type);
  alertDiv.textContent = message;
  alertContainer.innerHTML = '';
  alertContainer.appendChild(alertDiv);
  setTimeout(() => {
    alertDiv.style.display = 'none';
  }, 2000);
}

function clearFormFields() {
  document.getElementById('url').value = '';
  document.getElementById('phone_no').value = '';
  document.getElementById('description').value = '';
  document.getElementById('subject').value = '';
}
