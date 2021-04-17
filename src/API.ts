import { shuffleArray } from "./Utils";

import { Questions } from "./Questions";
import { CDAQuestions } from "./CDAQuestions";

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  note: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (quizset: string) => {
  if (quizset === "CCP") {
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
  } else if (quizset === "CDA") {
    let AWSQuestions = await CDAQuestions;
    let random = AWSQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    console.log(random);

    return random.map((awsquestion: Question) => ({
      ...awsquestion,
      answers: shuffleArray([
        ...awsquestion.incorrect_answers,
        awsquestion.correct_answer,
      ]),
    }));
  } else {
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
  }
};
