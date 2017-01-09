// @flow
import type { Action, Deps } from '../types';
import { Observable } from 'rxjs/Observable';
import { REHYDRATE } from 'redux-persist/constants';

export const appError = (error: Object): Action => ({
  payload: { error },
  type: 'APP_ERROR',
});

export const appOnline = (online: boolean): Action => ({
  payload: { online },
  type: 'APP_ONLINE',
});

export const appShowMenu = (menuShown: boolean): Action => ({
  payload: { menuShown },
  type: 'APP_SHOW_MENU',
});

// Called on componentDidMount aka only at the client (browser or native).
export const appStart = (): Action => ({
  type: 'APP_START',
});

export const appStarted = (): Action => ({
  type: 'APP_STARTED',
});

export const appStop = (): Action => ({
  type: 'APP_STOP',
});

export const appStorageLoaded = (state: Object): Action => ({
  payload: { state },
  type: 'APP_STORAGE_LOADED',
});

const appStartEpic = (action$: any) =>
  action$.ofType(REHYDRATE)
    .map(appStarted);

const appStartedFirebaseEpic = (action$: any, deps: Deps) => {
  const { firebase, getState } = deps;

  const appOnline$ = Observable.create((observer) => {
    const onValue = (snap) => {
      const online = snap.val();
      if (online === getState().app.online) return;
      observer.next(appOnline(online));
    };
    firebase.child('.info/connected').on('value', onValue);
    return () => {
      firebase.child('.info/connected').off('value', onValue);
    };
  });

  const streams = [
    appOnline$,
  ];

  return action$
    .filter((action: Action) => action.type === 'APP_STARTED')
    .mergeMap(() => Observable
      .merge(...streams)
      // takeUntil unsubscribes all merged streams on APP_STOP.
      .takeUntil(
        action$.filter((action: Action) => action.type === 'APP_STOP'),
      ),
    );
};

export const epics = [
  appStartEpic,
  appStartedFirebaseEpic,
];
