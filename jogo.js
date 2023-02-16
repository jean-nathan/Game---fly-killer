

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 1500


 var nivel = window.location.search // search recupera tudo que estiver a direita, ou seja, todo parametro;
 
 nivel = nivel.replace('?', '') 

 if (nivel === 'normal') {
    //15000
    criarMosquitoTempo = 1500
 } else if (nivel === 'dificil') {
    //1000
    criarMosquitoTempo = 1000
 } else if (nivel === 'chucknorris') {
    criarMosquitoTempo = 750
 }

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if ( tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href="vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo //Inserir o valor entre as tags
    }

    }, 1000)

function posicaoRandomica() {

    //remover mosquito anterior (caso exista)

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

            vidas++
        }
        

    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove() // Faz referencia ao proprio elemento que executa a função;
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    switch (classe) {
        case 0:
            return 'mosquito1' // usar return ele não precisa usar o break
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
            
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'LadoA'
        case 1:
            return 'ladoB'
    }
}
