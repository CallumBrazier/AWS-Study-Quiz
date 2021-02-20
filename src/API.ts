import { shuffleArray } from "./Utils";

import { Questions } from "./Questions";

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  note: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async () => {
  let AWSQuestions = await Questions;
  let random = AWSQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  console.log(random);

  return random.map((awsquestion: Question) => ({
    ...awsquestion,
    answers: shuffleArray([
      ...awsquestion.incorrect_answers,
      awsquestion.correct_answer,
    ]),
  }));
};
