let todos = [];
let text_1;



let text = document.getElementById("text");
let submit = document.getElementById("submit");
let ToDoContainer = document.getElementsByClassName("todos")[0];
Render();
text.focus();


function handleEdit(index){
  
    todos = todos.map((item,i) => {
        if (index == i){
            return {
                completed : true,
                todo : item.todo
            };
        }else{
            return item;
        }
    })


    Render();
  



      
 
    
   
    
}


function handleDelete(index){
    todos = todos.filter((item,i) => index != i);
    Render();
}


function Render(){

    while(ToDoContainer.firstChild){
        ToDoContainer.removeChild(ToDoContainer.firstChild);
    }

   
   

    todos.map((item,index) => {
        let child_div = document.createElement("div");
        child_div.setAttribute('class','todo_child');
    
    
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
      

      
       
    
    
        let span = document.createElement('span');
        span.innerHTML = item.todo;

        checkBox.addEventListener('click',() => handleEdit(index));

        if (item.completed){
            span.classList.add("edit");
            checkBox.setAttribute('disabled',true);
        }
    
     
    
      
    
      
    
    
     
        let deleteBtn = document.createElement('img');
    
        deleteBtn.setAttribute('src','https://cdn-icons-png.flaticon.com/128/1828/1828843.png');

        deleteBtn.addEventListener('click',() => handleDelete(index))
    
    
       
    
        
    
         child_div.appendChild(checkBox);
    
         child_div.appendChild(span);
    
         child_div.appendChild(deleteBtn);
       
    
    
        
        ToDoContainer.appendChild(child_div);
    })

    let totalTasks = document.createElement('span');

    totalTasks.innerHTML = "Total Tasks : " + todos.length;

    let Completed = document.createElement('span');

    let count = 0;
    todos = todos.map((item) => {
        if (item.completed){
             count++;
        }
        return item;
    });

    Completed.innerHTML = "Completed Tasks : " + `${count}`;

    let UnCompleted = document.createElement('span');

    UnCompleted.innerHTML = `Uncompleted Tasks : ` + `${todos.length-count}`;



  
    

    ToDoContainer.appendChild(totalTasks);
    ToDoContainer.appendChild(Completed);
    ToDoContainer.appendChild(UnCompleted);
        
    
    
    }


text.addEventListener("change",function(e){
    text_1 = e.target.value;
 
});



submit.addEventListener('click',function(){

    todos.push({completed : false,todo : text_1});
  
    text.value = "";
    text.focus();
    Render();
    
})












