function ResidentEvil(){
    var corp = window.document.getElementById("corpo")
    corp.style.backgroundImage = "url('imagens/maleta.jpg')"
    corp.style.backgroundRepeat = "no-repeat"
    corp.style.backgroundSize = "100%"



    var gife = window.document.getElementById("Imagemgif")
    gife.style.position ="absolute"
    gife.src = "imagens/Leon.gif"
    gife.style.width ="350px"
    gife.style.top ="200px"
    gife.style.left ="-100%"
    gife.style.borderRadius = "10%"

    var sec = window.document.getElementById("Calc")
    sec.style.top = "250px"
    sec.style.backgroundColor = "#2a2d24"   
    sec.style.backgroundImage = "url('imagens/Vila.jpg')"
    sec.style.backgroundRepeat ="no-repeat"
    sec.style.backgroundSize = "100%"
    sec.style.backgroundPositionY ="50%"
        var txtnum = window.document.getElementById("res")
        txtnum.style.backgroundColor = "#656355"
    


    let toca = document.querySelector("html");
    let musica = document.querySelector("#musica");
    musica.src = "songs/Re.mp3" 
    toca.addEventListener('click', () => {
        musica.play();
    })


}
function OnePieceD(){
    var corp = window.document.getElementById("corpo")
    corp.style.backgroundImage = "url('imagens/one piece.jpg')"
    corp.style.backgroundRepeat = "no-repeat"
    corp.style.backgroundSize = "100%"

    var gife = window.document.getElementById("Imagemgif")
    gife.style.position ="absolute"
    gife.src = "imagens/Luffy.gif"
    gife.style.width ="350px"
    gife.style.top ="-350px"
    gife.style.left ="100px"

    let toca = document.querySelector("html");
    let musica = document.querySelector("#musica");
    musica.src = "songs/Bink.mp3" 
    toca.addEventListener('click', () => {
        musica.play();
    })





    var sec = window.document.getElementById("Calc")
    sec.style.top = "300px"
    //sec.style.backgroundColor = "#6ab6db"  
    sec.style.backgroundImage = "url('imagens/Luffy1.jpg')"
    sec.style.backgroundRepeat ="no-repeat"
    sec.style.backgroundSize = "100%"
    sec.style.backgroundPositionY ="50%"
    
        var txtnum = window.document.getElementById("res")
        txtnum.style.backgroundColor = "#317cc4"
        





}

function Normale(){

    var corp = window.document.getElementById("corpo")
    corp.style.backgroundImage = ""

    var gife = window.document.getElementById("Imagemgif")
    gife.style.position ="absolute"
    gife.src = "imagens/Gato.gif"
    gife.style.width ="350px"
    gife.style.top ="-225px"
    gife.style.left ="10px"



    var sec = window.document.getElementById("Calc")
    sec.style.top = "200px"
    sec.style.backgroundColor = "#dcdcdc"
    sec.style.backgroundImage = "url('imagens/Gatinhos.jpg')"
    sec.style.backgroundRepeat ="no-repeat"
    sec.style.backgroundSize = "100%"
    sec.style.backgroundPositionY ="50%"
        var txtnum = window.document.getElementById("res")
        txtnum.style.backgroundColor = "silver"
    



    let toca = document.querySelector("html");
    let musica = document.querySelector("#musica");
    musica.src = "songs/no Enemies.mp3" 
    toca.addEventListener('click', () => {
        musica.play();
    })




}
