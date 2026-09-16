'use strict';

function calcularIdade() {

    let idade = document.getElementById('iDate').value

    let dataNascimento = new Date(idade + 'T00:00:00')

    let anoIdade = dataNascimento.getFullYear()
    let mesIdade = dataNascimento.getMonth()
    let diaIdade = dataNascimento.getDate()

    let idadeCompleta = Number((`${anoIdade}-${mesIdade}-${diaIdade}`))

    let btnCalcular = document.getElementById('btnCalcular')
    let boxMsg = document.getElementById('boxMsg')

    let date = new Date()

    let ano = date.getFullYear()
    let mes = date.getMonth()
    let dia = date.getDate()

    let dataCompleta = Number((`${ano}-${mes}-${dia}`))

    let idadeAtual = (ano - anoIdade)
    let mesAtual = (mes - mesIdade)

    boxMsg.innerHTML = (`Você tem ${idadeAtual} anos e ${mesAtual} meses de idade.`)
    boxMsg.style.margin = '10px 0'
    boxMsg.style.textAlign = 'center'
}