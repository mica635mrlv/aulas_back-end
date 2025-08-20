function calcularSoma() {
    let v1 = parseInt(document.getElementById("n1").value); // value valor do campo de texto
    let v2 = parseInt(document.getElementById("n2").value);

    let total = v1 + v2;

    document.getElementById("resultado").innerHTML = total;
}