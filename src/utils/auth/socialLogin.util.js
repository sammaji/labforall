import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import validateEmail from "../helpers/validateEmail.util";
import validatePassword from "../helpers/validatePassword.util";

const providers = {
  google: new GoogleAuthProvider(),
};

export const socialSignUp = async (option) => {
  const provider = providers[option];

  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = provider.credentialFromResult(result);
      console.log(result.user.uid);

      const token = credential.accessToken;
      const user = result.user;

      console.log(
        result.user.email,
        user.phoneNumber,
        user.photoURL,
        user.displayName
      );

      return result;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = provider.credentialFromError(error);
    });
};

export const signIn = async (email, password) => {
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
      console.log(userCredential);
      return userCredential
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
