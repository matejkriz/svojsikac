// @flow

// Algebraic types are composable, so it makes sense to have them at one place.
// blog.ploeh.dk/2016/11/28/easy-domain-modelling-with-types

// Reducers

export type IntlState = {
  currentLocale: ?string,
  defaultLocale: ?string,
  initialNow: ?number,
  locales: ?Array<string>,
  messages: ?Object,
};

// State

export type State = {
  intl: IntlState,
};

// Actions

export type Action =
    { type: 'SET_CURRENT_LOCALE', payload: { locale: string } }
  ;
