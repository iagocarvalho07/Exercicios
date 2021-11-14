function verificar () {  
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verrifique os dados e tente novamente `)
        
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <= 10) {
                //criança 
                img.setAttribute(`src`, `Hbebe.jpg`)
            }else if (idade > 10 && idade <=21) {
                //joven
                img.setAttribute(`src`, `Hjoven.jpg`)
            }else if (idade > 21 && idade <=50) {
                //adulto
                img.setAttribute(`src`, `Hadulto.jpg`)
            }else  {
                //idoso 
                img.setAttribute(`src`, `Hidoso`)
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute(`src`, `Mbebe.jpg`)
            }else if (idade < 21) {
                //joven
                img.setAttribute(`src`, `Mjoven.jpg`)
            }else if (idade <= 50) {
                //adulto
                img.setAttribute(`src`, `Madulto.jpg`)
            }else {
                //idoso
                img.setAttribute(`src`, `Midoso.jpg`)
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} ano de idade`
        res.appendChild(img).style.width ="300px"
    
    }
}