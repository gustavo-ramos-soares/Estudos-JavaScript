
let valores = [2, 5, 4, 3, 1, 7]


// for (let pos = 0 ; pos<valores.length ; pos++) {
//     console.log(`A posição ${pos} tem o numero ${valores[pos]}`)
// }


//simplificado
for (let pos in valores) {
    console.log(`A posição ${pos} tem o numero ${valores[pos]}`)
}