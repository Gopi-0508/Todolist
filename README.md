# Ex03 To-Do List using JavaScript
## Date: 21.05.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
    content="width=device-width, initial-scale=1.0">

    <title>3D Todo App</title>

    <!-- CSS File -->

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <!-- 3D Background -->

    <div class="orb"></div>

    <!-- Main Container -->

    <div class="container">

        <!-- Header -->

        <div class="header">

            <h1>🚀 To-Do List</h1>

            <!-- Theme Buttons -->

            <div class="theme-buttons">

                <button
                class="theme-btn green"
                onclick="changeTheme('default')">
                </button>

                <button
                class="theme-btn purple"
                onclick="changeTheme('theme2')">
                </button>

                <button
                class="theme-btn cyan"
                onclick="changeTheme('theme3')">
                </button>

                <button
                class="theme-btn red"
                onclick="changeTheme('theme4')">
                </button>

            </div>

        </div>

        <!-- 3D Logo -->

        <img
        src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
        class="logo">

        <!-- Input Section -->

        <div class="input-section">

            <input
            type="text"
            id="taskInput"
            class="task-input"
            placeholder="Enter task">

            <input
            type="date"
            id="dateInput"
            class="date-input">

            <select
            id="priorityInput"
            class="priority-input">

                <option>High</option>

                <option selected>
                    Medium
                </option>

                <option>Low</option>

            </select>

            <button
            class="add-btn"
            onclick="addTask()">

            Add

            </button>

        </div>

        <!-- Filter Buttons -->

        <div class="filters">

            <button
            class="filter-btn"
            onclick="filterTasks('all')">

            All

            </button>

            <button
            class="filter-btn"
            onclick="filterTasks('completed')">

            Completed

            </button>

            <button
            class="filter-btn"
            onclick="filterTasks('pending')">

            Pending

            </button>

        </div>

        <!-- Task List -->

        <div id="taskList"></div>

    </div>

    <!-- JavaScript File -->

    <script src="script.js"></script>

</body>
</html>
```
style.css
```
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial;
}

body{

    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    overflow:hidden;

    transition:1s;

    background:
    linear-gradient(
    135deg,
    #0f172a,
    #1e293b,
    #111827);
}

/* THEMES */

body.theme2{

    background:
    linear-gradient(
    135deg,
    #4b0082,
    #8a2be2,
    #da70d6);
}

body.theme3{

    background:
    linear-gradient(
    135deg,
    #003973,
    #00c6ff);
}

body.theme4{

    background:
    linear-gradient(
    135deg,
    #ff512f,
    #dd2476);
}

/* 3D ORB */

.orb{

    position:absolute;

    width:650px;
    height:650px;

    border-radius:50%;

    background:
    radial-gradient(circle at top left,
    rgba(0,255,255,0.9),
    rgba(138,43,226,0.6),
    rgba(255,0,150,0.3),
    transparent);

    filter:blur(50px);

    animation:
    moveOrb 12s infinite alternate ease-in-out;

    z-index:0;
}

/* Orb Animation */

@keyframes moveOrb{

    0%{

        transform:
        translate(-120px,-80px)
        rotate(0deg)
        scale(1);
    }

    25%{

        transform:
        translate(120px,60px)
        rotate(90deg)
        scale(1.2);
    }

    50%{

        transform:
        translate(50px,120px)
        rotate(180deg)
        scale(1.1);
    }

    75%{

        transform:
        translate(-80px,50px)
        rotate(270deg)
        scale(1.3);
    }

    100%{

        transform:
        translate(-120px,-80px)
        rotate(360deg)
        scale(1);
    }
}

/* Container */

.container{

    width:900px;

    padding:35px;

    border-radius:30px;

    background:
    rgba(255,255,255,0.08);

    backdrop-filter:blur(22px);

    border:
    1px solid rgba(255,255,255,0.18);

    box-shadow:
    0 15px 50px rgba(0,0,0,0.5),
    0 0 40px rgba(0,255,255,0.15);

    z-index:1;

    animation:
    cardFloat 5s infinite alternate;
}

/* Card Animation */

@keyframes cardFloat{

    from{

        transform:
        rotateY(-2deg)
        rotateX(2deg);
    }

    to{

        transform:
        rotateY(2deg)
        rotateX(-2deg);
    }
}

/* Header */

.header{

    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-bottom:25px;
}

.header h1{

    color:white;

    font-size:40px;
}

/* Theme Buttons */

.theme-buttons{

    display:flex;
    gap:10px;
}

.theme-btn{

    width:45px;
    height:45px;

    border:none;

    border-radius:50%;

    cursor:pointer;

    transition:0.3s;
}

.theme-btn:hover{

    transform:scale(1.15);
}

.green{
    background:#06dc31;
}

.purple{
    background:#8a2be2;
}

.cyan{
    background:#00c6ff;
}

.red{
    background:#ff1744;
}

/* Logo */

.logo{

    width:170px;

    display:block;

    margin:0 auto 25px;

    animation:
    spin 8s linear infinite,
    glow 3s infinite alternate;

    filter:
    drop-shadow(0 0 30px cyan);
}

/* Logo Animation */

@keyframes spin{

    from{
        transform:rotateY(0deg);
    }

    to{
        transform:rotateY(360deg);
    }
}

/* Glow Animation */

@keyframes glow{

    from{

        filter:
        drop-shadow(0 0 10px cyan);
    }

    to{

        filter:
        drop-shadow(0 0 35px #ff00ff);
    }
}

/* Inputs */

.input-section{

    display:flex;

    gap:12px;

    margin-bottom:25px;
}

.input-section input,
.input-section select{

    padding:16px;

    border:none;

    border-radius:14px;

    outline:none;

    font-size:17px;
}

.task-input{
    flex:1;
}

.date-input{
    width:180px;
}

.priority-input{
    width:180px;
}

/* Add Button */

.add-btn{

    padding:16px 24px;

    border:none;

    border-radius:14px;

    background:
    linear-gradient(
    45deg,
    #00c6ff,
    #0072ff);

    color:white;

    font-size:18px;

    font-weight:bold;

    cursor:pointer;

    transition:0.3s;

    box-shadow:
    0 0 15px rgba(0,198,255,0.5);
}

.add-btn:hover{

    transform:
    scale(1.08);

    box-shadow:
    0 0 30px rgba(0,198,255,0.9);
}

/* Filters */

.filters{

    display:flex;

    gap:15px;

    margin-bottom:25px;
}

.filter-btn{

    padding:13px 22px;

    border:none;

    border-radius:12px;

    background:
    rgba(255,255,255,0.1);

    color:white;

    cursor:pointer;
}

/* Task */

.task{

    background:
    rgba(255,255,255,0.12);

    padding:22px;

    border-radius:20px;

    margin-bottom:18px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    transition:0.4s;

    border:
    1px solid rgba(255,255,255,0.08);
}

.task:hover{

    transform:
    translateY(-8px)
    scale(1.02);

    background:
    rgba(255,255,255,0.16);

    box-shadow:
    0 0 25px rgba(0,255,255,0.2);
}

.task-content h2{

    color:white;

    margin-bottom:8px;
}

.task-content p{

    color:#ddd;

    margin-bottom:5px;
}

.high{
    color:#ff4d6d;
}

.medium{
    color:#ffd166;
}

.low{
    color:#06d6a0;
}

/* Action Buttons */

.actions button{

    border:none;

    padding:11px 16px;

    border-radius:10px;

    color:white;

    cursor:pointer;

    margin-left:10px;

    transition:0.3s;
}

.done-btn{
    background:#16a34a;
}

.edit-btn{
    background:#f59e0b;
}

.delete-btn{
    background:#ef4444;
}

.actions button:hover{

    transform:scale(1.08);
}

/* Completed */

.completed h2{

    text-decoration:line-through;

    opacity:0.6;
}
```
script.jsx
```
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
```
## OUTPUT
![alt text](<Screenshot 2026-05-20 220252.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
