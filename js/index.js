document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const botonGuardar = document.getElementById("buttonText");

  botonGuardar.addEventListener("click", () => {
    const input_Text = input.value;
    localStorage.setItem("Felix", input_Text);
    input.value = " ";
  });
});
