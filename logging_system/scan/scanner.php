<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://rawgit.com/schmich/instascan-builds/master/instascan.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="../styles/main.css">
    <title>Campus LogBook</title>
</head>
<body>
    <div id="main-wrapper">
        <div id="qr-scan-wrapper">
            <p id="scanning">Scanning Code</p>
            <video id="preview"></video>
            <form id="update" style="display: none;">
                <input name="logdata" id="logdata" readonly>
                <button id="submit" type="submit" name="submit">Submit</button>
            </form>
            <form id="code_validaton_form" action="log_validator.php" method="post" hidden>
                <input id="qr_code" name="qr_code" type="text">
                <button id="submit_code" type="submit">Submit</button>
            </form>
            <p id="scan-success">Welcome To BISU - CLARIN</p>
            <p id="scan-failed">Sorry You Are Not Registered</p>
        </div>
        <div class="logs-container">
            <p>Recent Logs : </p>
            <div class="recent-logs">
                <div class="log">
                    <img class="stud-img" src="../assets/images/student-images/student-photo.png" alt="student's photo">
                    <div class="log-inputs">
                        <label class="log-label">ID # : <input type="text" name="stud-id" class="stud-id" readonly></label>
                        <label class="log-label">Date :<input type="text" name="log-date" class="log-date" readonly></label>
                        <label class="log-label">Time :<input type="text" name="log-time" class="log-time" readonly></label>
                    </div>
                </div>
                <div class="log">
                    <img class="stud-img" src="../assets/images/student-images/student-photo.png" alt="student's photo">
                    <div class="log-inputs">
                        <label class="log-label">ID # : <input type="text" name="stud-id" class="stud-id" readonly></label>
                        <label class="log-label">Date :<input type="text" name="log-date" class="log-date" readonly></label>
                        <label class="log-label">Time :<input type="text" name="log-time" class="log-time" readonly></label>
                    </div>
                </div>
                <div class="log">
                    <img class="stud-img" src="../assets/images/student-images/student-photo.png" alt="student's photo">
                    <div class="log-inputs">
                        <label class="log-label">ID # : <input type="text" name="stud-id" class="stud-id" readonly></label>
                        <label class="log-label">Date :<input type="text" name="log-date" class="log-date" readonly></label>
                        <label class="log-label">Time :<input type="text" name="log-time" class="log-time" readonly></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p id="result"></p>
    <script src="scanner.js"></script>
    <script src="addLog.js"></script>
</body>
</html>