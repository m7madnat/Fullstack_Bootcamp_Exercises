const formEl = document.querySelector("form");
const subBtn = formEl.querySelector("button");
const popWindow = document.querySelector(".pop-window");
const [confirm, changeInfo] = popWindow.querySelectorAll("button");

popWindow.style.display = "none";

subBtn.addEventListener("click", (e) => {
    const confirmMsg = [...formEl.querySelectorAll("input")].reduce( 
        (res, input) => res + `<br>${input.name}: ${input.value}`, 
        "Are you sure about this info ?<br>" 
    );
    popWindow.querySelector(".confirmation").innerHTML = confirmMsg;    
    popWindow.style.display = "block"; 
    popWindow.style.color ="red";
});

changeInfo.addEventListener(
    "click",
    (e) => (popWindow.style.display = "none")
);

confirm.addEventListener("click",(e) => 
    (popWindow.innerHTML = "Congratulations You Successfully Sent this Form")
);
