// Vou criar a minha página com o objetivo de ensinar física ao pessoal

window.onload = function() {
    document.getElementById("ChangeTheme").addEventListener("click",ChooseTheme);
}

function ChooseTheme() {
    let ThemeValue = document.querySelector("input[name='Themes']:checked").value;
    document.body.className = ThemeValue;
}