let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n , I) { 
    if (I.indexOf(Number(n)) != 1) {
        return true
    }else {
        return false
    }
 }

 function adicionar() {
     if (isNumero(num.value) && inlista(num.value, valores) ) {
         return
     }else{
         window.alert("valor invalido ou ja encontrado na lista")
     }
     
 }

//EXEMPLOS AULA 16

/*function SOMA(N, N2){
    return N+N2
}
console.log(SOMA(5,6))




function PARIMP(N) {
    if (N%2 == 0) {
        return "par"
    }else {
        return "impar"
    }
    
}
console.log(PARIMP(223))
*/

//EXEMPLOS AULA 15

//let num = [1,2,3,6,5,4,7,8]

//for (let pos = 0; pos < num.length; pos++){
//    console.log(`a posição ${pos} tem o valor ${num.pos}`)
//}

//for (let pos in num) {
//    console.log(`a posição ${pos} tem o valor ${num.pos}`)
//}
   