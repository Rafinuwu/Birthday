document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#album img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src; // Set lightbox image to clicked image
      lightbox.style.display = "flex"; // Show the lightbox
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none"; // Hide the lightbox on click
  });
});

