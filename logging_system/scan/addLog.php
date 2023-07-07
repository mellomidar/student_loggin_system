<?php
    include "../admin/connect_db.php";
    $logdata = $_POST['logdata'];
    $dataArr = explode(" ", $logdata); // split user input to retrieve id at index 0
    if(isRegistered($dataArr[0])){
        addNewLog($dataArr);
    } else {
        echo "student not found";
    }
    

    // adding new log entry to log table
    function addNewLog($data){
        $id = (int)$data[0];
        $query = "INSERT INTO log(ID, date, time)
        VALUES('$id', '$data[1]', '$data[2]')";
        mysqli_query($GLOBALS['conn'], $query);
        echo $GLOBALS['logdata'] . " ". getPhoto($id);
    }

    function isRegistered($id){
        $query = "SELECT * FROM student WHERE id = '$id'";
        $result = mysqli_query($GLOBALS['conn'], $query);
        if($result) {
            return true;
        }
        return false;
    }

    function getPhoto($id) {
        $query = "SELECT photo FROM student WHERE id = '$id'";
        $result = mysqli_query($GLOBALS['conn'], $query);
        $row = mysqli_fetch_assoc($result);
        return $row['photo'];
    }
?>