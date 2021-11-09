var agora = new Date()
var dia = agora.getDay()
console.log(dia)
switch (dia) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    
        console.log(`QUARTA`)
        break
    case 4:
        console.log(`QUINTA`)
        break
    case 5:
        console.log(`SEXTA`)
        break
    case 6:
        console.log(`SABADO`)
        break
    default:
        console.log(`Error! Dia inválido`)
}
