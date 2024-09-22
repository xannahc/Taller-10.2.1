document.addEventListener("DOMContentLoaded", () => {
    const trayendoData = document.getElementById('data');
    let elValor = localStorage.getItem("Felix");
    trayendoData.innerText = elValor;
    
});
