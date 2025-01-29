// Modal functionality
const modal = document.getElementById('authModal');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};
