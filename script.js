let questions = document.querySelectorAll(".question");

questions.forEach((question) =>{
    question.addEventListener("click",() => {
      let answer = question.nextElementSibling;
      if(answer.style.display == "block"){
        answer.style.display = "none";
      }else{
        answer.style.display = "block";
      }
})  
    })
    