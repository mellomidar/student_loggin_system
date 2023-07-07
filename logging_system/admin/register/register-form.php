<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="../../styles/main.css">
    <title>Register</title>
</head>
<body>
    <div id="reg-form-wrapper">
        <h1 id="reg-title">Register Student</h1><hr>
        <p id="reg-msg">Fill out the following fields</p>
        <form id="register-form" method="post" action="addStudent.php" enctype="multipart/form-data">
            <div id="fields">
                <div class="form-group">
                    <label for="id-number">ID Number</label>
                    <input placeholder="Enter ID" type="number" id="id-number" name="id-number" autocomplete="off" required>
                    <label for="lname">Last Name</label>
                    <input placeholder="Enter last name" type="text" id="lname" name="lname" autocomplete="off" required>
                    <label for="fname">First Name</label>
                    <input placeholder="Enter first name" type="text" id="fname" name="fname" autocomplete="off" required>
                </div>
                <div class="form-group">
                    <label for="course">Course</label>
                    <select name="course" id="course" required>
                        <option value="">Select Course</option>
                        <option value="BSCS">BSCS</option>
                        <option value="BSHM">BSHM</option>
                        <option value="BSES-CRM">BSES-CRM</option>
                        <option value="BTLEd-HE">BTLEd-HE</option>
                        <option value="BEEd">BEEd</option>
                        <option value="BSEd-Math">BSEd-Math</option>
                    </select>
                    <label for="yr-lvl">Year</label>
                    <select name="yr-lvl" id="yr-lvl" required>
                        <option value="">Select Year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label for="section">Section</label>
                    <select name="section" id="section" required>
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div id="file-upload">
                    <p id="upload-txt">No file chosen</p>
                    <input type="file" name="image" id="stud-photo" accept="image/*" hidden>
                    <input type="text" name="filename" id="filename" hidden>
                    <div id="preview-container">
                        <span id="preview-txt">Profile Photo</span>
                        <img id="photo-preview" src="" alt="profile-pic">
                    </div>
                    <button id="custom-btn" type="button">Upload file</button>
                </div>
                <div id="pop-up">Student Added Successfully</div>
            </div>
            <input type="submit" id="submit" value="Register">
        </form>
    </div>
    <script src="register-events.js"></script>
    <script src="addStudent.js"></script>
</body>
</html>