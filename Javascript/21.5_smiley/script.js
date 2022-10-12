const submitBtn = document.querySelector('#submit');
const inputText = document.querySelector('#inputText');
const targetDiv = document.querySelector('#smile');
const errorInput = document.querySelector('#error');


submitBtn.addEventListener('click', function () {
    console.log(inputText.value);
    if (isNaN(inputText.value) || !inputText.value || inputText.value <= 0) {
        errorInput.innerHTML = 'Please enter numbers only';
        errorInput.style.color = 'red';
        errorInput.style.fontSize = '20px';
        targetDiv.innerHTML = ' ';
    }
    else {
        targetDiv.innerHTML = smiley(Math.floor(inputText.value));    
        errorInput.innerHTML = ' ';    
    }
});


function smiley(num) {
    let string = '';
    for (let i = 0; i < num; i++)
        string += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" 
        style="width: 100px; height: 100px; display: inline-block;"> `;
    return string;
}
