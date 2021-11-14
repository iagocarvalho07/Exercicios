function Contar() {
    var ini = document.getElementById("inicio")
    var fin = document.getElementById("final")
    var pass = document.getElementById("passo")
    var resultado = document.getElementById("res")
    if (ini.value.length == 0 || fin.value.lenght == 0 || pass.value.lenght == 0 ) {
        window.alert('errrroooo')
    }else {
        resultado.innerHTML = 'contando.....'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(pass.value)
        if (i < f) {
            //contagem crescente 
            for (let c = i; c <= f;  c += p){
                resultado.innerHTML += `${c}  ` 
       
            } 
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} `
                
            }
        }

    }
}    