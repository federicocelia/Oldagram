# Oldagram

Oldagram Instagram-style feed built with **HTML, CSS, and JavaScript**.  
The project focuses on clean layout, DOM-driven rendering, and accessibility-first interactions.

## 📸 Preview

![Oldagram demo](./Oldagram.gif)

## 🛠 Tech Stack

- HTML5
- CSS3 (mobile-first, custom reset)
- Vanilla JavaScript (ES6+)
- Font Awesome (icons)

## Features

- Dynamic post rendering with JavaScript
- Like, comment, and share interactions
- Semantic and accessible icon buttons (`<button>` + `aria-pressed`)
- Font Awesome icons
- Responsive, mobile-first layout
- Clean CSS structure and reset

## Project Structure

```
.
├── index.html
├── index.css
├── scripts/
│   ├── index.js
│   └── posts.js
├── images/
│   ├── favicon/
│   └── user-avatar.jpg
└── README.md
```

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/oldagram.git
   ```

2. Open `index.html` in your browser.

No build tools or dependencies are required.

## Notes

- This project is intended for learning and front-end practice
- State is managed in-memory (no backend)
- Inspired by classic social media feed layouts

## Accessibility

Accessibility improvements are a core goal of this project:

- Interactive icons use semantic `<button>` elements
- Toggle actions expose state via `aria-pressed`
- Images include descriptive `alt` attributes
- Visually hidden heading for screen readers

## 🎯 Learning Goals

This project was built to practice and demonstrate:

- DOM manipulation without frameworks
- Component-style rendering with plain JavaScript
- Accessibility-first UI design
- Clean, readable CSS architecture
- State handling in a front-end–only application

## ⚠️ Current Limitations

- No backend or persistent storage
- State resets on page refresh
- No authentication or authorization

## 🚀 Future Improvements

The following features are planned to improve interactivity and user experience in Oldagram:

- Add comments to posts
- Create new posts (image and text)
- Infinite scroll or “load more” posts
- Sort feed (newest, most liked)
- View single post details
- Basic user accounts
- User profiles (avatar, bio, posts)
- Follow / unfollow users
- Save / bookmark posts
- Edit or delete own posts and comments
- Search posts or users
- Hashtags for posts
- Dark mode toggle

## 🤝 Contributing

This project is for learning purposes, but suggestions and improvements are welcome.
``

## 👤 Author

Created by **Federico Celia** - https://www.linkedin.com/in/federico-celia-13b3851a8/

FullStack Web developer in progress — passionate about clean UI and functional JavaScript.

## 📄 License

This project is licensed under the
**Creative Commons Attribution–NonCommercial 4.0 International (CC BY‑NC 4.0)** license.

You are free to:

✔ Use the code  
✔ Modify it  
✔ Share it

…but **only for personal and non‑commercial purposes**.  
Commercial use is **not permitted**.

For full legal details, see the official license:  
🔗 https://creativecommons.org/licenses/by-nc/4.0/
