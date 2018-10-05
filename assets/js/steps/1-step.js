// variables



// Event Listners

eventListners(); // function callback

function eventListners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}


// Functions

function newTweet(e) {
    e.preventDefault();

    console.log('Form Submitted');
}