const INITIAL_STATE = [];

export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_FAV":
        return [
          {
          ...action.payload,
        },...state];
      default:
        return state;
    }
}