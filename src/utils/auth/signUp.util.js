import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase.config";
import validateEmail from "../helpers/validateEmail.util";
import validatePassword from "../helpers/validatePassword.util";
import writeUserData from "./writeUserData.util";

export default async (email, password, data) => {
  console.log("signing up...");
  email = email.trim();
  password = password.trim();

  if (!validateEmail(email)) {
    throw new Error("Invalid Email");
  }

  if (!validatePassword(password)) {
    throw new Error("Invalid Password");
  }

  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      window.localStorage.setItem("uid", user.uid);

      try {
        const writeData = await writeUserData(user.uid, {
          email: user.email,
          ...data,
        });
        return { userCredential, writeData };
      } catch (e) {
        throw new Error(e.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
