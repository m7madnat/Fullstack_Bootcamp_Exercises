let listOfTextbox = document.querySelectorAll('.inputbox')
const sbmtBtn = document.querySelector('#submitBtn')

listOfTextbox[0].focus(); // focus on first input box
for(let i=0; i < listOfTextbox.length-1; i++) // loop through all input boxes
{
    listOfTextbox[i].addEventListener('input',function() {  // add event listener to each input box
        listOfTextbox[i+1].focus(); // focus on next input box
    })
}

sbmtBtn.addEventListener('click',()=> { 
    for(let i=0; i < listOfTextbox.length; i++) // loop through all input boxes
    {
        if(listOfTextbox[i].value == '') // check if any input box is empty
        {
            alert('Please fill all the fields');
            return;
        }
    }
    location.reload(); // reload page on click of submit button    
}) 

listOfTextbox[listOfTextbox.length-1].addEventListener('input',function() { // add event listener to last input box 
    let isFilled = true; 
    for(let i=0; i < listOfTextbox.length; i++) 
    {
        if(!listOfTextbox[i].value) // check if any input box is empty 
            isFilled = false;  // if any input box is empty then set isFilled to false
    }
    if(isFilled) // if all input boxes are filled then enable submit button
    {
        setInterval(()=>{ 
            location.reload();  // reload page on click of submit button
        },1000)
    }
})

listOfTextbox[0].addEventListener('paste',(event)=>{  // add event listener to first input box
    let pasteData = (event.clipboardData || window.clipboardData).getData('text'); // get pasted data
    pasteData = pasteData.split(''); // split pasted data into array 
    listOfTextbox.forEach((data,index)=>{ // loop through pasted data
        listOfTextbox[index].value = pasteData[index] || '' // assign pasted data to each input box
    })    
    //remove blur after pasting 
    document.activeElement.blur();

    setInterval(()=>{
        location.reload(); 
    },1000)
})
