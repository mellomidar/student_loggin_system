let scanner = new Instascan.Scanner({
  video: document.getElementById("preview"),
});

let success_audio = new Audio('../assets/audio/beep.wav');
let failed_audio = new Audio('../assets/audio/failed.wav');
let prev = "";
let recent = ["", "", ""];
scanner.addListener("scan", (content) => {
    if(isUnique(content) && isValid(content)) {
        prev = content;
        document.getElementById("qr_code").value = content;
        document.getElementById("submit_code").click();// submit code for checking if it exist in database
        document.getElementById("logdata").value = `${content} ${getDate()}`; //asigning new value to innput field
    } 
});

// code to be called if student exist in the database after code scanned
function confirm(){
    success_audio.play();
    document.getElementById('scan-success').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('submit').click();
        document.getElementById('scan-success').style.display = 'none';
    }, 1000);
}

// code to be called if student does not exist in the database after code scanned
function alertError(){
    failed_audio.play();
    document.getElementById('scan-failed').style.display = 'block';
        setTimeout(()=>{
        document.getElementById('scan-failed').style.display = 'none';
    }, 2000);
}


//starting cameras if there exist
Instascan.Camera.getCameras().then(function (cameras) {
if (cameras.length > 0) {
    scanner.start(cameras[0]);
} else {
    console.error("No cameras found.");
}}).catch(function (e) {
    console.error(e);
});

// returning the entry's date and time
function getDate() {
    var today = new Date();
    var date = today.toISOString().substring(0, 10);
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = `${date} ${time}`;
    return dateTime;
}

//checking if code is not the same as recent code
function isUnique(data) {
    if(prev !== data) {
        return true;
    }
    return false;
}

// checking if code content is a valid format using regex
function isValid(data) {    
    pattern = /[0-9]+/;
    return pattern.test(data);
}

//updating recent logs
function updateRecentLogs(response){
    if(response == "not found"){
        alert("Student is not in database");
        return;
    }
    recent.pop();
    recent.unshift(response);
    for(let i = 0; i < 3; i++){
        // if current log is not set stop executing
        if(!recent[i]){
            return;
        }
        let log_img = `.recent-logs .log:nth-of-type(${i+1}) img`;
        let newLog = recent[i].split(" ");
        let location = "../assets/images/student-images/" + newLog[newLog.length - 1];
        document.querySelector(log_img).src = location;
        
        let info_list = recent[i].split(" ");
        for(let j = 0; j < 3; j++){
            let log_input = `.recent-logs .log:nth-of-type(${i+1}) label:nth-of-type(${j+1}) input`;
            document.querySelector(log_input).value = info_list[j];
        }
    }
}
