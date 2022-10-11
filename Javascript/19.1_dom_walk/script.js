const start = document.querySelector('.start-here');
start.innerHTML = 'main title';

const [outUl, NewLi] = document.querySelectorAll("ul");
NewLi.appendChild(document.createElement("li"));
NewLi.lastChild.innerHTML = "sub title 4";

outUl.removeChild(outUl.lastElementChild);

const title = document.querySelector('title');
title.innerHTML = 'Master Of The Dom';

const p = document.querySelector('p');
p.innerHTML = ' (DOM) = Document Object Model';