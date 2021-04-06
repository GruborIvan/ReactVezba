import { ADD_ARTICLE, ADD_PERSON } from "../../constants/action-types";

const osobeBase = [
  { id: 1, ime: "John", prezime: "Smith", godiste: 1993, pol: "Muski" },
  { id: 2, ime: "Eric", prezime: "Adams", godiste: 1999, pol: "Muski" },
  { id: 3, ime: "Bob", prezime: "James", godiste: 2004, pol: "Zenski" },
];

const initialState = {
  persons: osobeBase,
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }

  if (action.type === ADD_PERSON) {
    return Object.assign({}, state, {
      persons: state.persons.concat(action.payload),
    });
  }

  return state;
}

export default rootReducer;
