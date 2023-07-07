let editBtns = document.getElementsByClassName('edit-btn');
let saveBtns = document.getElementsByClassName('save-btn');
let cancelBtns = document.getElementsByClassName('cancel-btn');
let delete_btns = document.getElementsByClassName('delete-btn');
let id_inputs = document.getElementsByName('id');
let lname_inputs = document.getElementsByName('lname');
let fname_inputs = document.getElementsByName('fname');
let course_inputs = document.getElementsByName('course');
let year_inputs = document.getElementsByName('year');
let section_inputs = document.getElementsByName('section');
let filename_inputs = document.getElementsByName('filename');
let student_form = document.getElementById('editStudentForm');

function editStudent(instanceNumber){
    editBtns[instanceNumber].style.display = "none";
    saveBtns[instanceNumber].style.display = "inline-block";
    cancelBtns[instanceNumber].style.display = "inline-block";
    delete_btns[instanceNumber].style.display = "none";
    let rows = document.querySelectorAll('#student-table tr');
    rows[instanceNumber+1].style.backgroundColor = "#C8E3F7";
    // setting default values
    setDefaultValue(id_inputs[instanceNumber]);
    setDefaultValue(lname_inputs[instanceNumber]);
    setDefaultValue(fname_inputs[instanceNumber]);
    setDefaultValue(course_inputs[instanceNumber]);
    setDefaultValue(year_inputs[instanceNumber]);
    setDefaultValue(year_inputs[instanceNumber]);
    setDefaultValue(filename_inputs[instanceNumber]);
    
    // setting table cells of chosen student row to editable
    setToEditable(id_inputs[instanceNumber]);
    setToEditable(lname_inputs[instanceNumber]);
    setToEditable(fname_inputs[instanceNumber]);
    setToEditable(course_inputs[instanceNumber]);
    setToEditable(year_inputs[instanceNumber]);
    setToEditable(section_inputs[instanceNumber]);
    filename_inputs[instanceNumber].type = "file";
}

function cancelEdit(instanceNumber) {
    editBtns[instanceNumber].style.display = "inline-block";
    saveBtns[instanceNumber].style.display = "none";
    cancelBtns[instanceNumber].style.display = "none";
    delete_btns[instanceNumber].style.display = "inline-block";
    let rows = document.querySelectorAll('#student-table tr');
    rows[instanceNumber+1].style.backgroundColor = "white";

    // getting default values back
    getDefaultValue(id_inputs[instanceNumber]);
    getDefaultValue(lname_inputs[instanceNumber]);
    getDefaultValue(fname_inputs[instanceNumber]);
    getDefaultValue(course_inputs[instanceNumber]);
    getDefaultValue(year_inputs[instanceNumber]);
    getDefaultValue(section_inputs[instanceNumber]);
    filename_inputs[instanceNumber].type = "text";
    getDefaultValue(filename_inputs[instanceNumber]);

    // setting table cells of chosen student row to non-editable
    setToNonEditable(id_inputs[instanceNumber]);
    setToNonEditable(lname_inputs[instanceNumber]);
    setToNonEditable(fname_inputs[instanceNumber]);
    setToNonEditable(course_inputs[instanceNumber]);
    setToNonEditable(year_inputs[instanceNumber]);
    setToNonEditable(section_inputs[instanceNumber]);
}

function confirmDelete(instanceNumber){
    document.getElementById('delete-msg').style.display = "block";
    document.getElementById('msg').innerHTML += `<br>${fname_inputs[instanceNumber].value} ${lname_inputs[instanceNumber].value}?`
    document.getElementById('previous-id').value = id_inputs[instanceNumber].value;
    document.getElementById('selected-id').required = false;
    document.getElementById('selected-lname').required = false;
    document.getElementById('selected-fname').required = false;
    document.getElementById('selected-course').required = false;
    document.getElementById('selected-year').required = false;
    document.getElementById('selected-section').required = false;
}

function deleteStudent(){
    document.getElementById('operation').value = 'delete';
    document.getElementById('save-update').click();
    hidePrompt();
}

function hidePrompt(){
    document.getElementById('msg').innerHTML = "Are you sure you want to delete";
    document.getElementById('delete-msg').style.display = "none";
}

function saveEdition(instanceNumber){
    editBtns[instanceNumber].style.display = "inline-block";
    saveBtns[instanceNumber].style.display = "none";
    cancelBtns[instanceNumber].style.display = "none";
    let rows = document.querySelectorAll('#student-table tr');
    rows[instanceNumber+1].style.backgroundColor = "white";

    // setting table cells of chosen student row to non-editable
    setToNonEditable(id_inputs[instanceNumber]);
    setToNonEditable(lname_inputs[instanceNumber]);
    setToNonEditable(fname_inputs[instanceNumber]);
    setToNonEditable(course_inputs[instanceNumber]);
    setToNonEditable(year_inputs[instanceNumber]);
    setToNonEditable(section_inputs[instanceNumber]);

    // submit edit form
    document.getElementById('previous-id').value = id_inputs[instanceNumber].defaultValue;
    document.getElementById('selected-id').value = id_inputs[instanceNumber].value;
    document.getElementById('selected-lname').value = lname_inputs[instanceNumber].value;
    document.getElementById('selected-fname').value = fname_inputs[instanceNumber].value;
    document.getElementById('selected-course').value = course_inputs[instanceNumber].value;
    document.getElementById('selected-year').value = year_inputs[instanceNumber].value;
    document.getElementById('selected-section').value = section_inputs[instanceNumber].value;
    if(filename_inputs[instanceNumber].value !== ""){
        student_form.appendChild(filename_inputs[instanceNumber]); // moving file picker to form to get input value
    } else {
        filename_inputs[instanceNumber].type = "text";
        getDefaultValue(filename_inputs[instanceNumber]);
    }
    document.getElementById('operation').value = 'edit';
    document.getElementById('save-update').click();
}

// making all cell of chosen student row editable
function setToEditable(el){
    el.readOnly = false;
}

function setToNonEditable(el){
    el.readOnly = true;
}

function setDefaultValue(el){
    el.defaultValue = el.value;
}

function getDefaultValue(el){
    el.value = el.defaultValue;
}

function popUpSuccessMsg(content){
    let success_msg = document.getElementById('fail-success-txt');
    success_msg.innerHTML = content;
    success_msg.style.display = "block";
    setTimeout(()=>{
        success_msg.style.display = "none";
        location.reload();
    }, 1000);
}

function popUpFailureMsg(content){
    let fail_msg = document.getElementById('fail-success-txt');
    fail_msg.innerHTML = content;
    fail_msg.style.backgroundColor = "#F16161";
    fail_msg.style.display = "block";
    setTimeout(()=>{
        fail_msg.style.display = "none";
        location.reload();
    }, 1000);
}

document.getElementById('list-search-btn').addEventListener('click', function(){
    let student_table_rows = document.querySelectorAll('#student-table tr');
    let search_type = document.getElementById('input-type').value;
    let user_input = document.getElementById('user-input').value.toUpperCase();
    let len = id_inputs.length;
    for(let i = 0; i < len-1; i++){
        student_table_rows[i+1].style.backgroundColor = "white";
        if(search_type == 'id'){
            if(id_inputs[i].value == user_input){
                student_table_rows[i+1].style.backgroundColor = "#C8E3F7";
                id_inputs[i].scrollIntoView();
            }
        } else if(search_type == 'fname'){
            if(fname_inputs[i].value == user_input){
                student_table_rows[i+1].style.backgroundColor = "#C8E3F7";
                fname_inputs[i].scrollIntoView();
            }
        } else if(search_type == "lname"){
            if(lname_inputs[i].value == user_input){
                student_table_rows[i+1].style.backgroundColor = "#C8E3F7";
                lname_inputs[i].scrollIntoView();
            }
        }
    }
});