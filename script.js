const inputs = Array.from(document.querySelectorAll('.code-container input'));

        // Listen for keyboard events on the entire container to handle both typing and backspace.
        const codeContainer = document.querySelector('.code-container');

        // Set initial focus to the first input field when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            inputs[0].focus();
        });

        codeContainer.addEventListener('keydown', (e) => {
            const currentInput = e.target;
            const currentIndex = inputs.indexOf(currentInput);

            // Handle Backspace
            if (e.key === 'Backspace' && currentIndex > 0) {
                // Prevent the default browser behavior (e.g., navigating back)
                e.preventDefault();
                // Clear the current input field's value
                currentInput.value = '';
                // Move focus to the previous input field
                inputs[currentIndex - 1].focus();
            }
        });

        codeContainer.addEventListener('input', (e) => {
            const currentInput = e.target;
            const currentIndex = inputs.indexOf(currentInput);

            // Handle Typing Forward
            // If the current input has a value and it's not the last input,
            // move the focus to the next field.
            if (currentInput.value.length === currentInput.maxLength && currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
            }
        });