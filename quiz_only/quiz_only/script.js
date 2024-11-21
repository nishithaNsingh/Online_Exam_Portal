// Function to dynamically add more questions
function addQuestion() {
    const container = document.getElementById('questions-container');
    const questionCount = container.getElementsByClassName('question').length + 1;
  
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
      <label for="question_${questionCount}">Question ${questionCount}:</label>
      <input type="text" name="questions[${questionCount - 1}][question]" required>
      
      <label for="option_${questionCount}_1">Option 1:</label>
      <input type="text" name="questions[${questionCount - 1}][options][]" required>
      
      <label for="option_${questionCount}_2">Option 2:</label>
      <input type="text" name="questions[${questionCount - 1}][options][]" required>
      
      <label for="option_${questionCount}_3">Option 3:</label>
      <input type="text" name="questions[${questionCount - 1}][options][]" required>
      
      <label for="option_${questionCount}_4">Option 4:</label>
      <input type="text" name="questions[${questionCount - 1}][options][]" required>
      
      <label for="correct_option_${questionCount}">Correct Option:</label>
      <input type="number" name="questions[${questionCount - 1}][correct]" min="1" max="4" required>
    `;
    container.appendChild(questionDiv);
  }
  