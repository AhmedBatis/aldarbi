// Load SVG logo

document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".aldarbi-logo");

  fetch("src/aldarbi-logo.svg")
    .then(response => {
      if (!response.ok) {
        throw new Error("SVG file not found or couldn't be loaded.");
      }
      return response.text();
    })
    .then(svgText => {
      logoContainer.innerHTML = svgText;
    })
    .catch(error => {
      console.error("Error loading SVG:", error);
    });
});
