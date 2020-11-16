document.querySelector('#btn').addEventListener('click', () => {
    let n1, n2, divisao, soma, sub, multipl;

    n1 = parseInt(document.getElementById('n1').value);
    n2 = parseInt(document.getElementById('n2').value);

    soma = n1 + n2;
    sub = n1 - n2;
    multipl = n1 * n2;

    if (n1 === 0 || n2 === 0) {
        divisao = 'Impossivel dividir por 0'
    }
    else {
        divisao = n1 / n2;
    }

    alert(
        `soma: ${soma} \nsubtração: ${sub} \nmultiplicação: ${multipl} \ndivisão: ${divisao}`
    )
});

document.querySelector('#btn2').addEventListener('click', () => {

    let n1 = parseInt(document.getElementById('nm1').value);

    let verf = n1 % 2;

    if (verf == 0) {
        alert('Par')
    }
    else {
        alert('Impar')
    }
});

document.querySelector('#btn3').addEventListener('click', () => {

    let ano = parseInt(document.getElementById('ano').value);

    let verf = ano % 2;

    if (verf == 0) {
        alert('bissexto')
    }
    else {
        alert('não é bissexto')
    }

});

document.querySelector('#btn4').addEventListener('click', () => {

    let n = parseInt(document.getElementById('loop').value);

    var text = "";
    var i;
    for (i = 0; i < n; i++) {
        text += "o numero é " + (i+1) + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

});