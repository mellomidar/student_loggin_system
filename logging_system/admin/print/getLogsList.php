<?php
    include "../connect_db.php";
    $return_arr = array();
    $userInput = $_POST['search-field'];
    $inputType = $_POST['search-type'];
    $logQuery = "";
    $student = "";

    // getting all 3 types of input (date, id, name) data from logs
    if($inputType == "date"){
        $logQuery = "SELECT * FROM log WHERE date='$userInput'";

    } else if($inputType == "name" || $inputType == "id") {
        $separatedName = explode(' ', $userInput);
        if($inputType == "name"){
            $res = "SELECT * FROM student 
                WHERE (fname='$separatedName[0]' AND lname = '$separatedName[1]')
                OR (lname='$separatedName[0]' AND fname = '$separatedName[1]')";
        } else {
            $res = "SELECT * FROM student WHERE id='$userInput'";
        }
        $student = mysqli_fetch_assoc(mysqli_query($conn, $res));
        $id = $student['id'];
        $logQuery = "SELECT * FROM log WHERE id='$id'";
    }

    $logQueryResult = mysqli_query($conn, $logQuery);

    // if log result is blank, stop executing
    if(mysqli_num_rows($logQueryResult) == 0){
        echo json_encode(array("result" => 'none'));
        exit();
    }

    // fetching logs
    $logs = [];
    while($logRow = mysqli_fetch_assoc($logQueryResult)){
        $logs[] = $logRow;
    }

    // if input type is name execute getStudentRecord function
    if($inputType == "name" || $inputType == "id"){
        getStudentRecord($logs, $student);
        exit();
    }

    // merge and encode log row and student row and encode as json
    function getStudentRecord($logs, $student){
        $merged = array();
        for($i = 0; $i < count($logs); $i++){
            $merged[$i] = array_merge($logs[$i], $student);
        }
        echo json_encode($merged);
    }

    // converting ids into string
    $ids = array_column($logs, 'id');
    $StudentIds = implode(',', $ids);

    // getting student data associated to each log
    $studentsQuery = "SELECT * FROM student where id in ($StudentIds)";
    $studentsQueryResult = mysqli_query($conn, $studentsQuery);

    // fetching student data
    $studentsData = [];
    while($studentRow = mysqli_fetch_assoc($studentsQueryResult)){
        $studentsData[] = $studentRow;
    }

    for($i = 0; $i < count($studentsData); $i++){
        $return_arr[$i] = array_merge($studentsData[$i], $logs[$i]);
    }

    // Encoding array in JSON format
    echo json_encode($return_arr);
?>