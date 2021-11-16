function calcular() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        
        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso ideal "
        }else if (valorIMC < 25) {
            classificacao = "peso ideal"
        }else if (valorIMC < 30) {
            classificação = "acima do peso ideal "
        }else if (valorIMC < 35) {
            classificacao = "obesidade grau 1 "
        }else if (valorIMC < 40){
            classificacao = "obesidade grau 2"
        }else {
            classificacao = "obesidade grau 3 "
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

// window.alert("o calculo sera realizado em instantes ")