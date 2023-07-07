<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.5/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.5/vfs_fonts.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="../../styles/main.css">
    <title>Print</title>
</head>
<body>
    <div id="doc-wrapper">
        <div id="docs-buttons">
            <button id="print-codes">Generate QR Codes</button>
            <button id="print-logs">Log Records</button>
        </div>
        <div id="print-codes-wrapper">
            <div id="stud-list-wrapper">
                <div id="students_chkbox">
                    <div class="chk-container">
                        <span><b>ID</b></span>
                        <span><b>Lastname</b></span>
                        <span><b>Firstname</b></span>
                        <span><b>Course | Yr | Section</b></span>
                    </div>
                </div>
                <div id="selection-btns">
                    <div id="select-deselect">
                        <button class="print-code-btn" id="select">Select All</button>
                        <button class="print-code-btn" id="deselect">Deselect All</button>
                    </div>
                    <p id="no-selection-error" hidden>Please select students first</p>
                    <button class="print-code-btn" id="generate_codes">Generate</button>
                </div>
            </div>
            <div id="blank-div"></div>
        </div>
        <div id="print-logs-wrapper">
            <div id="search-area">
                <form id="search-log-form" action="">
                    <label for="search-typr">Search by : </label>
                    <select name="search-type" id="search-type">
                        <option value="date">Date</option>
                        <option value="name">Name</option>
                        <option value="id">ID</option>
                    </select>
                    <input id="search-field" name="search-field" type="date">
                    <button type="submit" id="search-btn">Search</button>
                </form>
                <button id="print-logs-btn" type="button">print</button>
            </div>
            <div id="logs-list-wrapper">
                <p id="blank-div2"></p>
                <table id="logs-table">
                    <tr id="table-heading">
                        <th>ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Last Name</th>
                        <th>First name</th>
                        <th>Course|Yr|Section</th>
                    </tr>
                </table>
                <p id="log-request-err" hidden>No Logs Found</p>
            </div>
        </div>
        
    </div>
    <script src="studentsListRequest.js"></script>
    <script src="print-code-events.js"></script>
    <script src="print-log-events.js"></script>
    <script src="logsListRequest.js"></script>
</body>
</html>