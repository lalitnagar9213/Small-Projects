const quizData = [
    {
        ques: 'What is the fullform of CSS ?',
        a: "Craving Styles",
        b: "Cascading Style Sheet",
        c: "I don't know",
        d: "none of the above",
        correct: "b",
    },
    {
        ques: 'What is the fullform of HTML ?',
        a: "hyper text markup language",
        b: 'hello to mini land',
        c: 'markup language',
        d: "none of the above",
        correct: "a",
    },
    {
        ques: 'What is the fullform of JS ?',
        a: 'james bond',
        b: 'jaivir singh',
        c: 'Java Script',
        d: 'Jungle stories',
        correct: 'c',
    },
]

let index = 0;
let right = 0;
    wrong = 0;
    total = quizData.length;

let questionbox = document.querySelector("#question");
let inputs = document.querySelectorAll(".option");


const loadQuiz = () => {

    if(total == index){
        return endQuiz()
    }

    reset()

    let data = quizData[index];
    questionbox.innerHTML = `${index + 1}) ${data.ques}`
    inputs[0].nextElementSibling.innerText = data.a;
    inputs[1].nextElementSibling.innerText = data.b;
    inputs[2].nextElementSibling.innerText = data.c;
    inputs[3].nextElementSibling.innerText = data.d;
}



document.querySelector("#submitbtn").addEventListener(
    "click",
    () => {
        let data = quizData[index];
        let ans = getAns()
        if(ans === data.correct){
            right++;
        }else {
            wrong++;
        }
        index++;
        loadQuiz()
    })

const getAns = () => {
    let ans;
    inputs.forEach(
        (inputA1) => {
            if(inputA1.checked){
                ans = inputA1.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    inputs.forEach(
        (inputA1) => {
            inputA1.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = `
    <div class="col-box">
        <h2 id="question">Thank you for playing the quiz.Your Score is ${right}/${total}. </h2>
        
    </div>
    `
}

loadQuiz(index);