//admin buttons event listeners
// event handler when the add student button is clicked
document.getElementById('add-student').addEventListener('click', ()=>{
    document.getElementById('page-content').style.display = "block";
    document.getElementById('page-content').src = "register/register-form.php";
    activateButton('add-student');
    deactivateButton('scan');
    deactivateButton('print');
    deactivateButton('students-list');
    document.getElementById('scan-msg').style.display = "none";
});

// event handler when the print button is clicked
document.getElementById('print').addEventListener('click', ()=>{
    document.getElementById('page-content').style.display = "block";
    document.getElementById('page-content').src = "print/print.php";
    activateButton('print');
    deactivateButton('scan');
    deactivateButton('add-student');
    deactivateButton('students-list');
    document.getElementById('scan-msg').style.display = "none";
});

// event handler when the scan button is clicked
document.getElementById('scan').addEventListener('click', ()=>{
    activateButton('scan');
    deactivateButton('add-student');
    deactivateButton('print');
    deactivateButton('students-list');
    document.getElementById('page-content').style.display = "none";
    document.getElementById('scan-msg').style.display = "block";
});

// event handler when the scan button is clicked
document.getElementById('students-list').addEventListener('click', ()=>{
    document.getElementById('page-content').style.display = "block";
    document.getElementById('page-content').src = "students-list/list.php";
    activateButton('students-list');
    deactivateButton('add-student');
    deactivateButton('print');
    deactivateButton('scan');
    document.getElementById('scan-msg').style.display = "none";
});

function activateButton(id){
    let el = document.getElementById(id);
    el.style.backgroundColor = "#2D4B8E";
    el.style.color = "white";
}

function deactivateButton(id){
    let el = document.getElementById(id);
    el.style.backgroundColor = "white";
    el.style.color = "black";
}
