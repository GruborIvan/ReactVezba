import { ADD_ARTICLE, ADD_PERSON } from "../../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload: payload };
}

export function addPerson(payload) {
  return { type: ADD_PERSON, payload: payload };
}