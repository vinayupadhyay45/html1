let todoList=[
    {
        item: 'Buy Milk',
        dueDate: '04/10/2024'
    },
    {
        item:'jhvjncm',
        dueDate: '12/10/2024'
    }
];
displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-Input');
    let dateElement = document.querySelector('#todo-date');
    let tododate =dateElement.value;
    let todoitem = inputElement.value;
    todoList.push({item : todoitem, dueDate: tododate});
    inputElement.value="";
    dateElement.value="";

    displayItems();
}
function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    // displayElement.innerText = '';
    for(let i = 0; i<todoList.length; i++){
    //   let item= todoList[i].item;
    //      let dueDate=tododate[i].dueDate;
      let{ item , dueDate}= todoList[i];
    // displayElement.innerText = displayElement.innerText + "\n" +  todoList[i];
    newHtml += `
     
     <span>${item}</span>
     <span>${dueDate}</span>
     <button class ="todo-delete" onclick="todoList.splice(${i}, 1);
     displayItems();"> Delete </button>
     
    `;
    }
    containerElement.innerHTML=newHtml;
}