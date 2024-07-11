function exercicio05() {
    var vetor = [];
    var valor = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 1000; i++) {
        vetor[i] = parseInt(Math.random() * 6) + 1;
    }
    console.table(vetor);
    for (var i = 0; i < vetor.length; i++) {
        valor[vetor[i] - 1]++;
    }
    console.log(valor);

    var p1 = (valor[0] / 1000) * 100;
    var p2 = (valor[1] / 1000) * 100;
    var p3 = (valor[2] / 1000) * 100;
    var p4 = (valor[3] / 1000) * 100;
    var p5 = (valor[4] / 1000) * 100;
    var p6 = (valor[5] / 1000) * 100;

    if (p1 > 22 || p2 > 22 || p3 > 22 || p4 > 22 || p5 > 22 || p6 > 22) {
        console.log("ESTE DADO E VICIADO!!!")
    }
    console.log(p1.toFixed(2) + "% ");
    console.log(p2.toFixed(2) + "% ");
    console.log(p3.toFixed(2) + "% ");
    console.log(p4.toFixed(2) + "% ");
    console.log(p5.toFixed(2) + "% ");
    console.log(p6.toFixed(2) + "% ");
}

exercicio05();
