import { InjectionToken } from "@angular/core";

export const DATA_BASE_URL = new InjectionToken<string>('Data Base Url');

export const TOKEN_WITH_NO_INJECTOR = new InjectionToken<number>('Token that nobody provides');

export const RANDOM_VALUE = new InjectionToken<number>('Random Number');

export const GET_PEOPLE_URL = new InjectionToken<string>('Get People URL');

export const RANDOM_VALUE_GENERATOR = new InjectionToken<() => number>('Random value generator');

export const CURRENT_DATE = new InjectionToken<number>('Current Date');

export const CURRENT_DATE_AS_STRING = new InjectionToken<() => string>('CURRENT DATE AS STRING');


export const A_TOKEN = new InjectionToken<number>('The A value');