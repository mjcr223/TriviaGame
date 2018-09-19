//CURRENTLY: slide starts at zero, when you click the try me button it calls
//buildQuiz(0) which populates the current question.
//FIX: dont rig a call to buildQuiz to be zero, n needs to be able to loop through 
// any number between 0-24. also the answers are not showing.

$(document).ready(function() {

const myQuestions = [
    {
        id: 0,
        question: "How many seasons of South Park have been aired?",
        answers: [
             "a) 12",
             "b) 15",
             "c) 17",
             "d) 21"
        ],
        correctAnswer: "d"
    },
    {
        id: 1,
        question: "What is the name of the Broadway musical written by the creators of South Park?",
        answers: [
            "a) Wicked",
            "b) South Park the Musical",
            "c) The Book of Mormon",
            "d) Shenanigans"
        ],
        correctAnswer: "c"
    },
    {
        id: 2,
        questions: "When did the first episode of South Park air on TV?",
        answers: [
             "a) 1997",
             "b) 2000",
             "c) 1998",
             "d) 2003"
        ],
        correctAnswer: "a"
    },
    {
        id: 3,
        questions: "What are the names of the creators of South Park?",
        answers: [
            "a) Seth Rogan and James Franco",
            "b) Seth Macfarlane and Cherry Chevapravatdumrong",
            "c) Trey Parker and Matt Stone",
            "d) Justin Roiland and Dan Harmond"
        ],
        correctAnswer: "c"
    },
    {
        id: 4,
        question: "What is the name of the band that produced the intro song for South Park?",
        answers: [
            "a) Primus",
            "b) Les Claypool",
            "c) Oysterhead",
            "d) Mr. Bungle"
        ],
        correctAnswer: "a"
    },
    {
        id: 5,
        question: "What are the names of the four main characters in South Park?",
        answers: [
            "a) Dennis, Mac, Charlie, Dee",
            "b) Stan, Kyle, Kenny, Cartman",
            "c) Jack, Kate, Sawyer, Michael",
            "d) Eric, Kelso, Fez, Hyde"
        ],
        correctAnswer: "b"
    },
    {
        id: 6,
        question: "What is Cartman's first name?",
        answers: [
            "a) Mitch",
            "b) Jeff",
            "c) Eric",
            "d) Hank"
        ],
        correctAnswer: "c"
    },
    {
        id: 7,
        question: "Who does the guest voice appearance in the episode Rainforest Shmainforest",

        answers: [
            "a) Tina Fey",
            "b) Jennifer Aniston",
            "c) Chelsea Handler",
            "d) Pamela Anderson"
        ],
        correctAnswer: "b"
    },
    {
        id: 8,
        question: "What are the names of the two handicapped characters in South Park?",
        answers: [
            "a) Timmy and Jimmy",
            "b) Willy and Billy",
            "c) Timmy and Tommy",
            "d) Benny and Lenny"
        ],
        correctAnswer: "a"
    },
    {
        id: 9,
        question: "What is the name of Stan's girlfriend?",
        answers: [
            "a) Samantha",
            "b) Bebe",
            "c) Wendy",
            "d) Lexus"
        ],
        correctAnswer: "c"
    },
    {
        id: 10,
        question: "Until they began animating their show digitally, what materials did the creators originally use to create the show?",
        answers: [
            "a) Cardboard cutouts",
            "b) Colored Pencils",
            "c) Construction Paper",
            "d) Markers"
        ],
        correctAnswer: "c"
    },
    {
        id: 11,
        question: "How many goth kids are there at South Park elementary?",
        answers: [
            "a) 2",
            "b) 4",
            "c) 6",
            "d) 1"
        ],
        correctAnswer: "b"
    },
    {
        id: 12,
        question: "According to South Park, what is the solution to a giant Guinea Pig invasion?",
        answers: [
            "a) A giant half chicken, half squirrel",
            "b) Pan-flute bands",
            "c) Billy Joel",
            "d) ManBearPig"
        ],
        correctAnswer: "b"
    },
    {
        id: 13,
        question: "What country is Kyle's brother Ike from?",
        answers: [
            "a) Australia",
            "b) Mexico",
            "c) Russia",
            "d) Canada"
        ],
        correctAnswer: "d"
    },
    {
        id: 14,
        question: "What is the name of the character who is a twitching, ADD coffee addict?",
        answers: [
            "a) Pip",
            "b) Tweek",
            "c) Craig",
            "d) Token"
        ],
        correctAnswer: "b"
    },
    {
        id: 15,
        question: "What is the staple characteristic of Canadians in South Park?",
        answers: [
            "a) Crazy flapping heads",
            "b) Much shorter than other characters",
            "c) All of them are to nice",
            "d) They all wear hockey gear"
        ],

        correctAnswer: "a"
    },

    {
        id: 16,
        question: "What is the cartoon that all of the boys in South Park watch?",

        answers: [
            "a) Fightin' round the world",
            "b) Friends",
            "c) Terrance and Phillip",
            "d) CharDeeMacDennis"
        ],

        correctAnswer: "c"
    },

    {
        id: 17,
        questions: "What former notorious dictator plays Satan's sidekick in the show South Park?",

        answers: [
            "a) Adolf Hitler",
            "b) Saddam Hussein",
            "c) Joseph Stalin",
            "d) Benito Mussolini"
        ],

        correctAnswer: "b"
    },

    {
        id: 18,
        question: "Which Character dies in almost every episode?",

        answers: [
            "a) Clyde",
            "b) Tweek",
            "c) Cartman",
            "d) Kenny"
        ],

        correctAnswer: "d"
    },

    {
        id: 19,
        question: "On average, how long does it take for the producers to script and animate an episode?",

        answers: [
            "a) 2 weeks",
            "b) 2 months",
            "c) 6 days",
            "d) 1 month"
        ],

        correctAnswer: "c"
    },

    {
        id: 20,
        question: "What is the name of Butter's super-villain alter ego?",

        answers: [
            "a) Professor Chaos",
            "b) Doctor Mania",
            "c) Professor Doom",
            "d) General Disarray"
        ],

        correctAnswer: "a"
    },

    {
        id: 21,
        question: "What is the name of the cop in the town of South Park?",

        answers: [
            "a) Officer Dangle",
            "b) Officer Barbrady",
            "c) Officer Junior",
            "d) Ranger McFriendly"
        ],

        correctAnswer: "b"
    },

    {
        id: 22,
        question: "What is the name of the counselor at South Park Elementary?",

        answers: [
            "a) Mr. Lipscomb",
            "b) Mr. Mackey",
            "c) Mr Gibbs",
            "d) Mr. Hinder"
        ],

        correctAnswer: "b"
    },

    {
        id: 23,
        question: "What is Towlie's catch phrase?",

        answers: [
            "a) No, You're a towel",
            "b) That's the melody to funky town!",
            "c) Don't forget to bring a towel",
            "d) Wanna get high?"
        ],

        correctAnswer: "c"
    },

    {
        id: 24,
        question: "What is Cartman's favorite fast food restaurant?",

        answers: [
            "a) Wendy's",
            "b) Arby's",
            "c) KFC",
            "d) McDonald's"
        ],

        correctAnswer: "c"
    }

];

function buildQuiz(currentSlide) {
const myQuestions= document.getElementById('question');
const answerA = document.getElementById('a');
const answerB = document.getElementById('b');
const answerC = document.getElementById('c');
const answerD = document.getElementById('d');


myQuestions.innerHTML= myQuestions[0].question;
answerA.innerHTML=myQuestions[0].answers[0];
answerB.innerHTML=myQuestions[0].answers[1];
answerC.innerHTML=myQuestions[0].answers[2];
answerD.innerHTML=myQuestions[0].answers[3];



     const output = [];

     myQuestions.forEach((currentQuestion) => {

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
         

        }




 function showResults() {

     const answerContainers = quizContainer.querySelectorAll('.answers');
     let numCorrect = 0;
     myQuestions.forEach( (currentQuestion, questionNumber) => {
         const answerContainer = answerContainers[questionNumber];
         const selector = 'input[name=question'+questionNumber+']:checked';
         const userAnswer = (answerContainer.querySelector(selector) ||
        {}).value;

             if(userAnswer===currentQuestion.correctAnswer){
                 numCorrect++;
                 answerContainers[questionNumber].style.color = 'lightgreen';

             }
             else{
                answerContainers[questionNumber].style.color = 'red';

             }
     } );

     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

 }

function showSlide(n) {
    
    slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
            currentSlide = n;

            if(currentSlide === 0) {
                previousButton.style.display = "none";
            }   else {
                previousButton.style.display = "inline-block";
            }

            if(currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }


}

    function showNextSlide() {
        showSlide(currentSlide+= 1);
    }
    function showPreviousSlide() {
        showSlide(currentSlide-=1);
    }




buildQuiz(currentSlide);


const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slides");
showSlide(n);



submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

}
 