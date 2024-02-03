const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const numeroCapitulos = 10
let taTocando = 0
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle.fill')
    botaoPlayPause.classList.add('bi bi-pause-circle-fill')
}

function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle.fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausaFaixa() {
    if (taTocando === 0) {
        tocarFaixa()
        taTocando = 1
    }else{
        pausarFaixa()
        taTocando = 0
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1
    }else{
        capituloAtual = capituloAtual + 1
    }
    capituloAtual = capituloAtual + 1
}

audioCapitulo.src = './books/dom-casmurro/1.mp3'

botaoPlayPause.addEventListener('click', tocarFaixa)
