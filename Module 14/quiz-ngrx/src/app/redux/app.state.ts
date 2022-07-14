import { ALL_QUESTIONS } from "../models/all-questions.data";
import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export interface AppState {
    readonly questions: Question[], 
    readonly answers: Answer[]
}

export const initialAppState: AppState = {
    questions: ALL_QUESTIONS, 
    answers: []
}