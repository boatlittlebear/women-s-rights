let count = 0;

function wrongClick()
  {    
    let property = document.getElementById(clicked_id);
    property.style.backgroundColor = "#FF0000"
    count=1;
    if (count == 1){
        alert("ยังไม่ถูกลองอีกครั้งนะ")     
    }


}

function correctClick()
  {
    
    let property = document.getElementById(clicked_id);
    property.style.backgroundColor = "#32CD32"
    count = -1;
    if (count == -1){
        alert("ยินดีด้วยคุณตอบถูก")     
    }

  }