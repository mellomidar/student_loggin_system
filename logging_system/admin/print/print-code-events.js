let print_logs_btn = document.getElementById("print-logs");
let print_codes_btn = document.getElementById("print-codes");
let print_codes_page = document.getElementById("print-codes-wrapper");
let print_logs_page = document.getElementById("print-logs-wrapper");
let select_btn = document.getElementById("select");
let deselect_btn = document.getElementById("deselect");
let submit_students = document.getElementById("generate_codes");
let checkboxes = document.getElementsByName("student_data");

window.addEventListener("load", function(){
    print_codes_btn.click();
});

print_codes_btn.addEventListener("click", function(){
    this.style.backgroundColor = "#2D4B8E";
    this.style.color = "white";
    print_logs_btn.style.backgroundColor = "#EFEFEF";
    print_logs_btn.style.color = "black";
    print_codes_page.style.display = "block";
    print_logs_page.style.display = "none";
});

print_logs_btn.addEventListener("click", function(){
    this.style.backgroundColor = "#2D4B8E";
    this.style.color = "white";
    print_codes_btn.style.backgroundColor = "#EFEFEF";
    print_codes_btn.style.color = "black";
    print_logs_page.style.display = "block";
    print_codes_page.style.display = "none";
});

// selecting non-selected students
select_btn.addEventListener("click", function(){
    let checkboxes = document.getElementsByName('student_data');
    for(var i=0; i<checkboxes.length; i++){  
        if(checkboxes[i].type=='checkbox'){
            checkboxes[i].checked=true;  
        }  
    }  
});

// deselecting all selected students
deselect_btn.addEventListener("click", function(){
    for(var i=0; i<checkboxes.length; i++){  
        if(checkboxes[i].type == 'checkbox'){
            checkboxes[i].checked = false;  
        }  
    }  
});

// submitting selected students for qr code generation
submit_students.addEventListener("click", function(){
    let selected_students = new Array();
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected_students.push(checkboxes[i].value);
        }  
    }
    if(selected_students.length == 0){
        popUpSelectionError();
        return;
    }
    printCodes(selected_students);
    deselect_btn.click();
});

function popUpSelectionError(){
    let err = document.getElementById("no-selection-error");
    err.style.display = "inline-block";
    setTimeout(function(){
        err.style.display = "none";
    }, 2000);
}

// using pdfmake libary for generating qr codes
function printCodes(students){

    let body_content = [];
    let len = students.length;

    // storing 3 students per batch to fill 1 row of qr codes
    let studentBatch = new Array();
    for(let i = 0; i < len; i++){
        let dataArr = students[i].split('\n');
        studentBatch.push(dataArr);
        if((i + 1) % 3 == 0){
            body_content.push(
                [ {stack: addStack(studentBatch[0]), margin: 10},
                    {stack: addStack(studentBatch[1]), margin: 10},
                    {stack: addStack(studentBatch[2]), margin: 10}
                ]
            );
            studentBatch = [];
        }
    }

    // if number of students selected divide 3 has remainder 1
    if(len % 3 == 1) {
        let dataArr = students[len-1].split('\n');
        body_content.push(
           [ {stack: addStack(dataArr), margin: 10},
                {stack: [{text: '', fit: '150'},{text: '', style: 'separator'}], margin: 10},
                {stack: [{text: '', fit: '150'},{text: '', style: 'separator'}], margin: 10}
            ]
        );
    } 
    // if number of students selected divide 3 has remainder 2
    else if (len % 3 == 2) {
        let dataArr1 = students[len-1].split('\n');
        let dataArr2 = students[len-2].split('\n');
        body_content.push(
           [ {stack: addStack(dataArr1), margin: 10},
                {stack: addStack(dataArr2), margin: 10},
                {stack: [{text: '', fit: '150'},{text: '', style: 'separator'}], margin: 10}
            ]
        );
    }

    // rendering qr code and name
    function addStack(student) {
        return [{qr: student[0], fit: '150'},{text: `${student[1]}\n${student[2]}`, style: 'separator'}];
    }

    var docDefinition = {
        pageSize: 'LEGAL',
        pageMargins: [ 40, 60, 40, 60 ],
        content: [
            {
                table: {
                    dontBreakRows: true,
                    headerRows: 1,
                    body: body_content
                }
            }
        ],
        styles: {
            separator: {
                alignment: 'center',
                fontSize: 11,
                marginTop: 15
            }
        }
    };
    pdfMake.createPdf(docDefinition).open();
}