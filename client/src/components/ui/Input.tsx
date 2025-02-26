import { TextField } from '@mui/material';
import { IPropsInput } from '../../utils';

const Input = (props: IPropsInput) => {
  return <TextField {...props} />;
};

export default Input;

// set default props
Input.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  size: 'medium',
  type: 'text',
};
