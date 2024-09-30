var txtcont = document.getElementById("res")






function Result(){

var texthis = window.document.getElementById("historico")
var resultado = eval(txtcont.innerHTML)
if(txtcont.innerHTML.lastIndexOf("+") == (txtcont.innerHTML.length -1) || 
       txtcont.innerHTML.lastIndexOf("-") == (txtcont.innerHTML.length -1) ||
       txtcont.innerHTML.lastIndexOf("*") == (txtcont.innerHTML.length -1) ||
       txtcont.innerHTML.lastIndexOf("/") == (txtcont.innerHTML.length -1)){
        alert("Formato Invalido tente Denovo")

    }
else{
let item = window.document.createElement("option")
item.text = `${txtcont.innerHTML} = ${resultado}`
txtcont.innerHTML = resultado
texthis.appendChild(item)
}
}

function Limpar(){

    txtcont.innerHTML = "0"


}