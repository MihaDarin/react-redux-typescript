const defaultState = {
    points: 0,
  };
  
 export const PointReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_POINT":
        return { ...state, points: state.points + action.payload };
      case "CRUSH_POINT":
        return { ...state, points: state.points - action.payload };
      default: {
        return state;
      }
    }
  };