let count = 0;


function wrongClick(clicked_id, checkid) {
    var property = document.getElementById(clicked_id);
    property.style.background = "#FF0000"
    count = 1;
    if (count == 1) {
        document.getElementById("textpopup").innerHTML = "ยังไม่ถูกจ้าลองใหม่อีกครั้งนะ<br/>";
        document.getElementById(checkid).style.display = "inline";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "none";
        }, 1300);

    }
}

function correctClick0(clicked_id, checkid, img1_1_1, img1_1_2, img1_1_3, img1_2_1, img1_2_2, img1_2_3, pop1) {
    
    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูก<br/>Malala Yousafzai<br/> มะลาละห์ ยูซัฟซัย นักต่อสู้เพื่อสิทธิทางการศึกษาของเด็กผู้หญิงในปากีสถาน ในเดือนตุลาคมปี 2012 เธอถูกลอบยิงแต่ก็รอดชีวิตจากการโจมตี หลังจากที่หายดีเธอก็เริ่มต้นการรณรงค์เรียกร้องสิทธิเพื่อการศึกษาสำหรับเด็กผู้หญิงทั่วโลก และในโอกาสที่เธอมีอายุครบ 16 ปี เธอได้กล่าวคำเรียกร้องต่อสหประชาชาติให้มีการเข้าถึงการศึกษาอย่างเท่าเทียม สหประชาชาติ เรียกวันนั้นว่า “Malala Day” และรวมไปถึงได้รับรางวัลโนเบล สาขาสันติภาพอีกด้วย";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);


    }


    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img1_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img1_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img1_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img1_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img1_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img1_2_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img1_2_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }

    }
    
}
function correctClick1(clicked_id, checkid, img2_1_1, img2_1_2, img2_1_3, img2_2_1, img2_2_2, img2_2_3, img2_2_4) {

    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูก<br/>เธอคือ<br/>Oprah Winfrey<br/>เป็นผู้หญิงที่มีอาชีพทางด้านสื่อมานานเกือบ 30 ปีรายการในแต่ละวันของเธอสามารถดึงดูดผู้ชม ได้มากถึง 14 ล้านคน และเธอยังคงเป็นผู้ทรงอิทธิพลที่สุดคนหนึ่งของโลกโดยได้รับการจัดอันดับให้เป็นคนผิวดำที่ร่ำรวยที่สุดคนหนึ่งของโลกในศตวรรษที่ 20 อีกทั้งยังเป็นหญิงผิวดำที่ใจบุญและยิ่งใหญ่ที่สุดในประวัติศาสตร์ของอเมริการวมถึงถูกจัดให้เป็นมหาเศรษฐีผิวดำคนเดียวในโลกอีกด้วย";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);
    }

    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img2_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img2_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img2_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img2_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img2_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img2_2_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_2_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 4) {
            setTimeout(() => {
                document.getElementById(img2_2_4).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img2_2_4).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }

    }
}

function correctClick2(clicked_id, checkid, img3_1_1, img3_1_2, img3_1_3, img3_1_4, img3_2_1, img3_2_2, img3_2_3) {

    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูกเธอคือ<br/>Aung San Suu Kyi<br/> เธอเป็นประธานพรรคฝ่ายค้าน ได้จัดชุมนุมเรียกร้องให้มีการปฏิรูปประชาธิปไตยอย่างสันติและการเลือกตั้งโดยเสรี อย่างไรก็ตามการประท้วงถูกกองกำลังปราบปรามอย่างทารุณโดยกองทัพซึ่งยึดอำนาจในการรัฐประหารในปี 1988 เธอเป็นหนึ่งในนักโทษการเมืองคนสำคัญที่สุดในโลกที่ถูกจับกุมเกือบ 15 ปีจนได้รับการปล่อยตัวล่าสุดในปี 2010 เธอได้รับรางวัลโนเบลสาขาสันติภาพในปีสำหรับความมุ่งมั่นที่จะต่อต้านการปกครองอย่างสงบกับพม่าที่ปกครองโดยทหารและสำหรับการมอบชีวิตให้กับการต่อสู้เพื่อประชาธิปไตยและสิทธิมนุษยชน";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);


    }

    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img3_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img3_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img3_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img3_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img3_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img3_2_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_2_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 4) {
            setTimeout(() => {
                document.getElementById(img3_1_4).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img3_1_4).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }

    }
}

function correctClick3(clicked_id, checkid, img4_1_1, img4_1_2, img4_1_3, img4_1_4, img4_2_1, img4_2_2) {

    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูกเธอคือ<br/>Tammy Duckworth<br/>เธอสมัครเข้าร่วมกองทัพสหรัฐอเมริกา ในปี พ.ศ. 2535 และเลือกที่จะเป็นนักบินเฮลิคอปเตอร์ ระหว่างที่เธอเข้าร่วมรบในสงครามรุกรานอิรัก เมื่อพ.ศ. 2547 เธอสูญเสียขาทั้งสองข้าง และแขนข้างขวาพิการจากเหตุระเบิดเฮลิคอปเตอร์แพทย์ก็ได้ทำการต่อแขนข้างขวาให้แก่เธอ แต่เธอต้องนั่งบนรถเข็นและใช้ขาเทียม ทางด้านการเมืองนั้นเธอคือสตรีเชื้อสายเอเชียคนแรกที่ได้รับเลือกเข้าสภาแห่งรัฐอิลลินอยส์ วุฒิสมาชิกคนแรกของสหรัฐฯ และสตรีทุพพลภาพคนแรกที่ได้รับเลือกเป็นสมาชิกสภาผู้แทนราษฎรแห่งสหรัฐอเมริกา";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);


    }

    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img4_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img4_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img4_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img4_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img4_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 4) {
            setTimeout(() => {
                document.getElementById(img4_1_4).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img4_1_4).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }

    }
}

function correctClick4(clicked_id, checkid, img5_1_1, img5_1_2, img5_1_3, img5_2_1, img5_2_2, img5_2_3) {

    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูกเธอคือ<br/>ลัดดาวรรณ หลวงอาจ<br/>เธอเกิดและเติบโตในจังหวัดเลย ที่บ้านยึดอาชีพทำไร่ข้าวโพดอยู่บนภูเขา คนในหมู่บ้านไม่ค่อยได้เรียนหนังสือกันแต่ตัวเธอเองเป็นคนชอบอ่านหนังสือ เมื่อเรียนจบชั้น ป.6 พ่อแม่ไม่ให้เธอเรียนต่อ เธอทำงานหาเงินและตัดสินใจไปสมัครเรียนต่อที่มหาวิทยาลัยรามคำแหงคณะนิติศาสตร์และได้มีโอกาสเรียนกับผู้พิพากษาท่านหนึ่งท่านเป็นผู้จุดประกายความฝันทำให้อยากเป็นผู้พิพากษาจนเธอสามารถสอบเป็นผู้พิพากษาได้ตั้งแต่อายุ 27 ปี";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);


    }

    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img5_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img5_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img5_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img5_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img5_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);

            setTimeout(() => {
                document.getElementById(img5_2_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img5_2_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);

        }

    }
}

function correctClick5(clicked_id, checkid, img6_1_1, img6_1_2, img6_1_3, img6_2_1, img6_2_2, img6_2_3) {

    var property = document.getElementById(clicked_id);
    property.style.background = "#32CD32"
    count = -1;
    if (count == -1) {
        document.getElementById("textpopup").innerHTML = "ยินดีด้วยคุณตอบถูกเธอคือ<br/>กชกร วรอาคม<br/>เกชกร วรอาคม เป็นภูมิสถาปนิกไทยซึ่งติด 1 ใน 15 Women Leading the Fight Against Climate Change ของนิตยสาร TIME เธอเคยขึ้นเวที TED Talk ที่สหรัฐอเมริกา 2 ครั้ง และเวทีต่างๆอีกมากมาย สื่อระดับโลกอย่าง World Economic Forum, The Guardian, CNN และ Business Insider ก็เคยสัมภาษณ์ภูมิสถาปนิกหญิงไทยคนนี้ ผลงานที่ทำให้คนมากมายสนใจนักออกแบบเจ้าของบริษัท Landprocess คนนี้ก็คือ การออกแบบ ‘อุทยาน 100 ปี จุฬาฯ’ เพื่อช่วยกักเก็บน้ำให้เมือง ป้องกันน้ำท่วมที่จะเกิดจากปัญหาการเปลี่ยนแปลงสภาพภูมิอากาศในอนาคต";
        setTimeout(() => {
            document.getElementById(checkid).style.display = "inline";
        }, 2000);


    }

    for (var i = 1; i <= 3; i++) {

        if (i == 1) {
            setTimeout(() => {
                document.getElementById(img6_1_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_1_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img6_2_1).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_2_1).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 2) {
            setTimeout(() => {
                document.getElementById(img6_1_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_1_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);
            setTimeout(() => {
                document.getElementById(img6_2_2).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_2_2).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);



        }
        if (i == 3) {
            setTimeout(() => {
                document.getElementById(img6_1_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_1_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);

            setTimeout(() => {
                document.getElementById(img6_2_3).style.opacity = "1";
                setTimeout(function timer() {
                    setTimeout(() => {
                        document.getElementById(img6_2_3).style.opacity = "0";
                    }, 0);
                }, 600);
            }, i * 500);

        }

    }
}

    /*for(var i = 0; i < 100; i++){
      setTimeout(function timer() {
        setTimeout(() => {
            document.getElementById(img1_1_1).style.opacity = "1";
          },i * 500);
        setTimeout(() => {
            document.getElementById(img1_1_1).style.opacity = "0";
          },i * 500);
          console.log("1")
      }, i * 3000);

}*/
//var square = document.getElementById("square"),

function closepop(close) {
    document.getElementById(close).style.display = "none";
  }