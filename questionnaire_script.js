function submitForm() {
    const form = document.getElementById('questionnaireForm');

    // Check if form is valid
    if (form.checkValidity() === false) {
        alert("Please complete all fields.");
        return;
    }

    // Validate age
    const ageValue = form.age.value;
    const age = parseInt(ageValue); // Get the entered age
    if (age < 16 || age > 100) {
        alert("Please enter a valid age between 16 and 100.");
        return;
    }

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Form Data Submitted: ", data);

    // You can redirect the user or process the form data as needed
    alert("Questionnaire Submitted Successfully!");
    
    // window.location.href = "/dashboard";  // Uncomment to redirect to dashboard
}
