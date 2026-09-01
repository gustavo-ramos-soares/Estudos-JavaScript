'use strict';

document.body.style.backgroundColor = '#054A91';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'flex-start';
document.body.style.height = '100vh';

let btnCriar = document.createElement('button')

document.body.appendChild(btnCriar)

btnCriar.style.width = '120px'
btnCriar.style.height = '27px'
btnCriar.textContent = 'Criar Elemento'
btnCriar.style.backgroundColor = '#F17300'
btnCriar.style.border = 'none'
btnCriar.style.borderRadius = '7px'
btnCriar.style.color = '#fff'
btnCriar.style.fontSize = '15px'
btnCriar.style.cursor = 'pointer'

let n = 0

btnCriar.addEventListener('click', criarElemento)

function criarElemento(){
    let box = document.createElement('div')
    
    box.style.width = '250px'
    box.style.height = '250px'
    box.style.backgroundColor = '#81A4CD'
    box.style.marginTop = '10px'

    n++

    document.body.appendChild(box)

    box.innerText = `${n}`

    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'
    box.style.fontSize = '2rem'
    box.style.fontWeight = 'bold'
    box.style.color = '#fff'
    box.style.cursor = 'pointer'

    box.addEventListener('mouseenter', entrar)
    box.addEventListener('click', clicar)
    box.addEventListener('mouseout', sair)

    function entrar(){
    box.style.backgroundColor = 'red'
    }

    function clicar(){
    box.style.backgroundColor = 'white'
    }

    function sair(){
    box.style.backgroundColor = 'orange'
    }

}


