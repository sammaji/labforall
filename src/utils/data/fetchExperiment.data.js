import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "../config/firebase.config";

/* Fetch all the experiments of a particular class */
// Eg: fetchClasswiseExperiments(9, 'biology')
export const fetchClasswiseExperiments = async (id, subject) => {
  if (!id) id = 9;

  const collectionRef = collection(db, `experiments/class-${id}/${subject}`);
  const snapshot = [];
  try {
    const data = await getDocs(collectionRef);

    data.forEach(async (d) => {
      if (d.exists()) {
        const experiment = d.data();
        snapshot.push({ id: d.id, aim: experiment.Aim, theory: experiment.Theory });
      }
    });

    return snapshot;
  } catch (e) {
    console.warn("e.message1");
  }
};

export const fetchExperiment = async (id, subject, exp) => {
  const docRef = doc(db, `experiments/class-${id}/${subject}/${exp}`);
  try {
    const data = await getDoc(docRef);
    console.log(data.data());
    if (data.exists()) {
      const snapshot = await data.data();
      return snapshot;
    }
  } catch (e) {
    console.warn("e.message");
  }
};
