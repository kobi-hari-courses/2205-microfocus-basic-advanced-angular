import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";
import { AppState } from "./app.state";

export function getIsQuizDone(state: AppState): boolean {
    return state.answers.length === state.questions.length;
}

export function getCurrentQuestionIndex(state: AppState): number {
    return state.answers.length;
}

export function getCurrentQuestion(state: AppState): Question | undefined {
    const index = getCurrentQuestionIndex(state);
    return state.questions[index];
}

export function enterAnswer(state: AppState, answerIndex: number): AppState {
    const currentQuestion = getCurrentQuestion(state);

    if (currentQuestion === undefined) return state;

    const newAnswer: Answer = {
        answerIndex: answerIndex,
        isCorrect: (currentQuestion.correctAnswer === answerIndex)
    }

    return {
        ...state, 
        answers: [...state.answers, newAnswer]
    }
}