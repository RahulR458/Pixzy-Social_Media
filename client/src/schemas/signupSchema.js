import * as Yup from 'yup';

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const signupSchema = Yup.object({
  emailOrNumber: Yup.string()
    .required('Email/Mobile Number is required')
    .test('emailOrPhone', 'Please enter a valid email or phone number', (value) => {
      const isValidEmail = Yup.string().email().isValidSync(value);
      const isValidPhone = phoneRegExp.test(value);
      return isValidEmail || isValidPhone;
    }),
  name: Yup.string().min(3).required("Name is required"),
  userName: Yup.string().min(3).required("User Name is required"),
  password: Yup.string().min(3).required("Password is required"),
});