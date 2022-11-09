import * as Yup from 'yup'

export const initialValues = {
    email:'',
    password:'',
  }
  
export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email address').required('Required field'),
    password: Yup.string().required('Required field')
  });
  