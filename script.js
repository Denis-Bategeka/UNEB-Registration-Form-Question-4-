// Question c: Form validation - Additional JavaScript validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const dobInput = document.getElementById('dob');
    
    // Set max date to today
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);
    
    // Custom validation for index number
    const indexInput = document.getElementById('indexNumber');
    indexInput.addEventListener('blur', function() {
        const pattern = /^U\d{4}\/\d{3}\/\d{4}$/;
        if (this.value && !pattern.test(this.value)) {
            this.setCustomValidity('Please use format: UXXXX/XXX/XXXX');
            this.reportValidity();
        } else {
            this.setCustomValidity('');
        }
    });
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        // Additional date validation
        const dob = new Date(dobInput.value);
        const today = new Date();
        
        if (dob > today) {
            event.preventDefault();
            alert('Date of birth cannot be in the future.');
            dobInput.focus();
            return false;
        }
        
        // Check if school is selected
        const schoolSelect = document.getElementById('school');
        if (!schoolSelect.value) {
            event.preventDefault();
            alert('Please select a school/center.');
            schoolSelect.focus();
            return false;
        }
        
        // If all validations pass
        alert('Form submitted successfully! (This is a demo - no data is actually sent)');
        // In real scenario, you would send data to server here
    });
});
