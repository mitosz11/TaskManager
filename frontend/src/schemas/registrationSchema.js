import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .max(16, 'Username must not be more than 16 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .max(16, 'Username must not be more than 16 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have at least 6 characters')
    .max(50, 'Max password length is 50')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm password must match')
    .required('Confirm password is required'),
  phoneNumber: Yup.string()
    .max(20, 'Max Phone number length is 20')
    .matches(/^\+?[0-9]+(-[0-9]+)*$/, 'Invalid phone number format'),
});

export default validationSchema;
