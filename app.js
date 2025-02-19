/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do numero secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha o numero entre 1 e 40'*/
let listaNumerosSorteados = []
let numeroLimite = 50
let numeroAleatorio = gerarNumero()
let tentativas = 1

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
    exibiTextoNaTela('h1', 'Jogo do numero secreto')
    exibiTextoNaTela('p', 'Escolha o numero entre 1 e 40')
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(numeroAleatorio)
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} 
        ${palavraTentativa}. Parabens`
        exibiTextoNaTela('h1', 'Acertouuu!!!!')
        exibiTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroAleatorio){
            exibiTextoNaTela('p', 'O numero secreto é menor')
        } else {
            exibiTextoNaTela('p', 'O numero secreto é maior')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeNumeroLita = listaNumerosSorteados.length;
    if (quantidadeNumeroLita == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero()

    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        console.log(listaNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumero()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}