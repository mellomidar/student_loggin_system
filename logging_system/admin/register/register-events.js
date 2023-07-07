let custom_btn = document.getElementById('custom-btn');
let file_picker = document.getElementById('stud-photo');
let custom_txt = document.getElementById('upload-txt');
let img_preview = document.getElementById('photo-preview');
let preview_txt = document.getElementById('preview-txt');
let file_name = document.getElementById('filename'); 

//programmably clicking submit button
custom_btn.addEventListener('click', ()=> {
    file_picker.click();
});

// photo preview
file_picker.addEventListener('change', (e)=>{
    if(file_picker.value) {
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        img_preview.src = url;
        
        // getting file name for preview
        custom_txt.innerHTML = file_picker.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        //filename with location after upload
        file_name.value = custom_txt.innerHTML;

        img_preview.style.display = "block";
        preview_txt.style.display = "none"; 
    } else {
        custom_txt.innerHTML = "No file chosen";
        img_preview.style.display = "none";
        preview_txt.style.display = "block"; 
    }
});

//pop up success message
function showPopUp(){
    document.getElementById("pop-up").style.display = "block";
    setTimeout(()=>{
        document.getElementById("pop-up").style.display = "none";
    }, 5000);   
}

