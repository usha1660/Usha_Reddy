document.getElementById('rental-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
    
    // Optionally, reset the form
    this.reset();
});
