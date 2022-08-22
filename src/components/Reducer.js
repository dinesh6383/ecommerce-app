function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item !== action.payload;
        }),
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
}

function Filter(state, action) {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return { ...state, byPrice: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_FREE_DELIVERY":
      return { ...state, byFreeDelivery: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, bySearch: action.payload };
    case "CLEAR_FILTERS":
      return {
        byPrice: false,
        byRating: 0,
        byFastDelivery: false,
        bySearch: "",
      };
    default:
      return state;
  }
}

export { Reducer, Filter };
