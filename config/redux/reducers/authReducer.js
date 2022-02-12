const initialState = {
  dataAuth: undefined,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA_AUTH":
      return {
        ...state,
        dataAuth: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
