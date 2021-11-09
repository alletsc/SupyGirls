
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.background = "#ffbd30"
    }
    else if (hora > 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = "#d47640"
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = "#0d1941"
    }
}
