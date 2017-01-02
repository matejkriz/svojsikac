/* @flow weak */

import Firebase from 'firebase/app';
import 'firebase/database';
import validate from './validate';

// Ensure only one Firebase instance. I don't know how costly new instance is
// and how to dispose of it. Yes, firebase.initializeApp is weird API.
let firebaseDeps = null;

const createFirebaseDeps = (firebaseConfig) => {
  if (!firebaseDeps) {
    Firebase.initializeApp(firebaseConfig);
    firebaseDeps = {
      firebase: Firebase.database().ref(),
    };
  }
  // // Check whether Firebase works.
  // firebaseDeps.firebase.child('hello-world').set({
  //   createdAt: firebaseDeps.firebaseDatabase.ServerValue.TIMESTAMP,
  //   text: 'Yes!'
  // });
  return firebaseDeps;
};

const configureDeps = (initialState, platformDeps) => ({
  ...platformDeps,
  ...createFirebaseDeps(initialState.config.firebase),
  getUid: () => platformDeps.uuid.v4(),
  now: () => Date.now(),
  validate,
});

export default configureDeps;
