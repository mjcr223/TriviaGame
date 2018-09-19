
const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

const myQuestions = [

    {
        question: "How many seasons of South Park have been aired?",

        answers: {
            a: "12",
            b: "15",
            c: "17",
            d: "21",
        },
        
        correctAnswer: "d"
    },

    {
        question: "What is the name of the Broadway musical written by the creators of South Park?",

        answers: {
            a: "Wicked",
            b: "South Park the Musical",
            c: "The Book of Mormon",
            d: "Shenanigans"
        },

        correctAnswer: "c"
    },

    {
        questions: "When did the first episode of South Park air on TV?",

        answers: {
            a: "1997",
            b: "2000",
            c: "1998",
            d: "2003"
        },

        correctAnswer: "a"
    },

    {
        questions: "What are the names of the creators of South Park?",

        answers: {
            a: "Seth Rogan and James Franco",
            b: "Seth Macfarlane and Cherry Chevapravatdumrong",
            c: "Trey Parker and Matt Stone",
            d: "Justin Roiland and Dan Harmond"
        },

        correctAnswer: "c"
    },

    {
        question: "What is the name of the band that produced the intro song for South Park?",

        answers: {
            a: "Primus",
            b: "Les Claypool",
            c: "Oysterhead",
            d: "Mr. Bungle"
        },

        correctAnswer: "a"
    },

    {
        question: "What are the names of the four main characters in South Park?",

        answers: {
            a: "Dennis, Mac, Charlie, Dee",
            b: "Stan, Kyle, Kenny, Cartman",
            c: "Jack, Kate, Sawyer, Michael",
            d: "Eric, Kelso, Fez, Hyde"
        },

        correctAnswer: "b"
    },

    {
        question: "What is Cartman's first name?",

        answers: {
            a: "Mitch",
            b: "Jeff",
            c: "Eric",
            d: "Hank"
        },

        correctAnswer: "c"
    },

];

function buildQuiz() {

    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers) {

                answers.push(
                    `<label>
                    <input type = "radio" name = "question${questionNumber}"
                    value = ${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`

                );
            }
            output.push(
                `<div class = "question"> ${currentQuestion.question} </div>
                <div class = "answers"> ${answers.join('')} </div>`
            );

        }
    );
        quizContainer.innerHTML = output.join('');


};






function showResults() {}



buildQuiz();



submitButton.addEventListener('click', showResults);

