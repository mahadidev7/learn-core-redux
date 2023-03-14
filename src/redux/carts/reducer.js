import { ADDED_PRODUCT, } from "./actionTypes";
import initialState from "./initialState";
const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_PRODUCT:
      return [
        ...state,
        {
          id: nextTodoId(state),
          ...action.payload,
        },
      ];

    default:
      return state;
  }
};

export default reducer;