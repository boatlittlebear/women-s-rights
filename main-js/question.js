let questions = [
    {
      question: 'ถ้าคุณเจอผู้ชายที่พูดจาโอ้อวดในสายงาน และทำให้คุณดูด้อยคุณจะทำยังไง',
      options: [
        '<span>A</span>ฟังผ่านหู ยิ้มไว้ก่อน ทำตัวเงียบๆ ในที่ทำงาน คิดว่าเป็นเรื่องปกติที่มีคนแบบนี้',
        '<span>B</span>แสดงให้เห็นว่าคุณมีความสามารถด้วยการทำให้เยอะและมากขึ้นกว่าผู้ชายในสายงาน เพื่อลบล้างคำพูดพวกนั้น',
        '<span>C</span>ลาออกไปหาที่ๆ ดีกว่าเดิม'
      ],
      answer: 1
    },
    {
      question: "คุณอยากเป็นทหาร แต่คนอื่นๆไม่เห็นด้วยและคิดว่าคุณไม่เหมาะกับอาชีพนี้เพราะเป็นผู้หญิง",
      options: [
        "<span>A</span>เชื่อครอบครัวและยอมตัดใจจากอาชีพที่คุณอยากทำ",
        "<span>B</span>พิสูจน์ให้เห็นว่าเธอเองก็เป็นทหารได้ ไม่เกี่ยวกับเพศและความแข็งแกร่งของร่างกาย",
        "<span>C</span>หาอาชีพอื่นที่เหมาะกับเพศหญิง"
      ],
      answer: 1
    },
    {
      question: 'ถ้าหากหัวหน้างานให้โปรเจคใหญ่กับคุณ คุณจะตอบว่า',
      options: [
        "<span>A</span>ฉันไม่มีความสามารถขนาดนั้น",
        "<span>B</span>ฉันคิดว่าฉันทำได้ แต่ฉันไม่กล้ารับงานใหญ่ขนาดนี้อยู่ดี",
        "<span>C</span>ได้เลย ฉันจะต้องทำงานนี้ได้อย่างดีเยี่ยมแน่นอน"
      ],
      answer: 2
    }
];

let description = [
    "เพิ่มความนับถือตัวเองของคุณของคุณ แสดงถึงความเข้มแข็ง และกล้าที่จะแสดงออก คุณค่าของเสียงและความคิดเห็น ช่วยสนับสนุนผู้หญิงที่อยู่รอบข้างคุณ ไม่กลัวที่จะใช้เสียงและความสามารถของพวกเขา และอย่าให้คำพูดโอ้อวดหรือคำดูถูกมากดกินความมั่นใจของเราไป",
    "ต่อสู้กับการปฏิเสธ ต่อสู้กับมาตราฐานของสังคมที่ลดทอนสิทธิ์ของสตรี ไม่ว่าจะเป็น มาตราฐานความสวย ความเหมาะสมในการทำงาน การเผชิญกับแง่ลบอยู่เสมอ ดังนั้นเผชิญหน้าและมองในแง่ดีว่ามีผู้หญิงอีกมากมายที่ลบล้างมาตราฐานเหล่านี้ได้เหมือนกัน",
    "เลือกที่จะเป็นนักรบ ไม่ใช่เหยื่อ ไม่ว่าคุณจะรู้สึกท้อแท้หรือหมดหนทางและพบว่ารู้สึกตกเป็นเหยื่อของใครบางคน จงรับรู้ไว้ว่า คุณมีทางเลือกเสมอ ให้พร้อมเรียนรู้และเผชิญหน้าเหมือนนักรบ  เปลี่ยนความคิดและกรอบความคิดของคุณ คุณสามารถทำได้แน่นอน"
]

/* ==== True code ==== */
const questionArea = document.querySelector(".questionArea");
const scoreArea = document.querySelector(".scoreArea");
const scoreText1 = document.querySelector(".scoreText1");
const scorePct = document.querySelector(".scorePct");

//initial data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//reset event
document.querySelector(".scoreArea button").addEventListener("click", () => {
  var url="https://empowered-women.netlify.app"; //Set desired URL here
  var img="https://media.discordapp.net/attachments/883616927925297193/912022146019106846/Frame_92.jpg?width=384&height=683"; //Set Desired Image here
  var totalurl=encodeURIComponent(url+'?img='+img);

  window.open ('http://www.facebook.com/sharer.php?u='+totalurl,'','width=500, height=500, scrollbars=yes, resizable=no');
});

//Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];


    scoreArea.style.display = "none";
    questionArea.style.display = "block";

    document.querySelector(".question").innerHTML = q.question;

    let optionsHtml = "";

    for (let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option">${q.options[i]}</div>`;
    }

    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionsClickEvent);
    });
  } else {
    finishQuiz();
  }
}

function optionsClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op"));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }

  currentQuestion++;
  showQuestion();
}

function finishQuiz() {
  let points = correctAnswers;
  
  if (points >= 2) {
    scorePct.dataset.image = "share1"
  } else if (points >= 1) {
    scorePct.dataset.image = "share2"

  } else if (points == 0) {
    scorePct.dataset.image = "share3"
  }
  
  scoreArea.style.display = "flex";
  questionArea.style.display = "none";
}