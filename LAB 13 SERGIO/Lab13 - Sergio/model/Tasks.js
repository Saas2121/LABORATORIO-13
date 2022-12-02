class Task{
    constructor(task, state, id){
        this.task = task;
        this.state = state;
        this.id = id;
    }

    render(container){
        let html = "";
        html += `<a><img id="DeleteBtn${this.id}" class="iconDelete" onclick="DeletePost(${this.id})" src="IMAGENES/delete.png"></a>
                <h5 class="text">${this.task}.</h5>
                <button id="UpBtn${this.id}" class="UpBtn" onclick="UpPost(${this.id})"></button>
                <button id="DownBtn${this.id}" class="DownBtn" onclick="DownPost(${this.id})"></button>`;

        let post = document.createElement(`div`)
        post.classList.add("post")
        post.innerHTML = html;
        container.appendChild(post);
    }


}