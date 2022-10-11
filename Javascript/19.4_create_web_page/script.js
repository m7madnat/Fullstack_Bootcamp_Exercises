const head1 = document.createElement('h1');
const firstdiv = document.createElement('div');
const secdiv = document.createElement('div');
const newContent = document.createTextNode('this is a new div created by javascript'); 

head1.innerHTML="Hello World";
document.body.appendChild(head1);

firstdiv.appendChild(newContent);
document.body.appendChild(firstdiv);




function simpleImg() {
    return `<img src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg" 
    style="width: 100px; height: 100px; display: inline-block;"> `;
}

secdiv.innerHTML = simpleImg();
document.body.append(secdiv);

