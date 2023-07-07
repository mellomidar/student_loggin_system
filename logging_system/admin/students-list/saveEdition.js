$(document).ready(function(e) {
    $("#editStudentForm").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "editStudent.php",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (response) {
                if(response.toLowerCase().includes('successfull')){
                    popUpSuccessMsg(response);
                } else {
                    popUpFailureMsg(response);
                }
            }
        });
    });
});