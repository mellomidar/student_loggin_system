<?php
    include "../admin/connect_db.php";
    $qr_code = $_POST['qr_code'];

    echo response($qr_code);

    function response($code){
        $query = "SELECT lname FROM student WHERE id = $code";
        $result = mysqli_query($GLOBALS['conn'], $query);
        $row = mysqli_fetch_assoc($result);
        if(isset($row['lname'])){
            return "found";
        }
        return "not found";
    }
?>