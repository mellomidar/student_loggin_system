<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/admin.css">
    <title>Student Logging System</title>
</head>
<body>
    <div class="wrapper">
        <div class="heading round-border">
            <img id="bisu-logo" src="../assets/images/bisu-logo.png" alt="bisu logo">
            <div class="head-text">
                <h1 id="title">Student Logging System</h1>
                <p id="school">Bohol Island State University - Clarin Campus</p>
            </div>
        </div>
        <main class="dash-container round-border">
            <div id="dash-title-container">
                <span id="dash-title">Dashboard</span>
                <hr>
            </div>
            <div class="dashboard">
                <div class="buttons">
                    <button class="dash-btn" id="add-student" name="add-student">Add Student</button>
                    <a href="../scan/scanner.php" target="_blank">
                        <button class="dash-btn" id="scan" name="scan" type="button">Scan</button>
                    </a>
                    <button class="dash-btn" id="print" name="print">Print</button>
                    <button class="dash-btn" id="students-list" name="students-list">Students List</button>
                </div>
                <div class="content-box round-border">
                    <iframe id="page-content" src="default-view.php" frameborder="0"></iframe>
                    <p id="scan-msg">Scanner is open in new tab</p>
                </div>
            </div>
        </main>
    </div>
    <script src="admin-events.js"></script>
</body>
</html>