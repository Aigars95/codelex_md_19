import quizList from "./data/quizlist"

const startMenu = document.querySelector('.js-start')
const quizButtons = startMenu.querySelectorAll('.js-button--quize')

const quizConteiner = document.querySelector('.js-quiz')
const question: HTMLElement = quizConteiner.querySelector('.js-question')
const answers:HTMLElement = quizConteiner.querySelector('.js-answers')
const nextQuestionButton = quizConteiner.querySelector('.js-next')
const numberOfQuestion: HTMLElement = quizConteiner.querySelector('.js-number-of-question')
const questionCount: NodeListOf<HTMLElement> = document.querySelectorAll('.js-question-count')

const quizResult: HTMLElement = document.querySelector('.js-quiz-result')
const quizCorrectAnswer: HTMLElement = document.querySelector('.js-number-of-correct')
const quizButtonGoToStart = document.querySelector(".js-button-tostart")
const quizButtonTryAgain = document.querySelector(".js-button-try")

let radioInput = document.querySelectorAll('.js-radio');;

let questionList = quizList[0]

const createQuestionElement = (question: string) => {
    const questionElement = document.createElement('h2');
    questionElement.innerText = question;
    questionElement.classList.add("heading2","question__title")
    return questionElement
}

const createAnswerElements = (answer: string, index: number) =>{
    const answerInput = document.createElement('input');
    answerInput.classList.add("input__answer", "js-radio")
    answerInput.type = "radio";
    answerInput.id = "answer_" + index;
    answerInput.name = "quiz";

    const answerLabel = document.createElement('label');
    answerLabel.classList.add("label__answer")
    answerLabel.setAttribute("for", "answer_"+ index)
    answerLabel.innerText = answer;
    return [answerInput, answerLabel]
    
}

const createQuizeContainer = ((QuestionIndex: number) => {
    question.append(createQuestionElement(questionList[QuestionIndex].question));

for(let i = 0; i< questionList[QuestionIndex].answers.length; i++){
    let ansewerElements = createAnswerElements(questionList[QuestionIndex].answers[i].text, i)
    answers.append(ansewerElements[0])
    answers.append(ansewerElements[1])
}
radioInput = document.querySelectorAll('.js-radio');
})

let indexOfquestion = 0;
numberOfQuestion.innerText = (indexOfquestion + 1).toString();
questionCount.forEach((element) => {
    element.innerText = questionList.length.toString();
})

let selectedAnswerIndex = -1;
const isAnswerchecked = (radioAnswer: NodeList) =>{
    
    radioAnswer.forEach((item: HTMLInputElement, index) => {
        if(item.checked){
            selectedAnswerIndex = index;
        }
    })
    if(selectedAnswerIndex === -1){
        return false;
    }
    return true;

}


quizButtons.forEach((button, index) =>{
    button.addEventListener('click', ()=>{
        questionList = quizList[index]
        console.log(questionList)
        startMenu.classList.add('hide')
        quizConteiner.classList.remove('hide')


        createQuizeContainer(indexOfquestion);

        let correctAnswersCount = 0;

        nextQuestionButton.addEventListener('click', () =>{
    
            if(!isAnswerchecked(radioInput)){
                alert("You need to choese answer!!!");
                return
            }
            else{
                console.log(isAnswerchecked(radioInput))
                if(questionList[indexOfquestion].answers[selectedAnswerIndex].correct){
                    correctAnswersCount++;
                }
            selectedAnswerIndex = -1;
            }

            if(indexOfquestion !== questionList.length-1){
                question.innerHTML="";
                answers.innerHTML ="";
                indexOfquestion++;
                createQuizeContainer(indexOfquestion);
                radioInput = document.querySelectorAll('.js-radio');
                numberOfQuestion.innerText = (indexOfquestion + 1).toString();
            }
            else{
                indexOfquestion = 0;
                question.innerHTML="";
                answers.innerHTML ="";
                quizConteiner.classList.add("hide");
                quizResult.classList.remove("hide");
                quizCorrectAnswer.innerText = correctAnswersCount.toString();
                
            }
        })
    })
})

quizButtonGoToStart.addEventListener('click', ()=>{
    location.reload()
})













