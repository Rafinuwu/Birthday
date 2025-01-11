document.addEventListener('DOMContentLoaded', () => {
  const album = document.getElementById('album');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  // Show the image in the lightbox when clicked
  album.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      lightboxImage.src = e.target.src;
      lightbox.classList.remove('hidden');
    }
  });

  // Hide the lightbox when clicked
  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImage.src = ''; // Clear the image src for optimization
  });
});
