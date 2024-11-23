let form = document.getElementById("form");
let arr = [];

form.addEventListener('submit', () => {
    task(event)
})
function task(event) {
    event.preventDefault();
    
    let taskName = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    
    
    
    let student = {
        taskName: taskName,
        priority: priority,
    }
    arr.push(student);
    let stu1 = JSON.stringify(student);
    let stu2 = JSON.parse(stu1);
    console.log(stu2);

    document.getElementById('task').value ="";
    document.getElementById('priority').value = "";
}