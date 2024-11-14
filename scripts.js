document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery-grid img').forEach(img => {
      img.addEventListener('click', function() {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src;
      });
    });
  });  