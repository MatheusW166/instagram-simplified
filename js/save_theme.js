const input = document.getElementById("switch-btn");
const lS = window.localStorage;

input.checked = JSON.parse(lS.getItem("isDark"));
input.onchange = (e) => {
    lS.setItem("isDark", JSON.stringify(e.target.checked));
}
