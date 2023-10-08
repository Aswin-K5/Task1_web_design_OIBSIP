let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any potential errors (e.g., division by zero)
                input.value = 'Error';
                string = '';
            }
        } else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonValue;
            input.value = string;
        }
    })
});
