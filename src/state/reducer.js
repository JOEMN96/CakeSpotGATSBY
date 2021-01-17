const initialState = {
  logo: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGO":
      return {
        ...state,
        logo: [...state.logo, action.logo],
      };
    default:
      return state;
  }
}
