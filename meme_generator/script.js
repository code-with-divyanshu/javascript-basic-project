const btn = document.querySelector(".btn");
const memeTitle = document.querySelector(".meme-title");
const img = document.querySelector("img");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
  img.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author.toUpperCase();
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes").then((respose) =>
    respose.json().then((data) => {
      //   console.log(data.title);
      updateDetails(data.url, data.title, data.author);
    })
  );
};

btn.addEventListener("click", generateMeme);

generateMeme();
