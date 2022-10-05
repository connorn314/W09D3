import { API, broadcast } from "./util";
import { followUser, unfollowUser } from "./util/api";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this))
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === 'followed'){
      this.unfollow();
    } else {
      this.follow();
    }
    console.log(this.followState)
  }

  async follow() {
    this.followState = "following"
    await followUser(this.toggleButton.dataset.userId)
    this.followState = "followed"
  }

  async unfollow() {
    this.followState = "unfollowing"
    await unfollowUser(this.toggleButton.dataset.userId)
    this.followState = "unfollowed"
  }

  render() {
    switch (this.followState) {
      case "followed":
        this.toggleButton.disabled = false
        this.toggleButton.innerText = "Unfollow!"
        break
      case "unfollowed":
        this.toggleButton.disabled = false
        this.toggleButton.innerText = "Follow!"
        break
      case "following":
        this.toggleButton.disabled = true
        this.toggleButton.innerText = "Following..."
        break
      case "unfollowing":
        this.toggleButton.disabled = true
        this.toggleButton.innerText = "Unfollowing..."
        break
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}