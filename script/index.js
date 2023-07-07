const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'Check email',
    dueDate: '01/22/2023',
    checked: false
    },{
    name:'Check missed calls',
    dueDate: '01/22/2023',
    checked: true
    }];
    
    renderTodoList ();
    
    function renderTodoList () {
    let todoListHTML = '';
    
    
    todoList.forEach((todoObject, index) => {
    const { name, dueDate, checked } = todoObject;
    const html = `
    <input type = "checkbox" class="js-myCheckbox myCheckbox" ${checked ? 'checked' : ''}>
    <div class="name">${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button>`;
    
    todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    todoList.splice(index, 1);
    renderTodoList();
    saveToStorage();
    });
    
    });
    
    document.querySelectorAll('.js-myCheckbox').forEach((checkbox,index) => {
    checkbox.addEventListener('change', () => {
    todoList[index].checked = checkbox.checked;
    saveToStorage();
    })
    }
    
    )
    
    }
    
    document.querySelector('.js-add-button')
    .addEventListener('click',() => {
    addToDo();
    });
    
    
    function addToDo() {
    
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
    name,
    dueDate});
    
    inputElement.value = '';
    renderTodoList ();
    saveToStorage();  
    
    } 
    
    function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  