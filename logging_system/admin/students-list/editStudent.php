<?php
    include_once "../connect_db.php";
    $valid_extensions = array('jpeg', 'jpg', 'png');
    $path = '../../assets/images/student-images/';
    
    $current_id = $_POST['prev_id'];
    $newId = $_POST['id'];
    $newLname = $_POST['lname'];
    $newFname = $_POST['fname'];
    $newCourse = $_POST['course'];
    $newYear = $_POST['year'];
    $newSection = $_POST['section'];
    $operation = $_POST['operation'];

    if($operation == "delete"){ // if admin wants to delete student
        $query = "DELETE FROM student WHERE id='$current_id'";
        if(mysqli_query($conn, $query)){
            echo "Deletion successfull!";
        } else {
            echo "Deletion failed!";
        }
    } else { // if admin wants to edit student data
        if(isset($_FILES['filename'])){
            $img = $_FILES['filename']['name'];
            $tmp = $_FILES['filename']['tmp_name'];
            $path = $path . strtolower($img);
            
            $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
    
            if(in_array($ext, $valid_extensions)){
                if(move_uploaded_file($tmp, $path)){
                    $filename = str_replace('../../assets/images/student-images/','',$path);
                }
            }
            $query = "UPDATE student 
                SET id = '$newId', lname = '$newLname', fname = '$newFname',
                course = '$newCourse', yr = '$newYear', section = '$newSection',
                photo = '$filename' WHERE id = '$current_id'";

            if(mysqli_query($conn, $query)){
                echo "Edit successfull!";
            } else {
                echo "Edit failed!";
            }
            
        } else {
            $query = "UPDATE student 
                SET id = '$newId', lname = '$newLname', fname = '$newFname',
                course = '$newCourse', yr = '$newYear', section = '$newSection'
                WHERE id = '$current_id'";
            
            if(mysqli_query($conn, $query)){
                echo "Edit successfull";
            } else {
                echo "Edit failed!";
            }
        }
    }
?>