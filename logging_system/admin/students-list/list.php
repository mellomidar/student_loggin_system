<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../styles/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Students List</title>
</head>
<body>
    <div id="list-search-area">
        <label for="type">Search By :</label>
        <select name="type" id="input-type">
            <option value="id">id</option>
            <option value="fname">first name</option>
            <option value="lname">last name</option>
        </select>
        <input type="text" name="user-input" id="user-input">
        <button type="button" id="list-search-btn">Search</button>
    </div>
    <h2 id="student-table-caption">Students List</h2>
    <table id="student-table">
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Course</th>
            <th>Yr</th>
            <th>Section</th>
            <th>Profile Photo</th>
            <th></th> <!-- left blank intentionally -->
        </tr>
    </table>
    <!-- Form for submitting edited information (dynamically filled out) -->
    <form action="editStudent.php" method="POST" id="editStudentForm" enctype="multipart/form-data" hidden>
        <input type="text" name="prev_id" id="previous-id" required>
        <input type="text" name="id" id="selected-id" required>
        <input type="text" name="lname" id="selected-lname" required>
        <input type="text" name="fname" id="selected-fname" required>
        <input type="text" name="course" id="selected-course" required>
        <input type="text" name="year" id="selected-year" required>
        <input type="text" name="section" id="selected-section" required>
        <input type="text" name="operation" id="operation">
        <input type="submit" name="update" value="update" id="save-update">
    </form>
    <p id="fail-success-txt"></p>
    <div id="delete-msg">
        <p id="msg">Are you sure you want to delete</p>
        <div id="options">
            <button id="yes" onclick="deleteStudent()">Yes</button>
            <button id="no" onclick="hidePrompt()">No</button>
        </div>
    </div>
    <script src="listRequest.js"></script>
    <script src="list-events.js"></script>
    <script src="saveEdition.js"></script>
</body>
</html>