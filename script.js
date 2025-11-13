document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCloseBtn = document.getElementById('modal-close');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the card title within the same card as the button
            const card = button.closest('.ticket-card');
            const title = card.querySelector('.card-title').textContent;

            // Set the title in the modal
            modalTitle.textContent = `「${title}」`;

            // Show the modal
            modal.style.display = 'flex';
        });
    });

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Close modal when the close button is clicked
    modalCloseBtn.addEventListener('click', closeModal);

    // Close modal when clicking on the backdrop
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
