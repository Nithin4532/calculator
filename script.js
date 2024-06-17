let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '=') {
            if (string.startsWith('√')) {
                
                var number = parseFloat(string.substring(1));
                if (!isNaN(number)) {
                    result = Math.sqrt(number);
                    input.value = result;
                } else {
                    input.value = 'Invalid input';
                }
            } else {
                try {
                   
                    string = eval(string);
input.value = string;
                } catch (error) {
                    input.value = 'Error';
                    console.error('Evaluation error:', error);
                }
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'χ2'){
            number = string;
            string = Math.pow(string,2)
            input.value = `${number}² = ${string}`
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        
       
        
    })
    
    
})
