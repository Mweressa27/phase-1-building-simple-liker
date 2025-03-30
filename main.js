// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// This is the function that mimics a server call.
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    // Simulate a server response after a random delay
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;  // 80% chance of success
      if (isSuccess) {
        resolve("Success");
      } else {
        reject("Failed to communicate with the server.");
      }
    }, 300);
  });
}

// Get all heart elements and the error modal
const hearts = document.querySelectorAll(".like-glyph");
const errorModal = document.getElementById("modal");
const errorMessage = document.getElementById("modal-message");

// Iterate through each heart to add event listeners
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // If the heart is empty
    if (heart.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          // Success: Change to full heart
          heart.textContent = FULL_HEART; // Update the text to the full heart
          heart.classList.add("activated-heart"); // Make it red
        })
        .catch(error => {
          // Failure: Show the error modal
          errorModal.classList.remove("hidden");
          errorMessage.textContent = error;

          // Hide the error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    } else {
      // If the heart is full, change it back to empty
      heart.textContent = EMPTY_HEART; // Update the text to the empty heart
      heart.classList.remove("activated-heart"); // Remove the red color
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
