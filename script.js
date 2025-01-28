document.getElementById("youth-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let gender = document.getElementById("gender").value;

    if (!firstName || !lastName || !email || !city || !gender) {
        alert("Please fill out all required fields.");
        return;
    }

    // If validation passes, you can submit the form
    alert("Form submitted successfully!");
    // You can replace the alert with actual form submission logic here, if needed
    this.submit();
});
h3 {
    font-size: 1.2rem; /* Adjust font size for readability */
    line-height: 1.6; /* Increase line height for better spacing */
    text-align: justify; /* Justify text to ensure clean alignment on both sides */
    margin: 20px 0; /* Add spacing above and below the text */
    padding: 0 10px; /* Add padding on the left and right for better alignment */
    color: #333; /* Dark text color for contrast */
}

h3 span {
    display: block; /* Each sentence or paragraph as a separate block */
    margin-bottom: 10px; /* Add spacing between paragraphs */
}

