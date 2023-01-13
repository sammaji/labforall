import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../config/firebase.config";

export default async (roomId, uid, text) => {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: uid,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};
