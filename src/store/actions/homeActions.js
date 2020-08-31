export const AddHomeContent = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("HomePage")
      .add({
        ...data
      })
      .then(() => {
        dispatch({ type: "ADDED_HOME_CONTENT_SUCCESSFULLY" });
      })
      .catch(err => {
        dispatch({
          type: "ERROR_ADDING_HOME_CONTENT",
          err
        });
      });
  };
};

export const UpdateHomeContent = (state, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("HomePage")
      .doc(id)
      .update({
        ...state
      })
      .then(() => {
        dispatch({ type: "UPDATED_HOME_PAGE_DATA_SUCCESSFULLY" });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const DeleteHomeContent = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("HomePage")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETED_HOME_PAGE_SAFELY" });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
