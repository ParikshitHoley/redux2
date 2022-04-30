import { legacy_createStore as createStore, combineReducers } from "redux";
import TodoList from "./Redux/Counter/TodoReducers";
const rootReducer = combineReducers({
    TodoList
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
