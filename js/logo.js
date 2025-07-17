// Load SVG logo


document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".aldarbi-logo");

  fetch("src/aldarbi-logo.svg")
    .then(response => {
      if (!response.ok) throw new Error("SVG file not found.");
      return response.text();
    })
    .then(svgText => {
      logoContainer.innerHTML = svgText;

      // Add a class to the injected SVG for CSS control
      const injectedSvg = logoContainer.querySelector("svg");
      if (injectedSvg) {
        injectedSvg.classList.add("injected-logo");
      }
    })
    .catch(error => {
      console.error("Error loading SVG:", error);
    });
});
