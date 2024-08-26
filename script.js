const enterQuiz = document.querySelector (".Start_BTN button");
const instructions = document.querySelector (".intro_BOX");
const quitQuiz = document.querySelector (".exit_BTN");
const continueQuiz = document.querySelector (".Ctnue_BTN");
const quizPG = document.querySelector (".question_BOX");
const entryPG = document.querySelector (".start_PG");

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
}

let counts = 0;
let questNUM = 1;

const nxt_BTN = document.querySelector (".qst_Footer .btn");

nxt_BTN.onclick = () => {
    if (counts < questions.length - 1) {
        counts++;
        questNUM++;
        showquestions(counts);
        questioncounter(questNUM);
    } else {
        console.log("You are done");
    }
}

function showquestions(index) {
    const quest = document.querySelector (".question");
    const answers = document.querySelector (".options");
    
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

function optionSelected(answer){
    let UserAns = answer.textContent;
    let correctAnswer = questions[counts].answ;
    
    if (UserAns == correctAnswer) {
        answer.ClassList.add("correct");
        console.log("you are correct");
    } else {
        answer.ClassList.add("incorrect");
        console.log("your are wrong");
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