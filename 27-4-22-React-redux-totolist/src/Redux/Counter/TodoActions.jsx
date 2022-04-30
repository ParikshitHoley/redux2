// Action types
export const ADD_ITEM = "ADD_ITEM";
export const ALL_TODO_DATA = "ALL_TODO_DATA";
export const DELETE_TODO = "DELETE_TODO";

// Action creators

export const AddItem = (payload) => {
    return {
      type: ADD_ITEM,
      payload,
    };
  };
  
  export const AllTodoData = (payload) => {
    return {
      type: ALL_TODO_DATA,
      payload,
    };
  };
  
  export const deleteData = (payload) => {
    return {
      type: DELETE_TODO,
      payload,
    };
  };