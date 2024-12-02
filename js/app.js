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
        this.currOperText = currOperText
        this.clear()
    }

    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()

        // console.log(number, this.currOperand)
    }

    // if there is no number the operation buttons are disabled

    chooseOperation(operation) {
        if (this.currOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }

        this.operation = operation
        // pass this.currOperand to this.prevOperand
        this.prevOperand = this.currOperand
        this.currOperand = ''
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
        this.currOperand = computation 
        this.operation = undefined
        this.prevOperand = ''
    }

    // 3 delete
    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()

        const integerDigits = parseFloat(stringNumber.split('.' [0]))
        const decimalDigits = stringNumber.split('.'[1])

        let integerDisplay

        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maxmimumFractionDigits:0
            })
        }
        return decimalDigits
    }

    // 5 updata display
    updateDisplay() {
        this.currOperText.innerText  = this.getDisplayNumber(this.currOperand)

            if (this.operation != null) {
                this.prevOperText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
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

const prevOperText = document.querySelector('[data-prev-operand]')
const currOperText = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(prevOperText, currOperText)

//3 addEvent
numBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        // console.log(button.innerText)
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        // console.log(button.innerText)
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener('click', ()=> {
    // console.log(equalBtn.innerText)
    calculator.compute()
    calculator.updateDisplay()
})

allClearBtn.addEventListener('click', ()=> {
    // console.log(allClearBtn.innerText)
    calculator.clear()
    calculator.updateDisplay()
})

delBtn.addEventListener('click', ()=> {
    // console.log(delBtn.innerText)
    calculator.delete()
    calculator.updateDisplay()
})

