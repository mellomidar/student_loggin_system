<?php
    include "../connect_db.php";
    $return_arr = array();

    $query = "SELECT * FROM student ORDER BY course";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $lname = $row['lname'];
        $fname = $row['fname'];
        $course = $row['course'];
        $yr = $row['yr'];
        $section = $row['section'];
        $filename = $row['photo'];

        $return_arr[] = array("id" => $id,
                        "lname" => $lname,
                        "fname" => $fname,
                        "course" => $course,
                        "yr" => $yr,
                        "section" => $section,
                        "filename" => $filename);
    }

    // Encoding array in JSON format
    echo json_encode($return_arr);
?>