const form = document.getElementById("bookingForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const destination = document.getElementById("destination").value;
    const address = document.getElementById("address").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked');

    const facilities = [];

    document
    .querySelectorAll('input[name="facility"]:checked')
    .forEach((item) => {
        facilities.push(item.value);
    });

    const fileInput = document.getElementById("file");
    const fileName = fileInput.files.length > 0
        ? fileInput.files[0].name
        : "No File Selected";

    /* Extra Validation */

    if (name.length < 3) {
        alert("Name should contain at least 3 characters.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    result.innerHTML = `

    <div class="data-card">

        <h3>Travel Booking Details</h3>

        <p><strong>Name :</strong> ${name}</p>

        <p><strong>Password :</strong> ${password}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Phone :</strong> ${phone}</p>

        <p><strong>Age :</strong> ${age}</p>

        <p><strong>Date of Journey :</strong> ${date}</p>

        <p><strong>Preferred Time :</strong> ${time}</p>

        <p><strong>Destination :</strong> ${destination}</p>

        <p><strong>Gender :</strong> ${gender.value}</p>

        <p><strong>Facilities :</strong> ${facilities.join(", ") || "None"}</p>

        <p><strong>ID Proof :</strong> ${fileName}</p>

        <p><strong>Address :</strong> ${address}</p>

    </div>

    `;

    form.reset();

});