let num = [5, 8, 2, 9, 3]
// Acrescentar valor em um array
num[5] = 6 //num[posicao] = valor
// Acrescentar na ulatima posção:
num.push(17)
num.push(23)

//Ordenar numeros
var order = num.sort((a, b) => {
    return a-b
})



console.log(`Array composto por: >>> ${num} <<< `)
console.log(`Array composto por : >>> ${num[0]} <<< na primeira posição `)

// comprimento de um array
console.log(`Array de tamanho : >>> ${num.length} <<< `)

//ordenar 
console.log(`Array ordenado: >>> ${order} <<< `)