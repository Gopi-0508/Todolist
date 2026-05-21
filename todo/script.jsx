let taskList =
document.getElementById("taskList");

/* Add Task */

function addTask(){

    let task =
    document.getElementById("taskInput").value;

    let date =
    document.getElementById("dateInput").value;

    let priority =
    document.getElementById("priorityInput").value;

    if(task.trim() === ""){

        alert("Please enter task");
        return;
    }

    let div =
    document.createElement("div");

    div.classList.add("task");

    div.innerHTML = `

        <div class="task-content">

            <h2>${task}</h2>

            <p>Due: ${date || "No Date"}</p>

            <p>
            Priority:
            <span class="${priority.toLowerCase()}">
            ${priority}
            </span>
            </p>

        </div>

        <div class="actions">

            <button
            class="done-btn"
            onclick="completeTask(this)">
            Done
            </button>

            <button
            class="edit-btn"
            onclick="editTask(this)">
            Edit
            </button>

            <button
            class="delete-btn"
            onclick="deleteTask(this)">
            Delete
            </button>

        </div>
    `;

    taskList.appendChild(div);

    document.getElementById("taskInput").value = "";
}

/* Complete Task */

function completeTask(button){

    button.parentElement
    .parentElement
    .classList.toggle("completed");
}

/* Delete Task */

function deleteTask(button){

    button.parentElement
    .parentElement
    .remove();
}

/* Edit Task */

function editTask(button){

    let title =
    button.parentElement
    .previousElementSibling
    .querySelector("h2");

    let newTask =
    prompt("Edit Task", title.innerText);

    if(newTask){

        title.innerText = newTask;
    }
}

/* Filter Tasks */

function filterTasks(type){

    let tasks =
    document.querySelectorAll(".task");

    tasks.forEach(task => {

        if(type === "all"){

            task.style.display = "flex";
        }

        else if(type === "completed"){

            if(task.classList.contains("completed")){

                task.style.display = "flex";
            }

            else{

                task.style.display = "none";
            }
        }

        else{

            if(!task.classList.contains("completed")){

                task.style.display = "flex";
            }

            else{

                task.style.display = "none";
            }
        }
    });
}

/* Change Theme */

function changeTheme(theme){

    document.body.className = "";

    if(theme !== "default"){

        document.body.classList.add(theme);
    }
}