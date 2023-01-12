import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../config/firebase.config";

const providers = {
  google: new GoogleAuthProvider(),
};

export default async (option) => {
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
      console.log(error);
      const email = error.customData.email;
      const credential = provider.credentialFromError(error);
    });
};
