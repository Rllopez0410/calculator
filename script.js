let a = "";
let b = "";
let answer = "";
let oppPressed = false;
let operator = "";

const numbtns = document.querySelectorAll('.num-btn');
const oppbtns = document.querySelectorAll('.opp-btn');
const equalbtn = document.querySelector('.equal-btn');
const clear = document.querySelector('.clear-btn');
const output = document.querySelector('.result');
const input = document.querySelector('.input');
const dlt = document.querySelector('.delete-btn');

equalbtn.addEventListener('click', function() {
    output.textContent = operate(a, operator, b);
    answer = operate(a, operator, b);
    if (answer != "" || answer === 0) {
        a = answer;
        input.textContent = a;
        oppPressed = false;
        operator = "";
        b = "";
    }
});

clear.addEventListener('click', function() {
    if (a != "" || b != "" || operator != "" || oppPressed == true || answer != "") {
        a = "";
        b = "";
        operator = "";
        oppPressed = false;
        answer = "";
        input.textContent = "";
        output.textContent = "";
    }
});

dlt.addEventListener('click', function() {
    console.log('test')
    if (a != "" && operator == "" && oppPressed == false && b == "" && answer == "") {
       input.textContent = input.textContent.toString().slice(0,-1);
       a = a.toString().slice(0,-1);
       a = answer.toString().slice(0,-1);
    }

    if (a != "" && operator != "" && oppPressed == true && b == "" && answer == "") {
        input.textContent = input.textContent.toString().slice(0,-1);
        oppPressed = false;
        operator = operator.toString().slice(0,-1);
    }

    if (a != "" && operator != "" && oppPressed == true && b != "" && answer == "") {
       input.textContent = input.textContent.toString().slice(0,-1);
       b = b.toString().slice(0,-1);
    }
    
    if (a != "" && operator != "" && oppPressed == true && b != "" && answer == "") {
       input.textContent = input.textContent.toString().slice(0,-1);
       b = b.toString().slice(0,-1);
    }
   
});

numbtns.forEach(function Operand(element) {
    element.addEventListener('click', () => {
        if(!oppPressed) {
            a = a + element.textContent;
            input.textContent = a;
        } else {
            b = b + element.textContent;
            input.textContent += element.textContent;
        }
    });
});

oppbtns.forEach(function (element) {
    element.addEventListener('click', () => {
        if(!oppPressed && a != "") {
            operator = operator += element.textContent;
            oppPressed = true;
            input.textContent += operator;
        }
    })
});

//functions for different opereations.

const addition = function() {
    const num = [...arguments];

    return num.reduce((total, sum) => total + sum , 0);
}

const subtraction = function() {
    const num = [...arguments];

    return num.reduce((total, remaining) => total - remaining);
}

const multiplication = function() {
    const num = [...arguments];

    return num.reduce((total, multiple) => total * multiple, 1);
}


const division = function() {
    const num = [...arguments];
    // round answers with long decimals so that they don’t overflow the screen.
    return num.reduce((dividend, divisor) => Math.round(dividend / divisor * 1000)/ 1000);
}

//function that'll excute the operation according to the users operator of choice.

function operate(a, operator, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    switch (operator) {
        case '+':
            return addition(num1, num2);
       
        case '-':
            return subtraction(num1, num2);

        case 'x':
            return multiplication(num1, num2);

        case '÷':
            if (b == 0) return answer = "Try again buddy";
            else return division(num1, num2);
        
        default:
            if (a != "") {
                return a * 1;
            } else {
                return ""
            }
            
    }

}
