// variables
const tweetList = document.getElementById('tweet-list');


// Event Listners

eventListners(); // function callback

function eventListners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // documnet / same like jquery document.ready
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);

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
    li.textContent = tweet; // tweet = textarea id

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);

    // add to local storage
    addTweetLocalStorage(tweet); // getting data from tweet = (textarea)

}

// removes the tweet from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}

// ============ new ============

// Adds the tweets into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // add the tweets into the array
    tweets.push(tweet);

    // convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // get the values, if null is returned than we create an empty array

    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

// prints local storage tweets on load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    // console.log(tweets);

    // loop through storage and than print the values
    tweets.forEach(function (tweet) {
        
        // create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet; // tweet = textarea id

        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Add to the list
        tweetList.appendChild(li);
    });


}