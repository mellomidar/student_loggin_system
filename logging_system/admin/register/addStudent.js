$(document).ready(function(e) {
    $("#register-form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "addStudent.php",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function () {
                $("#register-form")[0].reset(); 
                $("#preview-txt").show();
                $("#photo-preview").hide();
                $("#upload-txt").html("No file chosen");
                showPopUp();
            }
        });
    });
});