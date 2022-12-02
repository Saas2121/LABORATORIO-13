const taskInput = document.getElementById("taskInput");
const publishBtn = document.getElementById("publishBtn");
const todo = document.getElementById("todo");
const boxToDo = document.getElementById("boxToDo");
const boxDoing = document.getElementById("boxDoing");
const boxDone = document.getElementById("boxDone");





//Mostrar los posts dependiendo de su estado
function showTasks(){
    boxToDo.innerHTML = "";
    boxDoing.innerHTML = "";
    boxDone.innerHTML = "";

    for(let i=0; i< tasks.length; i++){
        let task = new Task(tasks[i].task, tasks[i].state, tasks[i].id = i)

        if(tasks[i].state == 0){
            task.render(boxToDo);
        } else if(tasks[i].state == 1){
            task.render(boxDoing);
        } else {
            task.render(boxDone);
        }
    }
}

//Generar los post 
function post(){
    let text = taskInput.value;
    let state = 0;
    let id = tasks.length;
    console.log(id);
    let task = new Task(text, state, id);
    tasks.push(task);
    console.log(tasks);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json)
    task.render(boxToDo);


}
publishBtn.addEventListener("click",post);

//Borrar 
function DeletePost(post){
    console.log("post:",post)

    tasks.splice(post, 1);
    console.log(tasks)
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json)
    showTasks();
}

//Subir
function UpPost(post){
    let task = tasks[post].task;
    let state = tasks[post].state;
    let id = tasks[post].id;
    if(state == 0){
        state = 1
    } else if (state == 1){
        state = 2
    }
    let UpTask = new Task (task, state, id);
    tasks.push(UpTask);
    tasks.splice(post, 1);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json)
    showTasks();

}

//Bajar
function DownPost(post){
    let task = tasks[post].task;
    let state = tasks[post].state;
    let id = tasks[post].id;
    if(state == 1){
        state = 0
    } else if (state == 2){
        state = 1
    }
    let DownTask = new Task (task, state, id);
    tasks.push(DownTask);
    tasks.splice(post, 1);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json)
    showTasks();

}

//Cargar el storage cada vez que se carga la página
let loadedTasks = localStorage.getItem("tasks");
let tasks = [];
if(loadedTasks === null){
    let tasks = [];
} else{
    tasks = JSON.parse(loadedTasks);
    showTasks();

}
console.log(tasks)





