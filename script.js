let numberOne = ""
let operator = ""
let numberTwo = ""


function add(n1,n2) {
    return n1 + n2
}

function subtract(s1,s2) {
    return s1 - s2
}

function divide(d1,d2) {
    return d1 / d2
}

function multiply(m1,m2) {
    return m1 * m2
}

function registerNumber(num) {
    if (operator == "") {
        numberOne += num
    } else { numberTwo += num }

    document.querySelector('.mini-screen').value += parseInt(num)
    
    console.log(num)
    }

function registerOperation(x) {
    operator = x
    document.querySelector('.mini-screen').value += x
    console.log(x);
   
}

function result(r) {
    let minScreen = document.querySelector('.mini-screen')
        minScreen.value += r
    const n1 = parseInt(numberOne)
    const n2 = parseInt(numberTwo)

    if (operator == '+') {
        minScreen.value = (add(n1,n2))
    } else if (operator == '-') {
        minScreen.value = (subtract(n1,n2))
    } else if (operator == '/') {
        minScreen.value = (divide(n1,n2))
    } else {minScreen.value = (multiply(n1,n2))}
    console.log(minScreen)

}

function clean() {
    let dell = document.querySelector('.mini-screen')
    dell.value = ''
    
    let numberZero = registerNumber 
    numberZero = ''
    let operatorZero = registerOperation 
    operatorZero = ''
    let resultZero = result 
    resultZero = ''
}





