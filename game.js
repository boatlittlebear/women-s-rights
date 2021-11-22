let count = 0;

function wrongClick(clicked_id) {    
    var property = document.getElementById(clicked_id);
    property.style.background = "#FF0000"
    count=1;
    if (count == 1){
        alert("ยังไม่ถูกลองอีกครั้งนะ")     
    }
}

function correctClick(clicked_id) {
    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1){
        alert("ยินดีด้วยคุณตอบถูก")     
    }
  }