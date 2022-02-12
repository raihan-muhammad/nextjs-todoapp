import { authentication } from "./../../firebase/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
export const signIn = (provider) => {
  return async (dispatch) => {
    const data = await signInWithPopup(authentication, provider);
    console.log(data);
    dispatch({ type: "SET_DATA_AUTH", payload: data });
  };
};

export const logOut = () => {
  return async (dispatch) => {
    const data = await signOut(authentication);
    console.log(data);
    dispatch({ type: "SET_DATA_AUTH", payload: data });
  };
};
