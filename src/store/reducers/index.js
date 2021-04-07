import { ADD_ARTICLE, ADD_PERSON, GET_NEWS, NEWS_RECEIVED } from "../../constants/action-types";

const osobeBase = [
  { id: 1, ime: "John", prezime: "Smith", godiste: 1993, pol: "Muski" },
  { id: 2, ime: "Eric", prezime: "Adams", godiste: 1999, pol: "Muski" },
  { id: 3, ime: "Bob", prezime: "James", godiste: 2004, pol: "Zenski" },
];

const initialState = {
  persons: osobeBase,
  articles: [],
  loading: false,
  news: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
         ...state,articles: [...state.articles,action.payload]
      }

    case ADD_PERSON:
      return {
        ...state,persons: [...state.persons,action.payload]
      }

    case GET_NEWS:
      return { ...state, loading: true }

    case NEWS_RECEIVED: 
      return { ...state, news: action.json, loading: false }

    default:
      return state;
  }
}

export default rootReducer;
