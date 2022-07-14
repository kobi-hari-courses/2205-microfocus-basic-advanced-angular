import { createReducer } from "@ngrx/store";
import { initialAppState } from "./app.state";

export const appReducer = createReducer(initialAppState);
