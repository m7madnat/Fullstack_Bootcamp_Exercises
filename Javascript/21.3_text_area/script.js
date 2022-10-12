const textArea = document.querySelector('#textArea');
const btn = document.querySelector('#btn');
const appmsg = document.querySelector('#appmsg')


btn.addEventListener('click',function() {
    console.log(textArea.value.length);
    if(textArea.value.length < 100)
    {
        appmsg.innerHTML = 'You need to write at least 100 characters to submit this form , u have written ' + textArea.value.length + ' characters only'; 

        appmsg.style.color = 'red'
    }
    if(appmsg.style.visibility = "visible" && textArea.value.length >= 100)
    {
        appmsg.style.visibility = "hidden"
    }
})