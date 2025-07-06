let input = document.querySelector('#input');
let todoList = document.querySelector('#todoList');
let addbtn = document.querySelector('#addbtn');
let editTodo=null;
const todoapp = () => {
  let inputText = input.value.trim();
  if (inputText.length <= 0) {
    alert('You must write something to do');
    return false;
  }

  if(addbtn.value==='edit')
  {
       editTodo.target.previousElementSibling.innerHTML=inputText
       addbtn.value='add'
       input.value='';

  }
else{

  
  let li = document.createElement('li');
  let p = document.createElement('p');
  p.innerHTML = inputText;
  li.appendChild(p);
  todoList.appendChild(li);
  input.value = '';

  let editbtn = document.createElement('button');
  editbtn.innerHTML = 'Edit';
  editbtn.classList.add('btn', 'editbtn');
  li.appendChild(editbtn);

  let deletebtn = document.createElement('button');
  deletebtn.innerHTML = 'Remove';
  deletebtn.classList.add('btn', 'delebtn');
  li.appendChild(deletebtn);
}
};

addbtn.addEventListener('click', todoapp);

const updatetodo = (e) => {
  if (e.target.innerHTML === 'Remove') {
   todoList.removeChild(e.target.parentElement);
  }

  if (e.target.innerHTML === 'Edit') {
    input.value = e.target.previousElementSibling.innerHTML;
    input.focus();
    addbtn.value='edit'
    editTodo=e
  }
};

todoList.addEventListener('click', updatetodo);

