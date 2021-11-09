function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var pas = document.getElementById("txtp")
    var res = document.getElementById("res")
    

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERROR] Faltam dados')
    } else {
        res.innerHTML = 'Contando...  '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `${c} \u{1F3C1} FIM`
        } else {
            for (var c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `${c} \u{1F3C1} FIM`
    } 

}