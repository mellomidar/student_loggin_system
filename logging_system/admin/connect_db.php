<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db_name = "logging_system";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db_name);
    // Check connection
    if($conn->connect_error){
        die("Unable to connect database: " . $conn->connect_error);
     }
?>