import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (action, state) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        data: action.payload.hits,
        nbpages: action.payload.nbpages,
      };
    default:
      return state;
    // throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
