import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getIsQuizDone } from "./app.helpers";
import { appFeatureKey, AppState } from "./app.state";

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const questionsCount = createSelector(allQuestions, all => all.length);

export const allAnswers = createSelector(root, state => state.answers);

export const isQuizDone = createSelector(root, state => getIsQuizDone(state));

export const currentQuestionIndex = createSelector(allAnswers, all => all.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);

export const correctAnswers = createSelector(allAnswers, all => all.filter(a => a.isCorrect));

export const worngAnswers = createSelector(allAnswers, all => all.filter(a => !a.isCorrect));

export const correctCount = createSelector(correctAnswers, all => all.length);

export const wrongCount = createSelector(worngAnswers, all => all.length);

export const score = createSelector(questionsCount, correctCount, (questions, corrects) => corrects / questions);