const quizData = [
    {
      question: "Siapa yang menemukan hukum gravitasi?",
      options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Umar Hanif Wasyadat"],
      answer: "Isaac Newton"
    },
    {
      question: "Apa nama asli dari superhero Spider-Man?",
      options: ["Bruce Wayne", " Peter Parker", "Clark Kent", "Tony Stark"],
      answer: " Peter Parker"
    },
    {
      question: "Berapa banyak pemain di lapangan dalam tim sepak bola (termasuk kiper)?",
      options: ["11", " 6", "17", "24"],
      answer: "11"
    },
    {
      question: "Siapa penyanyi lagu Shape of You?",
      options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Bruno Mars"],
      answer: "Ed Sheeran"
    },
   
    
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();