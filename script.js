let numberOne = ""
let operator = ""
let numberTwo = ""


function addition(n,n) {
    return n + n
}

function subtraction(s,s) {
    return s - s
}

function division(d,d) {
    return d / d
}

function multiplication(m,m) {
    return m * m
}

function registerNumber(num) {
    if (operator == " ") {
        numberOne = parseInt(num)
    } else { numberTwo = parseInt(num) }

    document.querySelector('.mini-screen').value += parseInt(num)
    }

function registerOperation(x) {
    operator = x
    document.querySelector('.mini-screen').value += x
   
}

function result(r) {
    document.querySelector('.mini-screen').value += r
    if (operator == '+') {
        document.querySelector('.mini-screen').value += (addition(numberOne,numberTwo))
    } else if (operator == '-') {
        document.querySelector('.mini-screen').value += (subtraction(numberOne,numberTwo))
    } else if (operator == '/') {
        document.querySelector('.mini-screen').value += (division(numberOne,numberTwo))
    } else { document.querySelector('.mini-screen').value += (multiplication(numberOne,numberTwo)) }

  

}






