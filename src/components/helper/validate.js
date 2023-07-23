export const validate = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "لطفا نام کاربری خود را وارد کنید";
  } else if (formData.name.length < 5) {
    errors.name = "نام کاربری باید حداقل 5 کاراکتر باشد";
  } else {
    delete errors.name;
  }

  if (!formData.email) {
    errors.email = "لطفا ایمیل خود را وارد کنید";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "ایمیل وارد شده نامعتبر است";
  } else {
    delete errors.email;
  }

  if (!formData.text) {
    errors.text = "لطفا نظر خود را وارد کنید";
  } else {
    delete errors.text;
  }

  return errors;
};
