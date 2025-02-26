import * as Yup from 'yup';

const formSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().min(2).max(50).required('First name is required'),
    lastName: Yup.string().min(2).max(50).required('Last name is required'),
  });
};

export default formSchema;
