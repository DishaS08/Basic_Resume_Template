// Show welcome message when the page loads
window.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to Disha Suryawanshi's Resume Portfolio 🌟");
});

// Smooth scroll when clicking on nav links
document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
