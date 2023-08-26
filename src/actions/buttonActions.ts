import { Dispatch } from "redux";

export const setButton = (isVisible: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: "SET_BUTTON", payload: isVisible });
};
