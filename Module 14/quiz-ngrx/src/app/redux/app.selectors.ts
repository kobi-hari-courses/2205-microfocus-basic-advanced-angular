import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getIsQuizDone } from "./app.helpers";
import { appFeatureKey, AppState } from "./app.state";

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const allAnswers = createSelector(root, state => state.answers);

export const isQuizDone = createSelector(root, state => getIsQuizDone(state));

export const currentQuestionIndex = createSelector(allAnswers, all => all.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);

