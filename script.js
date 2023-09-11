const questionArray = [...document.getElementsByClassName("questions__card")]

console.log(questionArray)

questionArray.forEach(question => {
  question.addEventListener("click", () => {
    if (question.classList.contains("question__card--revealed")) {
      question.classList.remove("question__card--revealed")
    }
    else {
      questionArray.forEach(question => {
        question.classList.remove("question__card--revealed")
      })
      question.classList.add("question__card--revealed")
    }
  })
})
