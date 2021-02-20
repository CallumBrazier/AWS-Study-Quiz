import React from "react";

//Types
import { AnswerObject } from "../App";

//Styles
import { Wrapper } from "./QuestionCard.styles";

type Props = {
  correctAnswers: number;
  totalQuestions: number;
  userAnswers: any;
};

const ResultsCard: React.FC<Props> = ({
  correctAnswers,
  totalQuestions,
  userAnswers,
}) => (
  <Wrapper>
    <p className="number">
      Results {correctAnswers}/{totalQuestions}
    </p>
    <p>
      {correctAnswers / totalQuestions >= 0.7
        ? `${
            (correctAnswers / totalQuestions) * 100
          }% - Congratulations, you passed!`
        : `${(correctAnswers / totalQuestions) * 100}% - keep trying!`}
    </p>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Question Number</td>
            <td>Question</td>
            <td>Your Answer</td>
            <td>Answered Correctly?</td>
            <td>Correct Answer</td>
          </tr>
        </thead>
        <tbody>
          {userAnswers.map((data: any, index: number) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.question}</td>
                <td>{data.answer}</td>
                <td>{data.correct ? "true" : "false"}</td>
                <td>{data.correctAnswer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </Wrapper>
);

export default ResultsCard;
