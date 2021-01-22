const initialState = {
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVEFROMCART":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.id;
        }),
      };
    default:
      return state;
  }
}
