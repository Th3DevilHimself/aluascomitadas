document.querySelector('#btn').addEventListener('click', () => {
    let n1, n2, total;

    n1 = parseInt(document.getElementById('n1').value);
    n2 = parseInt(document.getElementById('n2').value);

    if ( n1===0 || n2===0 ) {
        alert ('Impossivel dividir por 0')
    }
    else {
        total=n1/n2;
        alert ('Resultado = '+total)
    }
});