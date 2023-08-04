// JavaScript (JS)

let input = document.getElementById('value');
let output = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (ev) =>{
        // Result 
        if(ev.target.innerHTML == '='){
            str = eval(str);
            output.value = str;
        }
        //percentage
        else if(ev.target.innerHTML == '%'){
            str = parseFloat(input.value) / 100;
            output.value = str;
        }
        //sign
        else if(ev.target.innerHTML == '+/-'){
            str = parseFloat(input.value) * -1;
            input.value = str;
            output.value = str;
        }
        //square root
        else if (ev.target.innerHTML == 'sqrt') {
            str = Math.sqrt(parseFloat(input.value));
            output.value = str;
          }
          //log
          else if (ev.target.innerHTML == 'log') {
            str = Math.log10(parseFloat(input.value));
            output.value = str;
          }
        // All Clear 
        else if(ev.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
            output.value = str;

        }
        //pi value
        else if(ev.target.innerHTML == 'pi'){
           str = input.value;
           output.value = str * 3.14159265359;
        }
        // Backspace
        else if(ev.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += ev.target.innerHTML;
            input.value = str;
        }
    })
})