import { doc, setDoc } from "firebase/firestore";

import { db } from "../config/firebase.config";

export default async (id, data) => {
  try {
    const docRef = doc(db, `user/${id}`);

    const res = await setDoc(docRef, data);
    console.log(res);
    return res;
  } catch (e) {
    console.log(e)
    throw new Error(e.message || "An unkonwn error occured");
  }
};
