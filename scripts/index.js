import { posts } from "./posts.js";

console.log(posts);

const renderingContainer = document.getElementById("rendering-container");

document.addEventListener("DOMContentLoaded", render);

function render() {
  iconInteraction();
  renderingContainer.innerHTML = posts
    .map((post) => {
      return `
      <div id="${post.id}" class="post">
        <div class="post-title">
          <div class="wrapper">
            <img
              src="${post.avatar}"
              alt="${post.user}-avatar-picture"
              class="avatar profile-picture"
            />
          </div>
          <div class="post-info">
            <h2 class="bold big-text">${post.name}</h2>
            <p class="small-text">${post.location}</p>
          </div>
        </div>
        <div class="post-img-container">
          <img
            src="${post.post}"
            alt="Van Gogh Self-Portrait(1889)"
            class="post-img"
          />
        </div>
        <div class="post-socials-shares">
          <div class="social-icons">
            <i
              class="icons fa-regular fa-heart"
              role="button"
              tabindex="0"
              aria-label="Like post"
            ></i>

            <i
              class="icons fa-regular fa-comment fa-rotate-270"
              role="button"
              tabindex="0"
              aria-label="Comment post"
            ></i>
            <i
              class="icons fa-regular fa-paper-plane fa-rotate-by"
              style="--fa-rotate-angle: 20deg"
              role="button"
              tabindex="0"
              aria-label="Share post"
            ></i>
          </div>
          <div class="likes bold big-text">
            <p class="small-text">${post.likes} likes</p>
          </div>
          <div class="comments">
            <p class="small-text">
              <span class="comment-author bold big-text">${post.username}</span> ${post.comment}</p>
          </div>
        </div>
    </div>
    `;
    })
    .join("");
}

function iconInteraction() {
  renderingContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-heart")) {
      event.target.classList.toggle("isLiked");
    }
    if (event.target.classList.contains("fa-comment")) {
      event.target.classList.toggle("isCommented");
    }
    if (event.target.classList.contains("fa-paper-plane")) {
      event.target.classList.toggle("isShared");
    }
  });
}
