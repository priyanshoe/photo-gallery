const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Remove the 'active' class from all cards
    cards.forEach((c) => {
      c.classList.remove('active');
    });

    // Add the 'active' class to the clicked card
    card.classList.add('active');
  });
});