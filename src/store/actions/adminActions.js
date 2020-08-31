export const approve = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    const approved = true;
    firestore
      .collection("Needy")
      .doc(data.id)
      .update({
        approved: approved
      })
      .then(() => {
        dispatch({ type: "SUCCESSFULLY_APPROVED" });
      })
      .catch(err => {
        dispatch({ type: "ERROR_APPROVING", err });
      });
  };
};

export const disapprove = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    firestore
      .collection("Needy")
      .doc(data.id)
      .delete()
      .then(() => {
        dispatch({ type: "SUCCESSFULLY_DISAPPROVED" });
      })
      .catch(err => {
        dispatch({ type: "ERROR_DISAPPROVING", err });
      });
  };
};

export const subscribe = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firestore = getFirestore();
    firestore
      .collection("SubList")
      .add({ ...data })
      .then(() => {
        console.log("added subscriber");
        dispatch({ type: "SUBSCRIBE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SUBSCRIBE_ERROR", err });
      });
  };
};

//carousel

export const AddImageToCarousel = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(data);
    const firebase = getFirebase();
    const firestore = getFirestore();
    const fileName = data.selectedFile.name;
    const file = data.selectedFile;
    const storageRef = firebase.storage().ref("carousel_pictures/" + file.name);
    storageRef
      .put(file)
      .then(snapshot => {
        console.log(snapshot);

        snapshot.ref.getDownloadURL().then(imageUrl => {
          console.log(imageUrl);
          if (imageUrl) {
            firestore.collection("Carousel").add({
              imageUrl: imageUrl,
              fileName: fileName
            });
          }
        });
      })
      .then(() => {
        dispatch({ type: "SUCCESS_UPLOADING_CAROUSEL" });
      })
      .catch(err => {
        dispatch({ type: "ERROR_UPLOADING_CAROUSEL", err });
      });
  };
};

export const DeleteImageFromCarousel = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection("Carousel")
      .doc(id)
      .get()
      .then(doc => {
        const fileName = doc.data().fileName;
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`carousel_pictures/${fileName}`);
        imageRef.delete();
        firestore
          .collection("Carousel")
          .doc(id)
          .delete();
      })
      .then(() => {
        dispatch({ type: "SUCCESS_DELETING_CAROUSEL_IMAGE" });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
