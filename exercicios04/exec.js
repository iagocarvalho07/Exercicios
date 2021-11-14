function tabuada() { 
    let Num = document.getElementById('txtn')
    let tab = document.getElementById('seltabuada')
    if (Num.value.length == 0) {
        window.alert("Porfavor digite um numero ")
        
    }else{
        let n = Number(Num.value)
        let c = 1
        tab.innerHTML=''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
}