// Mudar o tema da página
window.onload = function() {
    document.body.className = "Dark";
    document.getElementById("ChangeTheme").addEventListener("click",ChooseTheme);
}

function ChooseTheme() {
    let ThemeValue = document.querySelector("input[name='Themes']:checked").value;
    document.body.className = ThemeValue;
}


// Import md file data 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-md]').forEach(container => {
    const file = container.dataset.md;

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} — ficheiro não encontrado?`);
        }
        return response.text();
      })
      .then(markdownText => {
        container.innerHTML = marked.parse(markdownText);
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo Markdown:', error);
        container.innerHTML =
          '<p>Erro ao carregar o conteúdo: ' + error.message + '</p>';
      });
  });
});