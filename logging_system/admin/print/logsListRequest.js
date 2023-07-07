$(document).ready(function(){
    $("#search-log-form").on("submit", function(e){
        e.preventDefault();
        $("td").remove();
        let dataString = $(this).serialize();
        $.ajax({
            url: 'getLogsList.php',
            type: 'post',
            data: dataString,
            dataType: 'JSON',
            success: function(response){
                if(response['result'] == "none"){
                   $('#log-request-err').show();
                   $("table").hide();
                } else {
                    $('#log-request-err').hide();
                    $("table").show();
                }
                let len = response.length;
                for(let i = 0; i < len; i++){
                    // line breaks matter here
                    $('#logs-table').append(
                        `<tr>
                            <td>${response[i]['id']}</td>
                            <td>${response[i]['date']}</td>
                            <td>${response[i]['time']}</td>
                            <td>${response[i]['lname']}</td>
                            <td>${response[i]['fname']}</td>
                            <td>${response[i]['course']} ${response[i]['yr']} ${response[i]['section']}</td>
                        </tr>`
                    )
                }
            }
        });
    });
});


