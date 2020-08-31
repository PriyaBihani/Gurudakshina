export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        const functions = firebase.functions();
        const errMessage = functions.httpsCallable("errMessage");
        errMessage(credentials.email)
          .then(res => {
            console.log(res);
            const err = res.data;
            dispatch({
              type: "LOGIN_ERROR",
              err
            });
          })
          .catch(er => {
            console.log(err);
          });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      });
  };
};
