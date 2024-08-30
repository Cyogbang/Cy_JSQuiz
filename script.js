const enterQuiz = document.querySelector (".Start_BTN button");
const instructions = document.querySelector (".intro_BOX");
const quitQuiz = document.querySelector (".exit_BTN");
const continueQuiz = document.querySelector (".Ctnue_BTN");
const quizPG = document.querySelector (".question_BOX");
const entryPG = document.querySelector (".start_PG");
const answers = document.querySelector (".options");
const countdown = document.querySelector (".countdown");
const timeLine = document.querySelector (".timer_line");

enterQuiz.onclick = () => {
    entryPG.style.display = "none";
    instructions.style.display = "block";
}

quitQuiz.onclick = () => {
    instructions.style.display = "none";
    entryPG.style.display = "block";
}

continueQuiz.onclick = () => {
    instructions.style.display = "none";
    quizPG.style.display = "block";
    showquestions(0);
    questioncounter(1);
    timeCount(20);
    startTimerline(0);
}

let counts = 0;
let questNUM = 1;
let counter;
let timeValue = 20;
let widthValue = 0;

const nxt_BTN = document.querySelector (".qst_Footer .btn");
const resultBox = document.querySelector ("result_BOX");
const replay = document.querySelector (".replayQuiz");
const exitQuiz = document.querySelector ("exitQuiz");

nxt_BTN.onclick = () => {
    if (counts < questions.length - 1) {
        counts++;
        questNUM++;
        showquestions(counts);
        questioncounter(questNUM);
        clearInterval(counter);
        timeCount(timeValue);
        clearInterval(counterLine);
        startTimerline(widthValue);
        nxt_BTN.style.display = "none";
    } else {
        console.log("You are done");
        showResultBox();
    }
}

function showquestions(index) {
    const quest = document.querySelector (".question");
    
    let queTag = "<span>"+ questions[index].question +"</span>";
    let ansTag = '<div class="ans shadow-sm">'+ questions[index].options[0] + '</div>'
                + '<div class="ans shadow-sm">'+ questions[index].options[1] + '</div>'
                + '<div class="ans shadow-sm">'+ questions[index].options[2] + '</div>'
                + '<div class="ans shadow-sm">'+ questions[index].options[3] + '</div>';
    quest.innerHTML = queTag;
    answers.innerHTML = ansTag;
    const option = answers.querySelectorAll (".ans"); 
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let correct_Icon = '<span class="check me-3"><i class="bi bi-check"></i></i></span></div>';
let wrong_Icon = '<span class="times me-3"><i class="bi bi-x"></i></span></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let UserAns = answer.textContent;
    let correctAnswer = questions[counts].answ;
    let all_options = answers.children.length;
    
    if (UserAns == correctAnswer) {
        answer.classList.add("correct");
        console.log("you are correct");
        // answer.insertAdjacentHTML("beforeend", correct_Icon);
    } else {
        answer.classList.add("incorrect");
        console.log("your are wrong");
        answer.insertAdjacentHTML("beforeend", wrong_Icon);
    }

    for (let i = 0; i < all_options; i++) {
        answers.children[i].classList.add("disabled");
    }
    nxt_BTN.style.display = "block";

    for (let i = 0; i < all_options; i++) {
        if(answers.children[i].textContent == correctAnswer){
            answers.children[i].setAttribute("class", "ans correct");
            answers.children[i].insertAdjacentHTML("beforeend", correct_Icon);
        }
    }
}

function showResultBox() {
    quizPG.style.display = "none";
    resultBox.style.display = "block";
}

function timeCount(time){
    counter = setInterval(timer, 1000);
    function timer(){
        countdown.textContent = time;
        time--;
        if(time < 9){
            let addZero = countdown.textContent;
            countdown.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            countdown.textContent = "00";
        }
    }
}

function startTimerline(time){
    counterLine = setInterval(timer, 43);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 480) {
            clearInterval(counterLine);
        }
    }
}

// const answer = document.querySelector (".options");
// let i = questions[index].ans;

// answer.onclick = () => {
//         if (i == "true") {
//             console.log("correct answer");
//         } else {
//             console.log("incorrect");
//         }
// }

function questioncounter(index) {
    const Quest_Counter = document.querySelector (".counter");
    let countTag = '<span>Question<p class="mx-1 fw-bold">'+ index +'</p>of<p class="ms-2 fw-bold">'+ questions.length +'</p></span>';
Quest_Counter.innerHTML = countTag;
}