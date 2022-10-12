const inp = document.querySelector('input[type="text"]');
const btn = document.querySelector('button[class="submit"]');

btn.addEventListener('click', () => {
    if (inp.value >= 18) {
        alert('you can drink');
    } else if (inp.value < 18) {
        alert('you’re too young');
    }
})