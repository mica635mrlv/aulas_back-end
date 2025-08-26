function calcularSoma() {
    let v1 = parseInt(document.getElementById("n1").value); // value valor do campo de texto
    let v2 = parseInt(document.getElementById("n2").value);

    let total = v1 + v2;

    document.getElementById("resultado").innerHTML = total;
}

// push() = add um item no final
// pop() = remove do final
// unshift() = add um element no início
// shift() = remove do inicio