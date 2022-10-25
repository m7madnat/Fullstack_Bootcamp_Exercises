const btn = document.getElementById('btn');
const title = document.querySelector("h2");
const output = document.querySelector("p");

btn.addEventListener("click", () => {
    fetch("https://api.jokes.one/jod")
    .then((data) => data.json())
    .then((data) => {
        title.innerText = data.contents.jokes[0].joke.title;
        output.innerText = data.contents.jokes[0].joke.text;
    });
});
