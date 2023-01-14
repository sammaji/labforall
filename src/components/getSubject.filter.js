/**
 * this is a temporary fix
 * TODO: fix firebase entries
 */
const getModifedClassName = (class_value, subject) => {
  if (subject === "biology") {
    if (class_value === "10") return "Bilogy";
    else return "biology";
  }

  if (subject === "chemistry") {
    if (class_value === "10") {
      return "Chemistry";
    } else return "chemistry";
  }

  if (subject === "physics") {
    if (class_value === "10") {
      return "Physics";
    } else return "physics";
  }
  return subject;
};

export default getModifedClassName;
