function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value == 0 || fano.value > atual) {
        window.alert("[ERROR!] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = atual - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Masculino"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'images/menino.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'images/adole_masc.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/homem.png')
            } else {
                img.setAttribute('src', 'images/homem_id.png')
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'images/menina.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'images/adole_fem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/mulher.png')
            } else {
                img.setAttribute('src', 'images/mulher_id.png')
            }
        
        }

        res.innerHTML = `Detectamos pessoa do gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}