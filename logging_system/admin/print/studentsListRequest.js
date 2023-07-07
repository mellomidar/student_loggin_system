$(document).ready(function(){
    //generate students list on page load
    $.ajax({
        url: 'getStudentsList.php',
        type: 'post',
        dataType: 'JSON',
        success: function(response){
            let len = response.length;
            for(let i = 0; i < len; i++){
                // line breaks matter here
                let content = `${response[i]['id']} 
                            ${response[i]['fname']} ${response[i]['lname']} 
                            ${response[i]['course']} ${response[i]['yr']} ${response[i]['section']}`;

                $("#students_chkbox").append(
                    `<div id="checkbox${i+1}" class="chk-container">
                        <input type="checkbox" name="student_data" value='${content}'>
                    </div>`
                );
                $(`#checkbox${i+1}`).append(
                    `<label for="student_data">${response[i]['id']}</label>
                    <span>${response[i]['lname']}</span>
                    <span>${response[i]['fname']}</span>
                    <span>
                        ${response[i]['course']} 
                        ${response[i]['yr']} 
                        ${response[i]['section']}
                    </span> <br>`
                );
            }
        }
    }); 
});
