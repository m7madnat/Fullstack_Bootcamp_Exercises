const checkBox = document.querySelector("input[type=checkbox]");
const imgEl = document.querySelector("img");
imgEl.style.display = "none"

checkBox.addEventListener("click", e => {    
    if (checkBox.checked) {
        imgEl.style.display = "unset"
    } else {        
        imgEl.style.display = "none"
    }
})