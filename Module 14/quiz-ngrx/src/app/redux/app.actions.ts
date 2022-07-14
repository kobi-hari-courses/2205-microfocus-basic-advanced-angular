import { createAction, props } from "@ngrx/store";

export const reset = createAction('[User] Reset');

export const answerCurrentQuestion = createAction('[User] Answer Current Question', 
            props<{answerIndex: number}>())


