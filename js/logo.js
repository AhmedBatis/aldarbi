document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".aldarbi-logo");

  // Load SVG
  fetch("src/aldarbi-logo.svg")
    .then(response => {
      if (!response.ok) throw new Error("SVG file not found.");
      return response.text();
    })
    .then(svgText => {
      logoContainer.innerHTML = svgText;

      // Add class to the injected SVG
      const injectedSvg = logoContainer.querySelector("svg");
      if (injectedSvg) {
        injectedSvg.classList.add("injected-logo");
      }

      // Now load the JSON file
      return fetch("src/theme.json");
    })
    .then(response => {
      if (!response.ok) throw new Error("Theme JSON not found.");
      return response.json();
    })
    .then(colorMap => {
      // Apply colors from the JSON
      for (const [id, color] of Object.entries(colorMap)) {
        const element = document.getElementById(id);
        if (element) {
          element.style.fill = color;
        } else {
          console.warn(`Element with ID "${id}" not found in SVG`);
        }
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
