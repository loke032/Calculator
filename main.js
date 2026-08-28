
const container = document.querySelector("#container")
const display = document.querySelector("#display")
const clearbtn = document.querySelector("#clear")

let digit1 = ""
let operator = ""
let digit2 = ""
let result = 0

clearbtn.addEventListener("click", () => {
    display.value = ""
    digit1 = ""
    operator = ""
    digit2 = ""
    result = ""
})

for (let i=1; i <= 16; i++) {
    const button = document.createElement("button")
    
    button.style.color = "white"
    button.style.backgroundColor = "dimGray"
    button.style.width = "119px"
    button.style.height = "70px"
    button.style.fontSize = "26px"
    button.style.borderRadius = "500px"
    button.style.margin = "3px"
    if (i === 1) {
        button.innerHTML = "7"
        button.id = "seven"
    }  else if (i === 2) {
        button.innerHTML = "8"
        button.id = "eigth"
    } else if (i === 3) {
        button.innerHTML = "9"
        button.id = "nine"
    } else if (i === 4) {
        button.innerHTML = "/"
        button.id = "/"
    } else if (i === 5) {
        button.innerHTML = "4"
        button.id = "four"
    } else if (i === 6) {
        button.innerHTML= "5"
        button.id = "five"
    } else if (i===7){
        button.innerHTML = "6"
        button.id = "six"
    } else if (i===8) {
        button.innerHTML = "*"
        button.id = "*"
    } else if (i === 9) {
        button.innerHTML= "1"
        button.id = "one"
    } else if ( i=== 10) {
        button.innerHTML="2"
        button.id="two"
    } else if (i===11) {
        button.innerHTML="3"
        button.id="three"
    } else if (i===12) {
        button.innerHTML="-"
        button.id="-"
    } else if (i===13) {
        button.innerHTML="0"
        button.id="zero"
    } else if (i==14) {
        button.innerHTML="."
        button.id="."
    }   else if (i===15) {
        button.innerHTML="="
        button.id="="
    } else if (i===16) {
        button.innerHTML="+"
        button.id="+"
    }
    button.addEventListener("click", () => {
        display.value += button.innerHTML
        if ((/\d/.test(button.innerHTML)|| button.innerHTML === ".") && button.innerHTML !== "=" && operator === "") {
            digit1 += button.innerHTML
        } else if ((/\d/.test(button.innerHTML)||button.innerHTML === ".") && button.innerHTML !== "=") {
            digit2 += button.innerHTML
        } else if (button.innerHTML !== "="){
            operator += button.innerHTML
        }
        console.log(`Digit1 = ${digit1}`)
        console.log(`Digit2 = ${digit2}`)
        console.log(`Operators = ${operator}`)
        console.log(`operator length=${operator.length}`)

        if (operator.length === 2 || button.innerHTML === "=") {
        console.log("Operating")
        let oper = ""
        oper = operator[0]
        if (button.innerHTML !== "=") {
            operator = operator.slice(1)
        } else {
            operator = ""
        }
        
        let a = digit1
        let b = digit2
        result = operate(oper, parseFloat(a), parseFloat(b))
        console.log(result)
        digit1 = `${result}`
        digit2 = ""
        }

        if (button.innerHTML === "=") {
            display.value = result
        }
    })
    container.appendChild(button)
}




function operate(operator, a, b) {
    if (operator === "+") {
        return a + b
    } else if (operator === "-") {
        return a - b
    } else if (operator === "*") {
        return a * b
    } else if (operator === "/") {
        return a / b
    }
}




