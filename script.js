
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(
        'form[name="student-registration"]'
    );

    const status = document.getElementById("status");

    if (!form) {
        console.log("Registration form not found");
        return;
    }

    form.addEventListener("submit", function () {

        if (status) {
            status.textContent =
                "Your registration is being submitted. Please wait...";
        }

        const button = form.querySelector(
            'button[type="submit"]'
        );

        if (button) {
            button.textContent = "Submitting...";
            button.disabled = true;
        }

    });

});
