document.querySelector('#btn2').addEventListener('click', () => {

    var dados = {
        altura =[
            parseInt(document.getElementById('alt').value),
            parseInt(document.getElementById('alt1').value),
            parseInt(document.getElementById('alt2').value),
            parseInt(document.getElementById('alt3').value),
            parseInt(document.getElementById('alt4').value)
        ],
        sexo =[
            document.querySelector('input[name="gender"]:checked').value,
            document.querySelector('input[name="gender1"]:checked').value,
            document.querySelector('input[name="gender2"]:checked').value,
            document.querySelector('input[name="gender3"]:checked').value,
            document.querySelector('input[name="gender4"]:checked').value,
        ]
    }

    var countOne = 0;
    var countZero = 0;
    for (var i = 0; i < dados.sexo.length; i++) {
        if (dados.sexo[i] === 1) {
            countOne++;
        }
    }
    countZero = arr.length - countOne;

    alert(`Homens: ${qtm}\nMulheres: ${qtf}`)

});