window.addEventListener("load", mensaje);

b.addEventListener("click", color)
function mensaje() {
let x = document.getElementById("alerta");
let b = document.getElementById("boton");
if (x.style.display === "none") {
    x.style.display = "block";
    b.style.color = "#FB48C4";
    b.style.backgroundColor = "black";
    b.style.border = "5px dashed #FB48C4"
    } else {
    x.style.display = "none";
    b.style.color = "black";
    b.style.backgroundColor = "#EFBE7D";
    b.style.border = "3px solid #FC8F32"
    }
}

