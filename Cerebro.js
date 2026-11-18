// Mudar o tema da página
window.onload = function() {
    document.body.className = "Dark";
    document.getElementById("ChangeTheme").addEventListener("click",ChooseTheme);
}

function ChooseTheme() {
    let ThemeValue = document.querySelector("input[name='Themes']:checked").value;
    document.body.className = ThemeValue;
}


// Load md file data: include md and Latex parser
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
        // 1. Markdown → HTML
        container.innerHTML = marked.parse(markdownText);

        // 2. LaTeX → typeset math
        renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$',  right: '$',  display: false },   // inline $...$
          ],
          throwOnError: false   // show errors inline instead of crashing
        });
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo Markdown:', error);
        container.innerHTML =
          '<p>Erro ao carregar o conteúdo: ' + error.message + '</p>';
      });
  });
});