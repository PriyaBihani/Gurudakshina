const initState = {
  authError: null
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: action.err
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
  }
};
