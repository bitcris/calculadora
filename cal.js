


function insert(num) {
  var numero =  document.querySelector('.display').textContent
  document.querySelector('.display').textContent = numero + num

}
function clean() {
    document.querySelector('.display').textContent = ""
}
function back() {
    var display = document.querySelector('.display').textContent
    document.querySelector('.display').textContent = display.substring(0, display.length -1)
}
function calcular() {
    var display = document.querySelector('.display').textContent
    if(display) {
        document.querySelector('.display').textContent = eval(display)
    }
}

