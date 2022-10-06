import { API } from "./util";

export default class InfiniteTweets {
  constructor(rootEl) {
    // Your code here
    this.rootEl = rootEl;
    this.button = document.querySelector(".fetch-tweets-btn")
    this.ul = document.querySelector("ul.tweets");
    this.button.addEventListener("click", this.handleFetchTweets.bind(this));
  }

  async handleFetchTweets(event) {
    // Your code here
    event.preventDefault();
    let response = await API.fetchTweets({type: this.rootEl.dataset.type, offset: this.ul.childElementCount})
    console.log(response)
    // Remove fetch tweets button if you've run out of tweets to fetch
    if (false /* REPLACE */) {
      const noMoreTweets = document.createElement("p");
      noMoreTweets.innerText = "No more tweets!";
      // Your code here
    }
  }

  appendTweet(tweetData) {
    const tweetEl = this.createTweet(tweetData);
    // Your code here
  }

  createTweet(tweetData) {
    const li = document.createElement("li");
    // Your code here
    return li;
  }

  // Helper methods...
}