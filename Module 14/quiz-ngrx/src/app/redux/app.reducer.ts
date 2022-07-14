import { createReducer, on } from "@ngrx/store";
import { enterAnswer } from "./app.helpers";
import { initialAppState } from "./app.state";
import { AppActions } from "./app.types";

export const appReducer = createReducer(initialAppState, 
    on(AppActions.reset, () => initialAppState), 

    on(AppActions.answerCurrentQuestion, (state, action) => enterAnswer(state, action.answerIndex))

    );
