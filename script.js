let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let title = document.getElementById('title');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');


title.style.color = 'red'

addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;  
    inputText.value = "" ;

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })
}) 

