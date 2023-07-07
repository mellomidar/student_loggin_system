$(document).ready(function() {
    $("#code_validaton_form").on("submit", function(e){
        e.preventDefault();
        let dataString = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "log_validator.php",
            data: dataString,
            success: function (response){
                //if student is in database
                if(response == "found"){
                    confirm(); //call funtion from scanner.js
                } else {
                    alertError();
                }
            }
        });
    });
    $("#update").on("submit", function(e) {
        e.preventDefault();
        let dataString = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "addLog.php",
            data: dataString,
            success: function (response) {
                updateRecentLogs(response);
            }
        });
    });
});