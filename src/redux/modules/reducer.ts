// Reducer 파일들을 합치는 역할

import { combineReducers } from "redux";
import auth from "./auth";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import books from "./books";

const reducer = (history: History<unknown>) => combineReducers({
  auth,
  books,
  router : connectRouter(history),
});

export default reducer;