
document.querySelector('#addTask').addEventListener('click', () => {
    if(document.querySelector('#taskInput').value != ""){
        document.querySelector('#taskArea').innerHTML += `<div id="taskArea">
    <div class = "row">
    <div class="col-12 taskElement pt-3 fade-out">
    <button id = "markButton" class = "fade-out">✔️</button>
    <button class = "deleteButton text-danger fade-out">🗑️</button>
    <span id="task" class = "fade-out">${document.querySelector('#taskInput').value}</span>
    <span id = "unfinishedStat" class = "fade-out fw-bold">Unfinished</span>
    <span id = "doneStat" class = "fade-out fw-bold">Done</span>
    </div>
    </div>
    </div>`;
    document.querySelector('#taskInput').value = "";
    
    } else {
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
    
    const markButtons = document.querySelectorAll("#markButton");
    markButtons.forEach(markButton =>{
    markButton.addEventListener("click", (e) => {
        e.target.parentElement.children[2].style = "text-decoration: line-through; font-weight: 900; color: green;";
        e.target.parentElement.children[3].style = "background: none; color: black;";
        e.target.parentElement.lastElementChild.style = "background-color: green; color: white;";
        e.target.remove();
    });
});
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(deleteButton =>{
    deleteButton.addEventListener("click", (e) => {
        
        setTimeout(() => {
            e.target.parentElement.remove();
        }, 900);
    });
    });
});


document.querySelector('#taskInput').addEventListener('keydown', function (event) {
    if(event.key == 'Enter' != ""){
        document.querySelector('#taskArea').innerHTML += `<div id="taskArea">
    <div class = "row">
    <div class="col-md-12 taskElement pt-3 fade-out">
    <button id = "markButton" class = "fade-out">✔️</button>
    <button class = "deleteButton text-danger fade-out">🗑️</button>
    <span id="task" class = "fade-out">${document.querySelector('#taskInput').value}</span>
    <span id = "unfinishedStat" class = "fade-out fw-bold">Unfinished</span>
    <span id = "doneStat" class = "fade-out fw-bold">Done</span>
    </div>
    </div>
    </div>`;
    if(document.querySelector('#taskInput').value == ""){
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        document.querySelector('.taskElement').style.display = "none";
    }
    document.querySelector('#taskInput').value = "";
    }

    
    const markButtons = document.querySelectorAll("#markButton");
    markButtons.forEach(markButton =>{
    markButton.addEventListener("click", (e) => {
        e.target.parentElement.children[2].style = "text-decoration: line-through; font-weight: 900; color: green;";
        e.target.parentElement.children[3].style = "background: none; color: black;";
        e.target.parentElement.lastElementChild.style = "background-color: green; color: white;";
        e.target.remove();
    });
});
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(deleteButton =>{
    deleteButton.addEventListener("click", (e) => {
            e.target.parentElement.remove();
    });
    });
});