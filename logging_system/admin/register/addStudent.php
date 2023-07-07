<?php
    //include database configuration file
    include_once "../connect_db.php";
    $valid_extensions = array('jpeg', 'jpg', 'png');
    $path = '../../assets/images/student-images/';

    $id = $_POST['id-number'];
    $lastname = strtoupper($_POST['lname']);
    $firstname = strtoupper($_POST['fname']);
    $course = $_POST['course'];
    $yr_lvl = $_POST['yr-lvl'];
    $section = $_POST['section'];
    $filename = "student-photo.png"; // default file name if no selected profile photo

    if($_FILES['image']){
        $img = $_FILES['image']['name'];
        $tmp = $_FILES['image']['tmp_name'];
        $path = $path . strtolower($img);
        // get uploaded file's extension
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));

        if (in_array($ext, $valid_extensions)) {
            if (move_uploaded_file($tmp, $path)) {
                $filename = str_replace('../../assets/images/student-images/','',$path);
            } 
        } 
    }
    //insert form data in the database
    $insert = $conn->query("INSERT INTO student(id, lname, fname, course, yr, section, photo)
    VALUES('$id', '$lastname', '$firstname', '$course', '$yr_lvl',  '$section', '$filename')");
?>