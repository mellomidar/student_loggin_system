$(document).ready(function(){
    $.ajax({
        url: '../print/getStudentsList.php',
        type: 'post',
        dataType: 'JSON',
        success: function(response){
            let len = response.length;
            for(let i = 0; i < len; i++){
                // dynamically creating table rows 
                // white spaces matter here
                $('#student-table').append(
                    `<tr>
                        <td>${i+1}</td>
                        <td><input type="text" name="id" id="id${i}" value="${response[i]['id']}" readonly></td>
                        <td><input type="text" name="lname" id="lname${i}" value="${response[i]['lname']}" readonly></td>
                        <td><input type="text" name="fname" id="fname${i}" value="${response[i]['fname']}" readonly></td>
                        <td><input type="text" name="course" id="course${i}" value="${response[i]['course']}" readonly></td>
                        <td><input type="text" name="year" id="year${i}" value="${response[i]['yr']}" readonly></td>
                        <td><input type="text" name="section" id="section${i}" value="${response[i]['section']}" readonly></td>
                        <td><input type="text" name="filename" id="filename${i}" value="${response[i]['filename']}" readonly></td>
                        <td>
                            <input type="button" class="edit-btn" id="edit-btn${i}" onclick="editStudent(${i})" value="Edit">
                            <button type="button" class="delete-btn" id="delete-btn${i}" onclick="confirmDelete(${i})"><img src="../../assets/images/delete.png"></i></button>
                            <input type="button" class="cancel-btn" id="cancel-btn${i}" onclick="cancelEdit(${i})" value="Cancel">
                            <input type="submit" class="save-btn" id="save-btn${i}" onclick="saveEdition(${i})" value="Save">
                        </td>
                    </tr>`
                )
            }
        }
    });
});