document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();


    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let operation = document.getElementById('operation').value;


    let result;
    if (operation === 'addition') {
        result = firstNumber + secondNumber;
    } else if (operation === 'subtraction') {
        result = firstNumber - secondNumber;
    } else if (operation === 'multiplication') {
        result = firstNumber * secondNumber;
    } else if (operation === 'division') {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Error: Division by zero!</div>';
            return;
        }
    } else {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Error: Please select an operation!</div>';
        return;
    }

    document.getElementById('result').innerHTML = `<div class="alert alert-success" role="alert">Result: ${result}</div>`;
});
