const botaoGerar = document.getElementById('gerar')
const botaoCopiar = document.getElementById('copiar')
const tamanho = document.getElementById('tamanho')
const LetraMaiuscula = document.getElementById('LetraMaiuscula')
const letraMinuscula = document.getElementById('letraMinuscula')
const numeros = document.getElementById('numeros')
const simbolos = document.getElementById('simbolos')
const resultado = document.getElementById('resultado')
const copiado = document.getElementById('mensagem')

function pegarMin(){
    const charLower = "abcdefghijklmnopqrstuvxwyz"
    return charLower[Math.floor(Math.random() * charLower.length)]
}

function pegarMai(){
    const charUpper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
    return charUpper[Math.floor(Math.random() * charUpper.length)]
}

function pegarNum(){
    const num = "0123456789"
    return num[Math.floor(Math.random() * num.length)]
}

function pegarSim(){
    const symbols = '!@#$%¨&*()_+-=[]{}~:;.,?/|\\'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const objetao = {
    letrao: pegarMin,
    letrinha: pegarMai,
    numinho: pegarNum,
    simbinho: pegarSim,            
}

botaoGerar.addEventListener("click", ()=>{
    const haslength = tamanho.value
    const hasLower = letraMinuscula.checked
    const hasUpper = LetraMaiuscula.checked
    const hasNumber = numeros.checked
    const hasSymbol = simbolos.checked

    resultado.innerText = gerarSenha(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        haslength
    )
})

function gerarSenha(letrao, letrinha, numinho, simbinho, tamanho){
    gSenha = ''
    objetoArr = [{letrao}, {letrinha}, {numinho}, {simbinho}].filter((item)=>{
        return Object.values(item)[0]
    })
    for (let i = 0; i<tamanho; i++){
        objetoArr.forEach((type)=>{
            const teste = Object.keys(type)[0]
            gSenha += objetao[teste]()
        })
    }
    resultado.value = gSenha.slice(0,tamanho)
}

botaoCopiar.addEventListener('click', function(){
    navigator.clipboard.writeText(resultado.value)
    copiado.innerHTML =  'copiado'
    copiado.style.display =  'block'//aparecendo a mensagem
    setTimeout(function(){//funcao que some a mensagem após 2s dela aparecer
        copiado.style.display = "none";//sumindo
    },2000)
})

