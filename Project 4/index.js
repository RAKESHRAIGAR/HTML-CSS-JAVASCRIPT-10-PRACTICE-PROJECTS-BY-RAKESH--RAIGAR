








const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = localStorage.getItem("score");
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 100);
    const randomNumber2 = randomNumber(1, 100);
    const questionType = randomNumber(1, 4);

    let firstNumber;
    let secondNumber;

    if(randomNumber1>randomNumber2 && questionType > 2){
         firstNumber = randomNumber1;
         secondNumber = randomNumber2;
    }else{
        firstNumber = randomNumber2;
        secondNumber = randomNumber1;
    }

    let question;
    let answer;

    // const question = `Q. what is ${randomNumber1} multiply by ${randomNumber2} ?`;
    // const answer=  randomNumber1 * randomNumber2;

    switch(questionType){
    case 1:
    question = `Q. what is ${firstNumber} multiply by ${secondNumber} ?`;
    answer = firstNumber * secondNumber;
    break;
    case 2:
    question = `Q. what is ${firstNumber} Add to ${secondNumber} ?`;
    answer = firstNumber + secondNumber;
    break;
    case 3:
    question = `Q. what is ${firstNumber} Divided By ${secondNumber} ?`;
    answer = firstNumber / secondNumber;
    break;
    case 4:
    question = `Q. what is ${firstNumber} Subtract from ${secondNumber} ?`;
    answer = firstNumber - secondNumber ;
    break;
   default:
    question = `Q. what is ${firstNumber} Subtract from ${secondNumber} ?`;
    answer = firstNumber - secondNumber ;
    break;
    
}    
    return { question, answer };
};

console.log(generateQuestion());

const showQuestion = () => {
    const { question , answer } =generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;

    storedAnswer = answer; 

};

showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormEl);
    const userAnswer = +formData.get("answer");
    if(userAnswer == storedAnswer){
        score += 1;
    }else{
        score -=1;
    }
    scoreEl.innerText = score;
    localStorage.setItem("score",score);
    event.target.reset();
    showQuestion();
    console.log ("answer",userAnswer);
};