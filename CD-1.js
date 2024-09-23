const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialty: "Pediatrics" },
    { id: 3, name: "Dr. Lee", specialty: "Dermatology" }
];

let appointments = [];

// Populate the doctor selection dropdown
function populateDoctors() {
    const doctorSelect = document.getElementById("doctorSelect");
    doctors.forEach(doctor => {
        const option = document.createElement("option");
        option.value = doctor.id;
        option.textContent = `${doctor.name} - ${doctor.specialty}`;
        doctorSelect.appendChild(option);
    });
}

// Handle user registration
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Registration successful for " + username);
    document.getElementById("registrationForm").reset();
}

// Handle appointment booking
function bookAppointment(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value;
    const doctorId = document.getElementById("doctorSelect").value;
    const appointmentDate = document.getElementById("appointmentDate").value;

    if (!patientName || !doctorId || !appointmentDate) {
        alert("Please fill in all fields.");
        return;
    }

    const appointment = {
        patientName,
        doctorId,
        appointmentDate
    };

    appointments.push(appointment);
    alert("Appointment booked successfully for " + patientName + "!");
    document.getElementById("appointmentForm").reset();
}

// Event listeners
document.getElementById("registrationForm").addEventListener("submit", registerUser);
document.getElementById("appointmentForm").addEventListener("submit", bookAppointment);

// Populate doctors on window load
window.onload = function() {
    populateDoctors();
};
