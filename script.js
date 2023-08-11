let numberOne = ""
let operator = ""
let numberTwo = ""


function addition(n1,n2) {
    return n1 + n2
}

function subtraction(s1,s2) {
    return s1 - s2
}

function division(d1,d2) {
    return d1 / d2
}

function multiplication(m1,m2) {
    return m1 * m2
}

function registerNumber(num) {
    if (operator == "") {
        numberOne += num
    } else { numberTwo += num }

    document.querySelector('.mini-screen').value += parseInt(num)
    }

function registerOperation(x) {
    operator = x
    document.querySelector('.mini-screen').value += x
   
}

function result(r) {
    document.querySelector('.mini-screen').value += r
    const n1 = parseInt(numberOne)
    const n2 = parseInt(numberTwo)
    if (operator == '+') {
        document.querySelector('.mini-screen').value = (addition(n1,n2))
    } else if (operator == '-') {
        document.querySelector('.mini-screen').value = (subtraction(n1,n2))
    } else if (operator == '/') {
        document.querySelector('.mini-screen').value = (division(n1,n2))
    } else { document.querySelector('.mini-screen').value = (multiplication(n1,n2)) }

}






