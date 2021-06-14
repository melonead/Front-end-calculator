
let digits = document.querySelectorAll('.numbers');

let screen = document.getElementById('screen');

let reset = document.getElementById('reset');

let del = document.getElementById('delete');

let fowardSlash = document.getElementById('fowardSlash');

const add = document.getElementById('add');

const minus = document.getElementById('minus');

let buttons = document.querySelectorAll('.button')

function numbersClick() {
    digits.forEach((numbers) => {
        numbers.addEventListener('click', (e) => {
            screen.textContent = e.target.textContent
           
    })
        
    })
   
}

function things() {
    let display = screen.textContent;
   
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
           
            display = display + button.textContent
            console.log(display)
            screen.textContent = screen.textContent.concat(button.textContent)
            let b = arranger(display)
            let c = checker(b)
            console.log(c)
            if(e.target === document.querySelector('#equal')) {
                screen.textContent = c
                display = c
                                                                                      
            }

            console.log(multiplication(display))

          
            reset.addEventListener('click', () => {
                screen.textContent = '';
                display = ''
                
            })
            

            

        })
    })
   
}


things()

function addSpace() {
    for(let button of buttons) {

        if (button.textContent === '-' || button.textContent === '+' || button.textContent === '*' || button.textContent === '/') {
            button.textContent =  ' ' + button.textContent + ' ';
        }

    }
}

addSpace()

//this deletes whatever is on ther screen one at a time from the right end
function deleteNumber() {
    return screen.textContent = screen.textContent.slice( 0, screen.textContent.length - 1);
    }
    
    del.addEventListener('click', deleteNumber)

function arranger(stringNumbers) {
     //stringArray.map((stringNumbers) => { 
           let numbers;
           let moreNumbers;
           let newNumbers = stringNumbers.split(' ')
           for(let i = 0; i < newNumbers.length; i++) {
               if(newNumbers[i] === '-') {
                   newNumbers[i + 1] = '-'.concat(newNumbers[i + 1])
               }

               if(newNumbers[i] === '+') {
                newNumbers[i + 1] = '+'.concat(newNumbers[i + 1])
            }

           }
           numbers = newNumbers.filter((string) =>   string !== '-')
          
           moreNumbers = numbers.filter((string) =>   string !== '+')
          
    //})
   return moreNumbers;
}



function checker(numbers) { 
    let newNumbs = []
    let total = [];
for(let numb of numbers ) {
    if(6) {
        newNumbs.push(parseInt(numb))
         total = newNumbs.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
   
}
return total;
}


function multiplication(array) {
   let split = array.split(' ')
   let numbers = []
   let result
   split.forEach((string) => {
       if(string != '*') {
           numbers.push(parseInt(string))
           result = numbers.reduce((accumulator, currentValue) => {
                return accumulator * currentValue
           })
           console.log(numbers)
           console.log(result)
       }
   })
}


console.log(multiplication('37 * 64 * 36 * 39'))

//this function does not work as expected
function division(array) {
    let split = array.split(' ')
    let numbers = []
    let result
    split.forEach((string) => {
        if(string != '/') {
            numbers.push(parseInt(string))
            result = numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
            console.log(result)
        }
    })
}


















