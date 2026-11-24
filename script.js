
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Open modal
contactBtn.addEventListener("click", () => {
    contactModal.classList.add("active");
    contactModal.setAttribute("aria-hidden", "false");
    closeModal.focus();
});

// Close modal
function hideModal() {
    contactModal.classList.remove("active");
    contactModal.setAttribute("aria-hidden", "true");
    contactBtn.focus();
}

closeModal.addEventListener("click", hideModal);

// Close when clicking outside
contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        hideModal();
    }
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" &&
        contactModal.classList.contains("active")) {
        hideModal();
    }
});
