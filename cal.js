

//função (insert) pegando valores dos botoes digitados com os seus respectivos parâmetros 
  var numero =  document.querySelector('.display').textContent
  document.querySelector('.display').textContent = numero + num

}

//função (clean) para limpar todos os valores do display da calculadora chamado pelo botao CLEAN
function clean() {
    document.querySelector('.display').textContent = ""
}

//função (back) para limpar os valores decrecentemente, chamada pelo botão BACK
function back() {
    var display = document.querySelector('.display').textContent
    document.querySelector('.display').textContent = display.substring(0, display.length -1)
}

//Função (calcular) para fazer o calculo dos valores no display da calculadora pelo método "eval"
function calcular() {
    var display = document.querySelector('.display').textContent
    if(display) {
        document.querySelector('.display').textContent = eval(display)
    }
}

