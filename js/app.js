/**
 * WHAT DO WE WANT IT TO DO???
 * define operations
 * clear
 * delete (single number)
 * append number
 * choose operation
 * compute
 * update display
 */

class Calculator {
    // 1 constrictor
    constructor(prevOperText, currOperText) {
        this.prevOperText = prevOperText
        this.currOperText =  currOperText
        this.clear()
    }

    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()

        // console.log(number, this.currOperand)
    }

    clear() {
        this.prevOperand = ''
        this.currOperand = ''
        this.operation = undefined
    }

    //7 compute
    compute() {
        let computation

        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currOperand)

        if (isNaN(prev) || isNaN(current)) return

        switch(this.operation) {
            case '+':
                computation = prev + current
                break
                case '-':
                    computation = prev - current
                    break
                    case '*': 
                    computation = prev * current
                    break
                    case '/': 
                    computation = prev / current
                    break
                    default:
                        return

        }
    }

    // 3 delete
    delete() {
        this.currOperand = this.currOperand.toString().slice(0,-1)
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()

        const intergerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.'[1])

        let interger

        if (isNaN(intergerDigits)) {
            intergerDisplay = ''
        } else {
            intergerDisplay = interger.toLocaleString('en', {
                maxiumFractionDigits:0
            })
        }
        return decimalDigits
    }

    // 5 updata display
    updataDisplay() {
        this.currOperText.innerText  = this.getDisplayNumber(this.currOperand)

            if (this.operation != null) {
                this.prevOperText.innerText `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
            } else {
                this.prevOperText.innerText = ''
            }
        
    }
}

// 2 set constants to access button
// encolse attribute-value pairs in brackets
const numBtn = document.querySelectorAll('[data-number]')
// console.log(numBtn)
const operBtn = document.querySelectorAll(' [data-operation]')
const equalBtn = document.querySelector('[data-equals]')
const delBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')

const prevOperText = document.querySelector('[data-prv-operand]')
const currOperText = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(prevOperText, currOperText)

//3 addEvent
numBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        // console.log(button.innerText)
        calculator.appendNumber(button.innerText)
    })
})

operBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        console.log(button.innerText)
    })
})

equalBtn.addEventListener('click', ()=> {
    console.log(equalBtn.innerText)
})

allClearBtn.addEventListener('click', ()=> {
    console.log(allClearBtn.innerText)
})

delBtn.addEventListener('click', ()=> {
    console.log(delBtn.innerText)
})

