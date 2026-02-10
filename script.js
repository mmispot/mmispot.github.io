
  let index = 0;
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateSlide();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlide();
  }

  const posts = [
    {
        title: "C SWORD - Game Release!",
        date: "27-01-2026",
        content: "Have you always wanted to see inside the world of your computer while programming? Now you can! Navigate to game release with random events, damaging bugs in your computer with code snippets, and try to win on your first try. Click below to play!",
        video: `<iframe frameborder="0" src="https://itch.io/embed/4230500" width="552" height="167" allowfullscreen></iframe>`
    },
    {
        title: "CAFE CATASTROPHY - Game Release!",
        date: "20-01-2026",
        content: "Cafe Catastrophy, a group project is now out! Try to fulfill orders while chaotic cats try to steal your food, get in your way or even stun you! Will you be able to beat this new local multiplayer game?",
        video: `<iframe frameborder="0" src="https://itch.io/embed/4089395" width="552" height="167" allowfullscreen></iframe>`
    },
];

const container = document.getElementById("latest-post");
container.innerHTML = ""; // clear existing content

posts.forEach(post => {
    container.innerHTML += `
        <div class="post">
            <h4>${post.title}</h4>
            <small>${post.date}</small>
            ${post.video ? post.video : ""}
            <p>${post.content}</p>
        </div>
    `;
});
