const defaultState = {
  customers: [],
};

export const CustomerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return { ...state, customers: state.customers + action.payload };
    }
    case "DELETE_CUSTOMERS": {
      return { ...state, customers: state.customers - action.payload };
    }
    default: {
      return state;
    }
  }
};
