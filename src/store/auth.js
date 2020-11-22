import firebase from 'firebase/app';

export default {
  actions: {
    // eslint-disable-next-line no-empty-pattern
    async login({ /* dispatch, commit  */}, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};
