// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Volunteer Form Validation & Simulated Submission
const volForm = document.getElementById('volunteerForm');
const volSuccess = document.getElementById('volSuccess');
if (volForm) {
  volForm.addEventListener('submit', function(e) {
    e.preventDefault();
    volSuccess.classList.add('d-none');
    volForm.classList.add('was-validated');
    if (volForm.checkValidity()) {
      volSuccess.classList.remove('d-none');
      setTimeout(() => { volSuccess.classList.add('d-none'); }, 3000);
      volForm.reset();
      volForm.classList.remove('was-validated');
    }
  });
}

// Donate Form Validation & Simulated Submission
const donateForm = document.getElementById('donateForm');
const donateSuccess = document.getElementById('donateSuccess');
if (donateForm) {
  donateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    donateSuccess.classList.add('d-none');
    donateForm.classList.add('was-validated');
    if (donateForm.checkValidity()) {
      donateSuccess.classList.remove('d-none');
      setTimeout(() => { donateSuccess.classList.add('d-none'); }, 3000);
      donateForm.reset();
      donateForm.classList.remove('was-validated');
    }
  });
}

// Optional: Navbar collapse on click (for mobile)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('mainNav');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});
