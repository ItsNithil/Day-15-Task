let currentInput = '';
    let currentOperation = '';
    let memoryValue = localStorage.getItem('calculatorMemory') || 0;

    function handleButtonClick(value) {
      if (!isNaN(value) || value === '.') {
        currentInput += value;
      } else {
        alert("Only numbers are allowed");
      }
      updateResult();
    }

    function handleOperation(operation) {
      currentOperation = operation;
      currentInput += ' ' + operation + ' ';
      updateResult();
    }

    function calculateResult() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateResult();
      } catch (error) {
        alert("Invalid expression");
        clearCalculator();
      }
    }

    function updateResult() {
      document.getElementById('result').innerText = currentInput;
    }

    function clearCalculator() {
      currentInput = '';
      currentOperation = '';
      updateResult();
    }

    function showMemory() {
      alert(`Memory Value: ${memoryValue}`);
    }

    function addToMemory() {
      memoryValue += parseFloat(currentInput) || 0;
      localStorage.setItem('calculatorMemory', memoryValue);
    }

    function subtractFromMemory() {
      memoryValue -= parseFloat(currentInput) || 0;
      localStorage.setItem('calculatorMemory', memoryValue);
    }

    function clearMemory() {
      memoryValue = 0;
      localStorage.setItem('calculatorMemory', memoryValue);
    }