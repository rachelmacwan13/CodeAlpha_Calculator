const display = document.getElementById('display');
function append(val) {
  if (display.textContent === 'Syntax Error') display.textContent = '';
  display.textContent += val;
}

function clearDisplay() {
  display.textContent = '';
}

function calculate() {
  try {
    const result = eval(display.textContent);
    display.textContent = result;
  } catch {
    display.textContent = 'Syntax Error';
  }
}

function turnOff() {
  display.textContent = '';
  alert("Calculator turned off!");
}

document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
