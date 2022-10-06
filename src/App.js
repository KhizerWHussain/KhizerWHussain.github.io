import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questiontext: "How many computer languages are in use?",
      options: [
        { answertext: "2000", isCorrect: true },
        { answertext: "5000", isCorrect: false },
        { answertext: "50", isCorrect: false },
        { answertext: "20", isCorrect: false },
        { answertext: "150", isCorrect: false }
      ]
    },
    {
      questiontext: "Who founded Apple Computer?",
      options: [
        { answertext: "Stephan Fry", isCorrect: false },
        { answertext: "Bill Gates", isCorrect: false },
        { answertext: "Steve Jobs", isCorrect: true },
        { answertext: "Stephan Hawking", isCorrect: false },
        { answertext: "Mark Zukerberg", isCorrect: false }
      ]
    },
     {
      questiontext: "Which of these is not a peripheral, in computer terms?",
      options: [
        { answertext: "Keyboard", isCorrect: false },
        { answertext: "Monitor", isCorrect: false },
        { answertext: "Motherboard", isCorrect: true },
        { answertext: "USB", isCorrect: false },
        { answertext: "Mouse", isCorrect: false }
      ]
    },
    {
      questiontext: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
      options: [
        { answertext: "Blogging", isCorrect: true },
        { answertext: "Telnet", isCorrect: false },
        { answertext: "Gopher", isCorrect: false },
        { answertext: "TCP/IP", isCorrect: false },
        { answertext: "FTP", isCorrect: false }
      ]
    },
     {
      questiontext: "What does the Internet prefix WWW stand for?",
      options: [
        { answertext: "World Width Wickets", isCorrect: false },
        { answertext: "World Wide Web", isCorrect: true },
        { answertext: "World Wide Wrestling", isCorrect: false },
        { answertext: "WorldWide Weather", isCorrect: false },
        { answertext: "Wester Washington World", isCorrect: false }
      ]
    },
    {
      questiontext: "When Javascript was invented?",
      options: [
        { answertext: "1996", isCorrect: false },
        { answertext: "1999", isCorrect: false },
        { answertext: "2009", isCorrect: false },
        { answertext: "2015", isCorrect: false },
        { answertext: "1995", isCorrect: true }
      ]
    },
    {
      questiontext: "Who is the CEO of Tesla",
      options: [
        { answertext: "Jeff Bezos", isCorrect: false },
        { answertext: "Bill Gates", isCorrect: false },
        { answertext: "Steve Jobs", isCorrect: false },
        { answertext: "Jack Ma", isCorrect: false },
        { answertext: "Elon Musk", isCorrect: true }
      ]
    },
    {
      questiontext: "When Blockchain Technology was created?",
      options: [
        { answertext: "October, 2008", isCorrect: true },
        { answertext: "January, 2009", isCorrect: false },
        { answertext: "September, 2009", isCorrect: false },
        { answertext: "June, 2011", isCorrect: false },
        { answertext: "December, 2016", isCorrect: false }
      ]
    },
    {
      questiontext: "when web 3.0 was coined?",
      options: [
        { answertext: "2017", isCorrect: false },
        { answertext: "2019", isCorrect: false },
        { answertext: "2014", isCorrect: true },
        { answertext: "2010", isCorrect: false },
        { answertext: "2018", isCorrect: false }
      ]
    },
    {
      questiontext: "Who is the founder of Microsoft Corporation?",
      options: [
        { answertext: "Steve Jobs", isCorrect: false },
        { answertext: "Elon Musk", isCorrect: false },
        { answertext: "Bill Gates", isCorrect: true },
        { answertext: "Colonel Sanders", isCorrect: false },
        { answertext: "Mukesh Ambani", isCorrect: false }
      ]
    }
  ]
  const [currentquestion, setcurrentquestion] = useState(0);
  const [showscore, setshowscore] = useState(false);
  const [score, setscore] = useState(0);
  const [timer, settimer] = useState(31);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setscore(score + 1);
    }
    const nextquestion = currentquestion + 1;
    if (nextquestion < questions.length) {
      setcurrentquestion(nextquestion);
    }
    else if (nextquestion === questions.length) {
      document.getElementById("time").style.color = "white";
      document.getElementById("time").innerHTML = "";
      settimer(0);
      setshowscore(true);
    }
    else {
      setshowscore(true);
    }
  }

  const quiztime = () => {
    let newtime = timer - 1;
    setTimeout(() => {
      document.getElementById("time").innerHTML = newtime;
      settimer(newtime);
    }, 1000);
    if (newtime <= 0) {
      document.getElementById("time").style.color = "red";
      document.getElementById("time").innerHTML = "Times Up!";
      document.getElementById("timeleft").style.display = "none";  
      document.getElementById("component").className = "disable";
      setTimeout(() => {
        document.getElementById("time").style.color = "white";
        document.getElementById("time").innerHTML = "";
        setshowscore(true);
      }, 1000);
    }
  }

  return (
    <>
     <div className="App">  
        {showscore ? (<div className='score_section'>You Scores {score} out of {questions.length}</div>) : (
        <div id='component'>
          <div className='timerDiv'>
            <div className='timer_window' id='timeleft'>Time Left :</div>
            <div className='timer' id='time'>{quiztime()}</div>
          </div>
          <div className='questionpart'>
             <div className='question'>
              <h1>Question {currentquestion + 1} of {questions.length}</h1>
              <div className='qstext'>{questions[currentquestion].questiontext}</div>
            </div>
            <div className="qs">
              {questions[currentquestion].options.map((options) => (<button key={options.answertext} onClick={() => handleNextQuestion(options.isCorrect)}>{options.answertext}</button>))}
            </div>
          </div>
      </div>)}  
     </div>
    </>
  );
}

export default App;
