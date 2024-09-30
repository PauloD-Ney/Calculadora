

function Num1(){
    var txtn1 = document.getElementById("txt1")
    var num1 = Number(txtn1.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num1}`
    }
    else{
        txtcont.innerHTML +=`${num1}`
    }
    
    
}

function Num2(){
    var txtn2 = document.getElementById("txt2")
    var num2 = Number(txtn2.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num2}`
    }
    else{
        txtcont.innerHTML +=`${num2}`
    }
    
    
}


function Num3(){
    var txtn3 = document.getElementById("txt3")
    var num3 = Number(txtn3.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num3}`
    }
    else{
        txtcont.innerHTML +=`${num3}`
    }
    
    
}


function Num4(){
    var txtn4 = document.getElementById("txt4")
    var num4 = Number(txtn4.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num4}`
    }
    else{
        txtcont.innerHTML +=`${num4}`
    }
    
    
}
function Num5(){
    var txtn5 = document.getElementById("txt5")
    var num5 = Number(txtn5.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num5}`
    }
    else{
        txtcont.innerHTML +=`${num5}`
    }
    
    
}
function Num6(){
    var txtn6 = document.getElementById("txt6")
    var num6 = Number(txtn6.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num6}`
    }
    else{
        txtcont.innerHTML +=`${num6}`
    }
    
    
}
function Num7(){
    var txtn7 = document.getElementById("txt7")
    var num7 = Number(txtn7.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num7}`
    }
    else{
        txtcont.innerHTML +=`${num7}`
    }
    
    
}
function Num8(){
    var txtn8 = document.getElementById("txt8")
    var num8 = Number(txtn8.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num8}`
    }
    else{
        txtcont.innerHTML +=`${num8}`
    }
    
    
}
function Num9(){
    var txtn9 = document.getElementById("txt9")
    var num9 = Number(txtn9.value)
    if(txtcont.innerHTML === "0"){
        txtcont.innerHTML =`${num9}`
    }
    else{
        txtcont.innerHTML +=`${num9}`
    }
    
    
}

function Num0(){
    var txtn0 = document.getElementById("txt0")
    var num0 = Number(txtn0.value)
    txtcont.innerHTML +=`${num0}`
    
    
    
}
function Somar(){
    if(txtcont.innerHTML == 0){
        txtcont.innerHTML =`+`
    }
    else{
        txtcont.innerHTML +=`+`
    }
    
    
}

function Sub(){
    if(txtcont.innerHTML == 0){
        txtcont.innerHTML =`-`
    }
    else{
        txtcont.innerHTML +=`-`
    }
    
    
}

function Mult(){
    if(txtcont.innerHTML == 0){
        window.alert("Error")
    }
    else{
        txtcont.innerHTML +=`*`
    }
    
    
}

function Div(){
    if(txtcont.innerHTML == 0){
        window.alert("Error")
    }
    else{
        txtcont.innerHTML +=`/`
    }
    
    
}