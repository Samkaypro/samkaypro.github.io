document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    // Send the form data to Formspree
    fetch("https://formspree.io/f/xknlbaoo", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then(function (response) {
            // Check if the form submission was successful
            if (response.ok) {
                // Form submitted successfully, show a success message
                const successMessage = document.createElement("p");
                successMessage.textContent = "Your message has been sent!";
                successMessage.style.color = "green";
                document.getElementById("contactForm").appendChild(successMessage);

                // Optionally, clear the form fields
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            } else {
                // Handle form submission errors
                const errorMessage = document.createElement("p");
                errorMessage.textContent = "Your message was not sent. Please try again.";
                errorMessage.style.color = "red";
                document.getElementById("contactForm").appendChild(errorMessage);
            }
        })
        .catch(function (error) {
            // Handle network errors
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Network error. Please try again later.";
            errorMessage.style.color = "red";
            document.getElementById("contactForm").appendChild(errorMessage);
        });
});