export default (password, cpassword = null) => {
  if (!password) {
    return false;
  }

  if (cpassword) {
    if (password !== cpassword) {
      return false;
    }
  }

  if (password.length < 8) {
    return false;
  }

  return true;
};
