document.querySelector('#contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var messageElement = document.getElementById('resultMessage');
    messageElement.innerText = 'Please refer to the new website to send a message.';
    messageElement.className = 'info show';

    
    setTimeout(function() {
        messageElement.className += ' fade'; 
        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 2500); 
    }, 5000); 
});
