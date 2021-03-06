// variables
const tweetList = document.getElementById('tweet-list');


// Event Listners

eventListners(); // function callback

function eventListners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

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

    // add to local storage
    addTweetLocalStorage(tweet);

}

// removes the tweet from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}

// Adds the tweet into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    
    // add the tweet into the array
    tweets.push(tweet);

    //convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // get the values, if null is returned than we create an empty array
    if( tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}