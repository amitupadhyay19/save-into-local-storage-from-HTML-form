// variables
const tweetList = document.getElementById('tweet-list');


// Event Listners

eventListners(); // function callback

function eventListners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}


// Functions

function newTweet(e) {
    e.preventDefault();

    // read the text value
    const tweet = document.getElementById('tweet').value;
    // console.log(tweet);

    // create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    
    // create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    
    // Add the remove button to each tweet
    li.appendChild(removeBtn);
    
    // Add to the list
    tweetList.appendChild(li);

}