
let player = ''

const playerClickAndHover = () => {
    const batuPlayer = document.getElementById('batu-player')
    const kertasPlayer = document.getElementById('kertas-player')
    const guntingPlayer = document.getElementById('gunting-player')

    batuPlayer.addEventListener("click", batuClick)
    kertasPlayer.addEventListener("click", kertasClick)
    guntingPlayer.addEventListener("click", guntingClick)

    batuPlayer.addEventListener("mouseenter", batuMouseenter)
    batuPlayer.addEventListener("mouseleave", batuMouseleave)
    kertasPlayer.addEventListener("mouseenter", kertasMouseenter)
    kertasPlayer.addEventListener("mouseleave", kertasMouseleave)
    guntingPlayer.addEventListener("mouseenter", guntingMouseenter)
    guntingPlayer.addEventListener("mouseleave", guntingMouseleave)

    function batuClick() {
        batuPlayer.style.backgroundColor = '#C4C4C4'
        player = 'batu'
        clickRemover()
        hoverRemover()
        comRandom()
        hasil()
    }

    function kertasClick() {
        kertasPlayer.style.backgroundColor = '#C4C4C4'
        player = 'kertas'
        clickRemover()
        hoverRemover()
        comRandom()
        hasil()
    }

    function guntingClick() {
        guntingPlayer.style.backgroundColor = '#C4C4C4'
        player = 'gunting'
        clickRemover()
        hoverRemover()
        comRandom()
        hasil()
    }

    function batuMouseenter() {
        batuPlayer.style.backgroundColor = '#C4C4C4'
    }

    function batuMouseleave() {
        batuPlayer.style.backgroundColor = '#9C835F'
    }

    function kertasMouseenter() {
        kertasPlayer.style.backgroundColor = '#C4C4C4'
    }

    function kertasMouseleave() {
        kertasPlayer.style.backgroundColor = '#9C835F'
    }

    function guntingMouseenter() {
        guntingPlayer.style.backgroundColor = '#C4C4C4'
    }

    function guntingMouseleave() {
        guntingPlayer.style.backgroundColor = '#9C835F'
    }
    
    const clickRemover = () => {
        batuPlayer.removeEventListener("click", batuClick)
        kertasPlayer.removeEventListener("click", kertasClick)
        guntingPlayer.removeEventListener("click", guntingClick)  
    }

    const hoverRemover = () => {
        batuPlayer.removeEventListener("mouseenter", batuMouseenter)
        batuPlayer.removeEventListener("mouseleave", batuMouseleave)
        kertasPlayer.removeEventListener("mouseenter", kertasMouseenter)
        kertasPlayer.removeEventListener("mouseleave", kertasMouseleave)
        guntingPlayer.removeEventListener("mouseenter", guntingMouseenter)
        guntingPlayer.removeEventListener("mouseleave", guntingMouseleave)
    }

}

playerClickAndHover()

let com = ''

const comRandom = () =>{
    const batuCom = document.getElementById('batu-com')
    const kertasCom = document.getElementById('kertas-com')
    const guntingCom = document.getElementById('gunting-com')
    const randomNumber = Math.floor(Math.random()*3) 

    if(randomNumber == 0) {
        guntingCom.style.backgroundColor = '#C4C4C4'
        com = 'gunting'
    } else if (randomNumber == 1) {
        batuCom.style.backgroundColor = '#C4C4C4'
        com = 'batu'
    } else {
        kertasCom.style.backgroundColor = '#C4C4C4'
        com = 'kertas'
    }
}

const hasil = () => {
    const vsText = document.getElementById('vs-text')
    const resultVs = document.getElementById('result-vs')
    const result = document.createElement('div')
    result.classList.add('rectangle')
    const resultText = document.createElement('h1')
    resultText.classList.add("result-text")
    resultVs.append(result)
    result.append(resultText)
    vsText.remove()

    if (com == player){
        resultText.innerText = 'DRAW'
    } else if (com == 'gunting' && player == 'batu'){
        resultText.innerText = 'PLAYER 1 WIN'
    } else if (com == 'gunting' && player == 'kertas'){
        resultText.innerText = 'COM WIN'
    } else if (com == 'batu' && player == 'kertas'){
        resultText.innerText = 'PLAYER 1 WIN'
    } else if (com == 'batu' && player == 'guting'){
        resultText.innerText = 'COM WIN'
    } else if (com == 'kertas' && player == 'gunting'){
        resultText.innerText = 'PLAYER 1 WIN'
    } else {
        resultText.innerText = 'COM WIN'
    }
}

