document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
        .then(response => response.text())
        .then(data => el.innerHTML = data);
    });
  });
  
function openTab(tabName) {
    const fileName = tabName.replace(/\s+/g, '-').toLowerCase() + '.html';
    window.location.href = fileName;
}
