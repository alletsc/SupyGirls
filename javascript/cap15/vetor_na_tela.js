let num = [0, 4, 89, 7, 8, 9]

/*
console.log(num)
for (let pos = 0; pos < num.length; pos++){
    console.log(`Valor na posição ${pos} = ${num[pos]}` )
}*/

for (let pos in num) {
    console.log(`Valor na posição ${pos} = ${num[pos]}  ` )
}

// Buscar valores dentro de uma vetor
console.log(num.indexOf(3))

