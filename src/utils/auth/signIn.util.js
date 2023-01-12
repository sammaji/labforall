import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase.config";
import validateEmail from "../helpers/validateEmail.util";
import validatePassword from "../helpers/validatePassword.util";

export default async (email, password) => {
  email = email.trim();
  password = password.trim();

  if (!validateEmail(email)) {
    throw new Error("Invalid Email");
  }

  if (!validatePassword(password)) {
    throw new Error("Invalid Password");
  }

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.localStorage.setItem("uid", user.uid);

      return userCredential;
    })
    .catch((error) => {
      console.log(error);
    });
};
