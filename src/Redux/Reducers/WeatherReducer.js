
export const weatherTypes = {
  SET_ALL: "SET_ALL",
  SET_DETAILS: "SET_DETAILS",
};

const initialState = {
    all: {},
    details: {}
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weatherTypes.SET_ALL:
            return {...state, all: action.payload};
        case weatherTypes.SET_DETAILS:
            return {...state, details: action.payload};
        default: return state;
    }
};

export default weatherReducer;
