import { taskUpdated, taskDelete } from "./actionTypes";
export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case taskDelete: {
      const newArray = [...state];
      const newArrayFilter = newArray.filter(
        (el) => el.id !== action.payload.id
      );
      return newArrayFilter;
    }
    default:
      return state;
  }
}
