 import {ADD_ITEM,ALL_TODO_DATA, DELETE_TODO} from "./TodoActions.jsx" 

const initialState = { 
    list: [],
}
const TodoList = (state= initialState,action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                list : [...state.list,action.payload]
            }
        case ALL_TODO_DATA: 
            return {
                list : action.payload
            }
        case DELETE_TODO: 
            return {
                list: action.payload
            }
        default: return state;
  }
}
export default TodoList;