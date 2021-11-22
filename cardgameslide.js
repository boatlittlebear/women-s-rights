/*const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')
*/
(function () {
    var slideContainer = $(".slide-container");
  
    slideContainer.slick();
  
    $(".clash-card__image img").hide();
    $(".slick-active").find(".clash-card img").fadeIn(200);
  
    // On before slide change
    slideContainer.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".slick-active").find(".clash-card img").fadeOut(1000);
      }
    );
  
    // On after slide change
    slideContainer.on("afterChange", function (event, slick, currentSlide) {
      $(".slick-active").find(".clash-card img").fadeIn(200);
    });
  })();

/* showQustion(question){
  questionElement.innerText = question.question

}

const question = [{
    question: 'คุณคิดว่าผู้หญิงคนนี้ทำอาชีพอะไร',
    answer: [
        {
            text: 'a', correct: true
        }
    ]
}]*/