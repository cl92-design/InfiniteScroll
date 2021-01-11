const container = document.getElementById("img-container");

// Unsplash Simple API

const apiUrl = `https://source.unsplash.com/random/`;

// Load a image and append to the image-container div

function randNum() {
  return Math.floor(Math.random() * 1000000);
}

function loadImages() {
  const img = document.createElement("img");
  img.src = `${apiUrl}${randNum()}`;
  container.appendChild(img);
}

// Listen for a scroll event and load more images if the user has reached the bottom of the window

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});

//On Page Load, load 10 initial images
for (i = 0; i < 10; i++) {
  loadImages();
}
