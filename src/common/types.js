// @flow
/* eslint-disable no-use-before-define */
import type { Middleware as ReduxMiddleware, Reducer } from 'redux';

// Algebraic types are composable, so it makes sense to have them at one place.
// blog.ploeh.dk/2016/11/28/easy-domain-modelling-with-types
// Using covariants to enforce immutability.
// flow.org/en/docs/frameworks/redux/#toc-typing-redux-state-immutability

// Reducers

export type IntlState = {
  +currentLocale: ?string,
  +defaultLocale: ?string,
  +initialNow: ?number,
  +locales: ?Array<string>,
  +messages: ?Object,
};

// State

export type State = {
  +intl: IntlState,
};

// Actions

export type Action = {
  type: 'SET_CURRENT_LOCALE',
  +payload: { +locale: string },
};

type GetState = () => Object;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>,
) => any;

// Other

export type Reducers = { [reducerName: string]: Reducer<State, Action> };
export type Middlewares = Array<ReduxMiddleware<State, Action>>;
