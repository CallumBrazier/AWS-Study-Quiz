import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import ResultsCard from "./components/ResultsCard";

//Types
import { QuestionState } from "./API";

//Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}; //can use this object at the end to show all the questions and answers.

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [results, setResults] = useState(false);
  const [summary, setSummary] = useState(false);
  const [quizset, setQuizset] = useState("");

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setResults(false);
    setSummary(false);
    setQuizset("CCP");

    const newQuestions = await fetchQuizQuestions(quizset);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }; //add error handling through a try catch block.

  const startCDA = async () => {
    setLoading(true);
    setGameOver(false);
    setResults(false);
    setSummary(false);
    setQuizset("CDA");

    const newQuestions = await fetchQuizQuestions(quizset);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //User answer
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //Save answer in the array of user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move onto next question, if it isn't the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const resultsSummary = () => {
    setResults(false);
    setGameOver(true);
    setSummary(true);
    setNumber(0);
    console.log("Answers", userAnswers);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>AWS Quiz</h1>
        {userAnswers.length === TOTAL_QUESTIONS && !results && !summary ? (
          <button className="start" onClick={resultsSummary}>
            Results
          </button>
        ) : null}
        {gameOver || (userAnswers.length === TOTAL_QUESTIONS && results) ? (
          <div>
            <button className="start" onClick={startTrivia}>
              Start CCP
            </button>
            <button className="start" onClick={startCDA}>
              Start CDA
            </button>
          </div>
        ) : null}
        {summary ? (
          <ResultsCard
            userAnswers={userAnswers}
            totalQuestions={TOTAL_QUESTIONS}
            correctAnswers={score}
          />
        ) : null}

        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            note={questions[number].note}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
