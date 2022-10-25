const btn = document.getElementById('btn');
const title = document.querySelector("h2");
const output = document.querySelector("p");

btn.addEventListener("click", async function () {
    const data = await fetch("https://api.jokes.one/jod");
    const reqdata = await data.json();
    const joke = reqdata.contents.jokes[0].joke;
    title.innerText = joke.title;
    output.innerText = joke.text;
});


//Old ways
// btn.addEventListener("click", () => {
//     fetch("https://api.jokes.one/jod")
//     .then((data) => data.json())
//     .then((data) => {
//         title.innerText = data.contents.jokes[0].joke.title;
//         output.innerText = data.contents.jokes[0].joke.text;
//     });
// });
