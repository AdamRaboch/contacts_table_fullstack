// Get reference to the input field and label
const nameInput = document.getElementById('name');
const nameLabel = document.querySelector('label[for="name"]');

// Add event listener for focus event
nameInput.addEventListener('focus', () => {
    // Make the label bold
    nameLabel.style.fontWeight = 'bold';
});

// Add event listener for blur event
nameInput.addEventListener('blur', () => {
    // Make the label normal
    nameLabel.style.fontWeight = 'normal';
    // Change the text color of the input value to green
    nameInput.style.color = 'white';
});

// Get reference to the checkbox element
const agreeCheckbox = document.getElementById('agree');

// Set initial background color to red
agreeCheckbox.style.backgroundColor = 'red';

// Add event listener for change event
agreeCheckbox.addEventListener('change', () => {
    // Check if the checkbox is checked
    if (agreeCheckbox.checked) {
        // Change background color to green when checked
        agreeCheckbox.style.backgroundColor = 'green';
    } else {
        // Change background color to white when unchecked
        agreeCheckbox.style.backgroundColor = 'white';
    }
});

// Get reference to the error message div
const errorMessageDiv = document.getElementById('error-message');

// Check if the error message div exists and has a message
if (errorMessageDiv && errorMessageDiv.textContent.trim() !== '') {
    // Display the error message div
    errorMessageDiv.style.display = 'block';
} else {
    // Hide the error message div if there's no message
    if (errorMessageDiv) {
        errorMessageDiv.style.display = 'none';
    }
}
