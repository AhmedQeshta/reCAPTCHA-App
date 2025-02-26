import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { formInitialValue, formSchema } from '../../utils';
import { Button, Input } from '../ui';
import { Box } from '@mui/material';
import { requestVerifyToken } from '../../data';

const Form = (): JSX.Element => {
  const [errorCaptcha, setErrorCaptcha] = useState<string>();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: formInitialValue(),
    validationSchema: formSchema(),
    onSubmit: async (values) => {
      let token = captchaRef?.current?.getValue();

      if (token) {
        let { success } = await requestVerifyToken(token);
        if (!success) {
          setErrorCaptcha('Captcha is not valid');
        } else {
          setErrorCaptcha('');
        }
        alert(JSON.stringify(values, null, 2));
      } else {
        setErrorCaptcha('Captcha is not valid');
      }
    },
    validateOnChange: false,
  });

  return (
    <form onSubmit={handleSubmit} className="flex-column bg-form">
      <Input
        id="firstName"
        label="First Name"
        name="firstName"
        placeholder="First Name"
        value={values?.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.firstName && Boolean(errors?.firstName)}
        helperText={touched?.firstName && errors?.firstName}
      />
      <Input
        id="lastName"
        label="Last Name"
        name="lastName"
        placeholder="last Name"
        value={values?.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched?.lastName && Boolean(errors?.lastName)}
        helperText={touched?.lastName && errors?.lastName}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {/* process?.env?.REACT_APP_SITE_KEY */}
        <ReCAPTCHA ref={captchaRef} sitekey={'6LedV1gjAAAAAP9XCcDuU1jN5KN-XQKmKCquR45C'} />

        <Box
          component="p"
          sx={{
            color: 'red',
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {errorCaptcha}
        </Box>
      </Box>

      <Button>Send data</Button>
    </form>
  );
};

export default Form;
