let search_type = document.getElementById("search-type");
let search_field = document.getElementById("search-field");
let printLogBtn = document.getElementById("print-logs");
let searchBtn = document.getElementById("search-btn");
let submitLogsBtn = document.getElementById("print-logs-btn");
let tableData = document.getElementsByTagName("td");

printLogBtn.addEventListener("click", function(){
    search_field.value = new Date().toISOString().substring(0, 10);
    searchBtn.click();
});

search_type.addEventListener("change", function(){
    if(this.value == "name") {
        search_field.type = "text";
        search_field.value = "";
        search_field.placeholder = "Enter Complete Name";
    }else if(this.value == "id") {
        search_field.type = "text";
        search_field.value = "";
        search_field.placeholder = "Enter ID"; 
    }else if(this.value == "date"){
        search_field.type = "date";
    }
});

submitLogsBtn.addEventListener("click", function(){
    let tableDataForPrint = new Array();
    for(let i = 0; i < tableData.length; i++) {
        tableDataForPrint.push(tableData[i].innerHTML);
    }
    printLogs(tableDataForPrint);
});

function printLogs(logs){
    let body_content = [];
    let len = logs.length;
    // storing 6 table data representing 1 row
    body_content.push([addData('ID'), addData('Date'), addData('Time'), 
    addData('Last Name'), addData('First Name'), addData('Course|yr|Section')])
    let logBatch = new Array();
    for(let i = 0; i < len; i++){
        logBatch.push(logs[i]);
        if((i + 1) % 6 == 0){
            body_content.push(
                [ addData(logBatch[0]),
                  addData(logBatch[1]),
                  addData(logBatch[2]),
                  addData(logBatch[3]),
                  addData(logBatch[4]),
                  addData(logBatch[5])
                ]
            );
            logBatch = [];
        }
    }

    // rendering qr code and name
    function addData(student) {
        return {text: student, style: 'margin_font'};
    }

    var docDefinition = {
        pageSize: 'LEGAL',
        pageMargins: [ 40, 70, 40, 70 ],
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
            margin_font: {
                alignment: 'center',
                marginLeft: 10,
                marginRight: 10,
                fontSize: 10
            }
        }
    };
    
    
    pdfMake.createPdf(docDefinition).open();
}