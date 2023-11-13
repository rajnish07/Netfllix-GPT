import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
};
