let text = document.querySelector("h2");
let fontSize = parseInt(window.getComputedStyle(text).fontSize);
let btns = document.querySelectorAll("button");

btns.forEach(btn =>
    btn.addEventListener("click", e => {
        if (btn.innerText === "+" && fontSize < 100) {
            fontSize += 2;
        } else if (btn.innerText === "-" && fontSize > 6) {
            fontSize -= 2;
        }
        text.style.fontSize = `${fontSize}px`;
}));