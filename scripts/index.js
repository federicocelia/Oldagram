import { posts } from "./posts.js";

console.log(posts);

const renderingContainer = document.getElementById("rendering-container");

document.addEventListener("DOMContentLoaded", () => {
  render();
  iconInteraction();
});

function render() {
  renderingContainer.innerHTML = posts
    .map((post) => {
      return `
      <div data-post-id="${post.id}" class="post">
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
            <button
            type="button"
            class="icon-button"
            aria-label="Like post"
            aria-pressed="${post.isLiked}"
            >
            <i
              class="icons fa-regular fa-heart ${post.isLiked ? "isLiked" : ""}"
            ></i>
            </button>
            <button
            type="button"
            class="icon-button"
            aria-label="Comment post"
            aria-pressed="${post.isCommented}"
            >
            <i
            class="icons fa-regular fa-comment ${post.isCommented ? "isCommented" : ""}"
            ></i>
            </button>
            <button
            type="button"
            class="icon-button"
            aria-label="Share post"
            aria-pressed="${post.isShared}"
            >
            <i
              class="icons fa-regular fa-paper-plane fa-rotate-by ${post.isShared ? "isShared" : ""}"
              style="--fa-rotate-angle: 20deg"
            ></i>
            </button>
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
    const postEl = event.target.closest(".post");
    if (!postEl) return;

    const postId = postEl.dataset.postId;
    const post = posts.find((p) => p.id == postId);

    if (!post) return;

    if (event.target.closest(".fa-heart")) {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
      render();
    } else if (event.target.closest(".fa-comment")) {
      post.isCommented = !post.isCommented;
      render();
    } else if (event.target.closest(".fa-paper-plane")) {
      post.isShared = !post.isShared;
      render();
    }
  });
}
