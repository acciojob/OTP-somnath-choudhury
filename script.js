//your JS code here. If required.
const inputs = Array.from(document.querySelectorAll('.code-container input'));
const codeContainer = document.querySelector('.code-container')

codeContainer.addEventListener('keydown', (e) => {
  const currentInput = e.target;
  const currentIndex = inputs.indexOf(currentInput);

  if (e.key === 'Backspace' && currentIndex > 0) {
    e.preventDefault()
    currentInput.value = '';
    inputs[currentIndex - 1].focus();
  }
})

codeContainer.addEventListener('input', (e) => {
  const currentInput = e.target;
  const currentIndex = inputs.indexOf(currentInput);

  if (currentInput.value.length === currentInput.maxLength && currentIndex < inputs.length -1 ) {
    inputs[currentIndex + 1].focus()
  }
})