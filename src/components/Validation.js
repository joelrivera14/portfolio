const validation = (values) => {
  let errors = {};
  if (!values.user_name) {
    errors.user_name = "4 or more characters needed";
  }
  if (!values.user_email) {
    errors.user_email = "email needed";
  } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
    errors.user_email = "invalid email";
  }
  return errors;
};

export default validation;
