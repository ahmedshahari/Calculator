    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');

    let calculation = '';
    let result = '';

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.innerText;
            switch (keyValue) {
                case 'C':
                    calculation = '';
                    result = '';
                    display.innerText = '';
                    break;
                case '←':
                    calculation = calculation.slice(0, -1);
                    display.innerText = calculation;
                    break;
                case '=':
                    try {
                        result = eval(calculation);
                        display.innerText = result;
                        calculation = '';
                    } catch (error) {
                        display.innerText = 'Error';
                    }
                    break;
                case '%':
                    calculation += '/100';
                    display.innerText = calculation;
                    break;
                default:
                    calculation += keyValue;
                    display.innerText = calculation;
            }
        });
    });
