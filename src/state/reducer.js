const initialState = {
  cart: [],
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADDTOCART":
      if (localStorage.getItem("cart")) {
        let cartOld = JSON.parse(localStorage.getItem("cart"));
        let newCart = [...cartOld, action.item];
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        localStorage.setItem("cart", JSON.stringify([action.item]));
      }
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVEFROMCART":
      let cartOld = JSON.parse(localStorage.getItem("cart"));
      let newCart = cartOld.filter((item) => {
        return item.id !== action.id;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.id;
        }),
      };
    case "CHECKINITIAL":
      let localCart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (localCart.length > 0) {
        return {
          ...state,
          cart: localCart,
        };
      }
    case "USERDETAIL":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "LOGGEDOUT":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
}
