document.getElementById('sosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;

    // Simulate sending the SOS request
    const responseDiv = document.getElementById('response');
    responseDiv.style.display = 'block';
    responseDiv.innerHTML = `SOS Request Sent!<br>Message: ${message}<br>Location: ${location}<br>Receiver: ${phone}`;
    
    // Here you would typically send the data to a server or processing unit
    // For example: 
    // fetch('/send-sos', { method: 'POST', body: JSON.stringify({ message, location, phone }) })
});