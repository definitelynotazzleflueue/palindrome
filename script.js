//Fetch HTML elements with their IDsw
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

//function for input and checking the word inputted by the user
const checkForPalindrome = input => {
  const originalInput = input; // Stores the input for displaying in the front end
  
  //if the input is empty, it will prompt that the user should input a value
  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Removes any existing result message before displaying a new one.
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase(); //Strips out non-alphanumeric characters using regex and converts the string to lowercase to ensure the comparison is case-insensitive.
  
  //Compares the cleaned string to its reversed version. Then, constructs a message indicating whether it's a palindrome.
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p'); //Creates a new <p> element. 
  pTag.className = 'user-input'; 
  pTag.innerText = resultMsg; //Adds the result message.
  resultDiv.appendChild(pTag); //Appends it to the result container (resultDiv).

  // Ensures the result is visible by removing the "hidden" class, in case it was hidden initially.
  resultDiv.classList.remove('hidden');
};

//When the user clicks the button, the function checkForPalindrome is called with the input value.
checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = ''; //Clears the input field afterward.
});

//Adds keyboard support: if the user presses "Enter" while typing, it triggers the palindrome check.
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = ''; //Clears the input field afterward.
  }
});
