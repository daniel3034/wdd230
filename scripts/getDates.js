// Get current year dynamically
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

// Get last modified date of the document
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last updated: ${document.lastModified}`;