document.body.style.backgroundColor = "#204039";

function switchToDarkMode() {
    document.body.style.backgroundColor = "#111111";
    document.body.style.color = "#EEEEEE";
}

let darkModeButton = document.getElementById("dark-mode");
darkModeButton.onclick = switchToDarkMode;

function switchToLightMode() {
    document.body.style.backgroundColor = "#EEEEEE";
    document.body.style.color = "#111111";
}

let lightModeButton = document.getElementById("light-mode");
lightModeButton.onclick = switchToLightMode;