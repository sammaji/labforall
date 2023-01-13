import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import { db } from "../config/firebase.config";

export default async (roomId, callback) => {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((x) => ({
        id: x.id,
        ...x.data(),
      }));

      callback(messages);
    }
  );
};
